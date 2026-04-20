#!/usr/bin/env python3
"""
Generate program.pdf from program-data.js.

Usage: python3 generate-pdf.py
Requires: pip install reportlab
"""

import json
import re
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm, mm
from reportlab.lib.colors import HexColor, white
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Spacer, Paragraph
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER

# --- Load data from program-data.js ---
with open("program-data.js") as f:
    raw = f.read()
# Strip "var PROGRAM_DATA = " prefix and trailing ";"
json_str = re.sub(r"^var\s+\w+\s*=\s*", "", raw).rstrip().rstrip(";")
data = json.loads(json_str)

# --- Color palette (matches website & spreadsheet) ---
SESSION_BG  = HexColor("#CFE2F3")
KEYNOTE_BG  = HexColor("#F4CCCC")
SUBTHEME_BG = HexColor("#F0F0F0")
PAPER_BG    = HexColor("#FFFFFF")
SHORT_BG    = HexColor("#FFFFFF")
BREAK_BG    = HexColor("#D9D9D9")
EVENT_BG    = HexColor("#FAFAFA")
TITLE_BG    = HexColor("#000000")
DARK_BLUE   = HexColor("#1a3a5c")
MED_BLUE    = HexColor("#2c5f8a")

styles = getSampleStyleSheet()

title_style = ParagraphStyle("Title", parent=styles["Title"], fontSize=18,
                              textColor=DARK_BLUE, spaceAfter=2*mm, alignment=TA_CENTER)
subtitle_style = ParagraphStyle("Subtitle", parent=styles["Normal"], fontSize=11,
                                 textColor=MED_BLUE, spaceAfter=6*mm, alignment=TA_CENTER)
time_style = ParagraphStyle("Time", fontSize=8.5, leading=11, textColor=DARK_BLUE,
                             fontName="Helvetica-Bold")
paper_style = ParagraphStyle("Paper", fontSize=8.5, leading=11)
paper_bold = ParagraphStyle("PaperBold", fontSize=8.5, leading=11, fontName="Helvetica-Bold")
author_style = ParagraphStyle("Author", fontSize=7.5, leading=10, textColor=HexColor("#555555"),
                               fontName="Helvetica-Oblique")
dur_style = ParagraphStyle("Dur", fontSize=8, leading=10, textColor=HexColor("#555555"))
session_style = ParagraphStyle("Session", fontSize=10, leading=13, textColor=DARK_BLUE,
                                fontName="Helvetica-Bold")
sub_style = ParagraphStyle("Sub", fontSize=8, leading=10, textColor=MED_BLUE,
                            fontName="Helvetica-BoldOblique")
break_style = ParagraphStyle("Break", fontSize=9, leading=12, fontName="Helvetica-Oblique",
                              textColor=HexColor("#555555"))

COL_WIDTHS = [3.2*cm, 12.0*cm, 2.8*cm]

# --- Build table ---
table_data = []
row_styles = []

for item in data:
    t = item["type"]
    time = item.get("time", "")
    title = item.get("title", "")
    dur = item.get("duration", "")

    if t == "session":
        table_data.append([
            Paragraph(time, ParagraphStyle("st", parent=session_style, fontSize=9)),
            Paragraph(title, session_style),
            Paragraph("", session_style),
        ])
        row_styles.append(("session", SESSION_BG))

    elif t == "break":
        table_data.append([
            Paragraph(time, break_style),
            Paragraph(title, break_style),
            Paragraph("", break_style),
        ])
        row_styles.append(("break", BREAK_BG))

    elif t == "keynote":
        speaker = item.get("speaker", "")
        label = title
        if speaker and speaker != "TBA":
            label += ": " + speaker
        table_data.append([
            Paragraph(time, time_style),
            Paragraph(label, paper_bold),
            Paragraph(dur, dur_style),
        ])
        row_styles.append(("keynote", KEYNOTE_BG))

    elif t == "subtheme":
        table_data.append([
            Paragraph("", sub_style),
            Paragraph(f"── {title} ──", sub_style),
            Paragraph("", sub_style),
        ])
        row_styles.append(("subtheme", SUBTHEME_BG))

    elif t == "event":
        table_data.append([
            Paragraph(time, time_style),
            Paragraph(title, paper_bold),
            Paragraph(dur, dur_style),
        ])
        row_styles.append(("event", EVENT_BG))

    elif t == "paper":
        fmt = item.get("format", "regular")
        tag = ""
        if fmt == "short":
            tag = '<font color="#555555">[Short] </font>'
        elif fmt == "tool":
            tag = '<font color="#555555">[Tool] </font>'

        authors = item.get("authors", "")
        artifact_badges = item.get("artifact_badges", [])
        cell_content = f"{tag}{title}"
        if authors:
            cell_content += f"<br/><font size=7 color='#555555'><i>{authors}</i></font>"
        if artifact_badges:
            badge_parts = []
            badge_colors = {"Available": "#97ca00", "Functional": "#007ec6", "Reusable": "#555555"}
            for b in artifact_badges:
                c = badge_colors.get(b, "#555555")
                badge_parts.append(f"<font color='{c}'>✓ {b}</font>")
            cell_content += f"<br/><font size=6.5><b>Artifact: {'  ·  '.join(badge_parts)}</b></font>"

        bg = PAPER_BG
        table_data.append([
            Paragraph(time, time_style),
            Paragraph(cell_content, paper_style),
            Paragraph(dur, dur_style),
        ])
        row_styles.append(("paper", bg))

table = Table(table_data, colWidths=COL_WIDTHS)

style_cmds = [
    ("GRID", (0, 0), (-1, -1), 0.4, HexColor("#cccccc")),
    ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ("LEFTPADDING", (0, 0), (-1, -1), 6),
    ("RIGHTPADDING", (0, 0), (-1, -1), 6),
    ("TOPPADDING", (0, 0), (-1, -1), 4),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
]

for i, (rtype, bg) in enumerate(row_styles):
    style_cmds.append(("BACKGROUND", (0, i), (-1, i), bg))

table.setStyle(TableStyle(style_cmds))

# --- Build PDF ---
doc = SimpleDocTemplate("program.pdf", pagesize=A4,
                         topMargin=1.5*cm, bottomMargin=1.5*cm,
                         leftMargin=1.5*cm, rightMargin=1.5*cm)

elements = [
    Paragraph("SysTEX 2026 Workshop Program", title_style),
    Paragraph("Monday, April 27th — Room Ochil 1, Level 1", subtitle_style),
    table,
    Spacer(1, 8*mm),
]

# Legend
leg_style = ParagraphStyle("leg", fontSize=7.5, leading=10)
legend_data = [[
    Paragraph('<font color="#555555">■</font> Short Paper (10 min)', leg_style),
    Paragraph('<font color="#555555">■</font> Tool Paper (15+5 min)', leg_style),
    Paragraph('Regular Paper (15+5 min)', leg_style),
]]
legend = Table(legend_data, colWidths=[6*cm, 6*cm, 6*cm])
legend.setStyle(TableStyle([("ALIGN", (0, 0), (-1, -1), "CENTER")]))
elements.append(legend)

doc.build(elements)
print("✓ program.pdf generated")

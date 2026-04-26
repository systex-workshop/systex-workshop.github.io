var PROGRAM_DATA = [
  {
    "type": "session",
    "time": "9:00 – 10:30",
    "title": "Session 1: Attacks on TEEs"
  },
  {
    "type": "event",
    "time": "09:00 – 09:10",
    "title": "Opening and Welcome"
  },
  {
    "type": "keynote",
    "time": "09:10 – 09:50",
    "title": "Keynote: Let's Get Physical: Low-Cost Memory Interposer Attacks and the Future of Confidential Computing",
    "duration": "30 + 10 min",
    "speaker": "Jo Van Bulck (KU Leuven)",
    "abstract": "Confidential computing has opened new possibilities for securing sensitive workloads in untrusted cloud and edge environments. While initial enclave platforms such as Intel SGX offered strong architectural isolation at the cost of tight memory constraints, newer confidential VM technologies, exemplified by AMD SEV and Intel TDX, promise seamless lift-and-shift deployment with vastly expanded encrypted memory. In this talk, we challenge a core assumption of today's scalable confidential computing solutions: that meaningful physical memory attacks would require expensive specialized equipment and, therefore, remain impractical in realistic threat models. We present a new class of low-cost physical memory bus interposer attacks using custom PCBs and commodity hardware, allowing privileged adversaries to silently corrupt or replay memory and mount powerful end-to-end exploits against widely deployed systems. Finally, we examine the mitigation landscape and outline challenges and opportunities for next-generation hardened confidential computing architectures.",
    "bio": "Jo Van Bulck is a professor in the DistriNet lab at the Department of Computer Science of KU Leuven, Belgium. His research explores attacks and defenses at the hardware-software boundary, with particular attention to microarchitectural attacks and privileged side channels in trusted execution environments. Jo's research has uncovered several innovative attack vectors in commodity x86 processors that have led to firmware and silicon mitigations in hardware, as well as software patches in major operating systems and compilers."
  },
  {
    "type": "subtheme",
    "title": "Attacks"
  },
  {
    "type": "paper",
    "time": "09:50 – 10:10",
    "title": "StepOverflow: PMC Overflows on AMD SEV",
    "duration": "15 + 5 min",
    "authors": "Anja Rabich (University of Luebeck), Jonah Heller (University of Luebeck), Florian Sieck (University of Luebeck), Thomas Eisenbarth (University of Luebeck)",
    "pdf": "papers/systex26-paper16.pdf",
    "format": "regular",
    "artifact_url": "https://github.com/UzL-ITS/StepOverflow",
    "artifact_badges": [
      "Available",
      "Reusable"
    ]
  },
  {
    "type": "paper",
    "time": "10:10 – 10:30",
    "title": "Breaking Isolation: Last-level Cache Side-Channel Attacks on AWS Nitro Enclaves",
    "duration": "15 + 5 min",
    "authors": "Monder Rammouz (TU Munich), Quoc Do Le (Huawei Munich Research Center)",
    "pdf": "papers/systex26-paper47.pdf",
    "format": "regular",
    "artifact_url": "https://codeberg.org/monder/LLCEnclave.git",
    "artifact_badges": [
      "Available",
      "Reusable"
    ]
  },
  {
    "type": "break",
    "time": "10:30 – 11:00",
    "title": "Coffee Break"
  },
  {
    "type": "session",
    "time": "11:00 – 12:30",
    "title": "Session 2: TEE Platforms & Systems"
  },
  {
    "type": "subtheme",
    "title": "Embedded TEEs"
  },
  {
    "type": "paper",
    "time": "11:00 – 11:20",
    "title": "Control-Flow Balancing for Texas Instruments IPE",
    "duration": "15 + 5 min",
    "authors": "Marton Bognar (DistriNet, KU Leuven), Alexander Croes (DistriNet, KU Leuven), Hans Winderix (DistriNet, KU Leuven), Jo Van Bulck (DistriNet, KU Leuven)",
    "pdf": "papers/systex26-paper99.pdf",
    "format": "regular",
    "artifact_url": "https://github.com/martonbognar/ipe-balancing",
    "artifact_badges": [
      "Available",
      "Reusable"
    ]
  },
  {
    "type": "paper",
    "time": "11:20 – 11:40",
    "title": "Keystone with Linux PREEMPT_RT: Real-Time Enclaves on RISC-V?",
    "duration": "15 + 5 min",
    "authors": "Oscar Van Slijpe (Université Libre de Buxelles), Jean-Michel Dricot (Université libre de Bruxelles), Jan Tobias Mühlberg (Université libre de Bruxelles)",
    "pdf": "papers/systex26-paper82.pdf",
    "format": "regular",
    "artifact_url": "https://github.com/ReSP-Lab/2026-systex-keystone-rt-linux/tree/artifact-submission-version",
    "artifact_badges": [
      "Available",
      "Reusable"
    ]
  },
  {
    "type": "subtheme",
    "title": "TEE Performance"
  },
  {
    "type": "paper",
    "time": "11:40 – 12:00",
    "title": "Optimizing Launch Latency for Confidential VMs with Device Passthrough in the Linux KVM Hypervisor",
    "duration": "15 + 5 min",
    "authors": "Hao-Jung Wei (National Taiwan University), Shih-Wei Li (National Taiwan University)",
    "pdf": "papers/systex26-paper50.pdf",
    "format": "regular",
    "artifact_url": "https://github.com/ntu-ssl/start-up-optimization",
    "artifact_badges": [
      "Available",
      "Functional"
    ]
  },
  {
    "type": "paper",
    "time": "12:00 – 12:20",
    "title": "Performance and Security of TEE-Based Threshold Cryptography",
    "duration": "15 + 5 min",
    "authors": "Marius Haller (Karlsruhe Institute of Technology (KIT)), Marc Leinweber (Karlsruhe Institute of Technology (KIT)), Tilo Spannagel (Karlsruhe Institute of Technology (KIT)), Markus Raiber (Karlsruhe Institute of Technology (KIT)), Hannes Hartenstein (Karlsruhe Institute of Technology (KIT))",
    "pdf": "papers/systex26-paper9.pdf",
    "format": "regular"
  },
  {
    "type": "break",
    "time": "12:30 – 14:00",
    "title": "Lunch Break"
  },
  {
    "type": "session",
    "time": "14:00 – 15:30",
    "title": "Session 3: Attestation & Trust"
  },
  {
    "type": "keynote",
    "time": "14:00 – 14:40",
    "title": "Keynote: Addressing the Real-World Challenges of Confidential Computing Services",
    "duration": "30 + 10 min",
    "speaker": "Antoine Delignat-Lavaud (Azure Research)",
    "abstract": "Operating confidential computing services introduces new challenges beyond traditional cloud security. Clients must verify not only service identity but its attested implementation, yet distributing and validating attestation evidence at scale remains complex. Service updates require coordinated changes to attestation policies, while dependencies on other services extend the trust chain across multiple attestable components. Attestation is not in itself sufficient for establishing trust without a lot of additional evidence about how binaries are built and what they consist of. In this talk I will present some of the protocols and services we have built to make the operation of confidential computing practical for complex real-world services.",
    "bio": "Antoine Delignat-Lavaud is a security researcher in Azure Research's Confidential Computing group, whose focus is to build the secure cloud of tomorrow with hardware-based trusted execution technology, ensuring that all privacy-sensitive data remains isolated, encrypted and integrity protected thorough its lifecycle. He leads efforts on protocols, platform services, and hardware design with partner silicon vendors to make confidential machine learning available to privacy-sensitive industries like health care and financial services."
  },
  {
    "type": "subtheme",
    "title": "Attestation"
  },
  {
    "type": "paper",
    "time": "14:40 – 14:50",
    "title": "On Attestation Dilution",
    "duration": "10 min",
    "authors": "Charly Castes (EPFL)",
    "pdf": "papers/systex26-paper24.pdf",
    "format": "short"
  },
  {
    "type": "paper",
    "time": "14:50 – 15:00",
    "title": "Mind the Gap: Where TEE Attestations Fall Short and Why We Need Proof of Cloud",
    "duration": "10 min",
    "authors": "Filip Rezabek (Technical University of Munich), Jonathan Passerat-Palmbach (Flashbots)",
    "pdf": "papers/systex26-paper66.pdf",
    "format": "short"
  },
  {
    "type": "subtheme",
    "title": "Trusted Services"
  },
  {
    "type": "paper",
    "time": "15:00 – 15:20",
    "title": "Trusted and Transparent Time-Stamping Through TEEs and Network Time Security",
    "duration": "15 + 5 min",
    "authors": "Tobias Nießen (TU Wien), Andrew Paverd (Microsoft Security Response Center)",
    "pdf": "papers/systex26-paper56.pdf",
    "format": "regular"
  },
  {
    "type": "break",
    "time": "15:30 – 16:00",
    "title": "Coffee Break"
  },
  {
    "type": "session",
    "time": "16:00 – 17:30",
    "title": "Session 4: TEE Applications"
  },
  {
    "type": "subtheme",
    "title": "Trust & Certification"
  },
  {
    "type": "paper",
    "time": "16:00 – 16:20",
    "title": "CACTEE: Confidential Asset Certification using Trusted Execution Environments",
    "duration": "15 + 5 min",
    "authors": "Istemi Ekin Akkus (Nokia Bell Labs), Ivica Rimac (Nokia Bell Labs)",
    "pdf": "papers/systex26-paper77.pdf",
    "format": "regular",
    "artifact_url": "https://github.com/Nokia-Bell-Labs/confidential-asset-certification-using-tees",
    "artifact_badges": [
      "Available",
      "Reusable"
    ]
  },
  {
    "type": "subtheme",
    "title": "Platforms & AI"
  },
  {
    "type": "paper",
    "time": "16:20 – 16:40",
    "title": "Epsilon: A Bring-Your-Own-Data Research Platform with Trusted Verification",
    "duration": "15 + 5 min",
    "authors": "Khajiev Nizomjon (Action Lab, Monash University), Aare Puussaar (Action Lab, Monash University), Chu Lee Shen (Action Lab, Monash University Malaysia), Patrick Olivier (Action Lab, Monash University), Lay-Ki Soon (Action Lab, Monash University Malaysia), Delvin Varghese (Action Lab, Monash University)",
    "pdf": "papers/systex26-paper67.pdf",
    "format": "tool",
    "artifact_url": "https://github.com/Epsilon-Data/epsilon",
    "artifact_badges": [
      "Available",
      "Reusable"
    ]
  },
  {
    "type": "paper",
    "time": "16:40 – 16:50",
    "title": "AI Agents Need Both Hardware-Backed Security and Application-Level Guardrails",
    "duration": "10 min",
    "authors": "Shichen Hu (Technical University of Munich), Quoc Do Le (Huawei Research)",
    "pdf": "papers/systex26-paper10.pdf",
    "format": "short",
    "artifact_url": "https://codeberg.org/BarryShichenHu/Secure_AI_Agent/src/tag/artifact-evaluation",
    "artifact_badges": [
      "Available",
      "Reusable"
    ]
  },
  {
    "type": "event",
    "time": "16:50 – 17:10",
    "title": "Open Discussion & Closing Remarks"
  },
  {
    "type": "break",
    "time": "17:30 – 19:30",
    "title": "Welcome Reception"
  }
];

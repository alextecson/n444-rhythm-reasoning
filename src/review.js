// High-yield review content for N444 Exam 2.
// Dysrhythmias is synthesized from the VERIFIED course-bank items; the other
// domains are synthesized from the uploaded lecture (GI/HIV/Liver Critical Care
// deck + speaker notes, RA & SLE fact sheet, RA and SLE decks). Format: tight,
// phone-skimmable bullets. Edit freely — this is the source of truth for Review.
//
// Shape:
//   REVIEW_DOMAINS: [{ id, quizDomain, title, blurb, subLabel?, sections:[{h,b:[]}], topics? }]
//   topics: [{ id, title, blurb, strip?, sections:[{h,b:[]}] }]   // strip = EKG strip key (dysrhythmias only)
//   `id`/`quizDomain` must match a DATA domain so "Quiz this topic" works.

export const REVIEW_DOMAINS = [
  {
    id: "Dysrhythmias",
    quizDomain: "Dysrhythmias",
    title: "Dysrhythmias",
    subLabel: "Rhythm by rhythm",
    blurb: "Read the strip, decide stable vs. unstable, then pick the right shock/drug. Start here, then open a rhythm below.",
    sections: [
      {
        h: "The 3 questions that decide everything",
        b: [
          "Does the patient have a PULSE? No pulse = arrest → CPR. Treat the patient, not the monitor (an organized rhythm with no pulse is PEA — still CPR).",
          "Is the patient STABLE or UNSTABLE? Unstable cues: hypotension, chest pain, new confusion/↓LOC, cool/clammy/diaphoretic, dyspnea. A normotensive, asymptomatic patient is stable.",
          "Is the rhythm SHOCKABLE or not? Shockable = VF and pulseless VT only. Non-shockable = asystole and PEA (never defibrillate these).",
        ],
      },
      {
        h: "Shock type — don't mix these up",
        b: [
          "Defibrillation: HIGH energy, UNsynchronized. For pulseless VF / pulseless VT (no R wave to sync to).",
          "Synchronized cardioversion: LOWER energy, timed to the R wave. For UNSTABLE organized rhythms WITH a pulse (unstable SVT, unstable VT, A-fib with RVR).",
          "Sync mode must be ON for cardioversion — landing energy on the T wave (vulnerable period) can induce VF. Sedate the awake patient first.",
        ],
      },
      {
        h: "The drug map (anticipate these)",
        b: [
          "Symptomatic bradycardia → atropine first; if it fails → transcutaneous pacing (atropine often fails in complete heart block — pace).",
          "Stable SVT → vagal maneuvers → adenosine (6 mg, then 12 mg) → cardioversion only if unstable.",
          "Stable VT (has pulse) → IV antiarrhythmic (amiodarone) first; cardioversion if drugs fail or patient destabilizes.",
          "Torsades (polymorphic VT, long QT) → IV magnesium sulfate; fix K⁺/Mg²⁺, stop QT-prolonging drugs.",
          "VF / pulseless VT → CPR + defibrillation + epinephrine.",
          "Asystole / PEA → CPR + epinephrine + find the reversible cause. NO shock.",
        ],
      },
      {
        h: "Adenosine — how to give it",
        b: [
          "RAPID IV push over 1–2 seconds, immediately followed by a fast saline flush; use the port closest to the patient (ultra-short half-life).",
          "Warn the patient: brief flushing, chest pressure, and a short pause/transient asystole are EXPECTED — keep them on the monitor with a code cart nearby.",
        ],
      },
      {
        h: "PEA — the trap rhythm",
        b: [
          "Organized rhythm on the monitor but NO pulse = pulseless electrical activity. It is a cardiac arrest.",
          "Non-shockable: CPR + epinephrine + hunt the reversible cause (H's & T's: hypoxia, hypovolemia, hyper/hypokalemia, hydrogen ion, hypothermia; toxins, tamponade, tension pneumothorax, thrombosis).",
          "Classic NCLEX setup: 'monitor shows sinus tach but patient is pulseless' → start CPR. Treat the patient, not the screen.",
        ],
      },
      {
        h: "Device teaching (pacemaker / ICD)",
        b: [
          "After insertion, DON'T raise the arm on the incision side above the shoulder and avoid vigorous arm ROM — it can dislodge the new lead.",
          "Digoxin toxicity cues: nausea, anorexia, visual changes (halos/yellow vision), bradycardia.",
        ],
      },
    ],
    topics: [
      {
        id: "sinus_brady", strip: "sinus_brady", title: "Sinus Bradycardia",
        blurb: "Normal sinus, just slow. Treat the patient, not the number.",
        sections: [
          { h: "On the strip", b: [
            "Regular, rate <60/min, one normal upright P before every QRS, normal PR (0.12–0.20 s).",
            "Differentiator: a normal upright P before each QRS = sinus (junctional rhythm has absent/inverted/retrograde P waves)." ] },
          { h: "What to do", b: [
            "Asymptomatic (e.g., conditioned athlete with high vagal tone) → document and monitor; no treatment.",
            "Symptomatic (dizzy, hypotensive, ↓LOC) → atropine first; pacing if atropine fails." ] },
          { h: "Don't get cooked", b: [
            "Significance depends on SYMPTOMS, not the rate itself. 52/min in an athlete with normal BP is benign." ] },
        ],
      },
      {
        id: "sinus_tach", strip: "sinus_tach", title: "Sinus Tachycardia",
        blurb: "A sign, not a primary dysrhythmia — find the cause.",
        sections: [
          { h: "On the strip", b: [
            "Regular, rate 100–150/min, normal P before each QRS, normal PR. Gradual onset tied to a stressor." ] },
          { h: "What to do", b: [
            "It's usually compensatory → treat the underlying cause (pain, fever, hypoxia, hypovolemia), not the rate.",
            "If the patient is pulseless with sinus tach on the monitor → that's PEA → CPR." ] },
          { h: "Don't get cooked", b: [
            "Visible normal P waves + rate ≤150 = sinus tach, NOT SVT. SVT is usually >150 and hides the P waves." ] },
        ],
      },
      {
        id: "afib", strip: "afib", title: "Atrial Fibrillation",
        blurb: "Irregularly irregular, no P waves — the stroke rhythm.",
        sections: [
          { h: "On the strip", b: [
            "Irregularly irregular R-R, NO organized P waves, fibrillatory (chaotic) baseline, usually narrow QRS. PR can't be measured (no P waves).",
            "Rate <100 = 'controlled'; >100 = 'rapid ventricular response (RVR).'" ] },
          { h: "What to do", b: [
            "Priority concern = embolic STROKE from atrial thrombus → anticoagulation drives the plan of care.",
            "Before elective cardioversion when A-fib >48 h or unknown duration → ensure anticoagulation (or clear with TEE) to avoid dislodging a clot.",
            "Two jobs: anticoagulants prevent stroke; rate-control drugs (beta-blockers/CCBs) slow the ventricular response." ] },
          { h: "Don't get cooked", b: [
            "Sawtooth waves = atrial FLUTTER, not fibrillation. ≥3 P-wave shapes = MAT.",
            "The defining combo is absent P waves + irregular irregularity." ] },
        ],
      },
      {
        id: "svt", strip: "svt", title: "Supraventricular Tachycardia (SVT)",
        blurb: "Narrow, fast, regular, abrupt on/off — vagal then adenosine.",
        sections: [
          { h: "On the strip", b: [
            "Narrow QRS, regular, very fast (often 150–250/min), no discernible P waves (buried in the prior T wave). Abrupt start/stop = paroxysmal.",
            "Mechanism: reentrant circuit at/near the AV node — which is why AV-nodal blockers (vagal, adenosine) terminate it." ] },
          { h: "What to do (STABLE)", b: [
            "Vagal maneuvers (bear down/Valsalva) FIRST → adenosine 6 mg rapid push, then 12 mg if needed → cardioversion only if unstable." ] },
          { h: "What to do (UNSTABLE)", b: [
            "Hypotension, chest pain, ↓LOC → SYNCHRONIZED cardioversion (sync ON, sedate the awake patient, lower energy than defib)." ] },
          { h: "Don't get cooked", b: [
            "Visible P waves + rate ≤150 = sinus tach, not SVT. Atropine is for bradycardia — never for SVT." ] },
        ],
      },
      {
        id: "first_degree", strip: "first_degree", title: "First-Degree AV Block",
        blurb: "Long PR, but every beat still gets through.",
        sections: [
          { h: "On the strip", b: [
            "Consistently prolonged PR (>0.20 s) that is the SAME on every beat, with a QRS after every P (1:1 conduction). Usually regular." ] },
          { h: "What to do", b: [
            "Usually benign in an asymptomatic patient → document and monitor." ] },
          { h: "Don't get cooked", b: [
            "Key: NO dropped beats. If some P waves fail to conduct, it's a higher-degree block.",
            "Reflects slowed conduction through the AV node while still conducting every impulse." ] },
        ],
      },
      {
        id: "third_degree", strip: "third_degree", title: "Third-Degree (Complete) AV Block",
        blurb: "Atria and ventricles march to separate drummers.",
        sections: [
          { h: "On the strip", b: [
            "Regular P waves AND regular QRS, but NO relationship between them (complete AV dissociation). Slow ventricular escape rate (e.g., 30–40/min).",
            "Atrial rate (e.g., 80) and ventricular rate (e.g., 30) are independent; a ventricular/junctional escape pacemaker drives the ventricles." ] },
          { h: "What to do", b: [
            "Symptomatic/unstable (hypotension, slow rate) → prepare for TRANSCUTANEOUS PACING. Atropine is often ineffective in complete block." ] },
          { h: "Don't get cooked", b: [
            "First-degree: every P conducts with a long PR. Complete block: P waves and QRS are fully dissociated." ] },
        ],
      },
      {
        id: "vtach", strip: "vtach", title: "Ventricular Tachycardia (Monomorphic)",
        blurb: "Wide, regular, fast, uniform — pulse decides the plan.",
        sections: [
          { h: "On the strip", b: [
            "Wide QRS (≥0.12 s), regular, rate ~150–250/min, UNIFORM (identical) QRS shape, no visible P waves." ] },
          { h: "What to do", b: [
            "STABLE (has pulse, normotensive) → IV antiarrhythmic (amiodarone) first; cardioversion if drugs fail or patient destabilizes.",
            "PULSELESS VT → shockable arrest → CPR + DEFIBRILLATION.",
            "UNSTABLE with a pulse → synchronized cardioversion." ] },
          { h: "Don't get cooked", b: [
            "A wide-complex tachycardia is treated as VT until proven otherwise. AV dissociation favors VT over SVT-with-aberrancy.",
            "Uniform QRS = monomorphic; continuously twisting QRS = torsades (polymorphic)." ] },
        ],
      },
      {
        id: "torsades", strip: "torsades", title: "Torsades de Pointes",
        blurb: "Polymorphic VT that twists — think magnesium + long QT.",
        sections: [
          { h: "On the strip", b: [
            "Polymorphic VT: QRS amplitude twists around the baseline, waxing and waning. Associated with a PROLONGED QT." ] },
          { h: "What to do", b: [
            "With a pulse → IV MAGNESIUM SULFATE (stabilizes the membrane, suppresses early afterdepolarizations).",
            "Also correct hypokalemia/hypomagnesemia and STOP QT-prolonging drugs (prevents recurrence).",
            "PULSELESS torsades → treat as a shockable arrest: CPR + defibrillation." ] },
          { h: "Don't get cooked", b: [
            "Long QT on a baseline strip is the warning sign — anticipate torsades. Low Mg²⁺ and low K⁺ set the stage.",
            "Not treated with adenosine, atropine, or calcium-channel blockers." ] },
        ],
      },
      {
        id: "vfib", strip: "vfib", title: "Ventricular Fibrillation",
        blurb: "Chaotic, no QRS, always pulseless — shock it.",
        sections: [
          { h: "On the strip", b: [
            "Chaotic, disorganized, varying-amplitude deflections with NO identifiable QRS. No measurable rate. ALWAYS pulseless." ] },
          { h: "What to do", b: [
            "Shockable arrest → high-quality CPR + early DEFIBRILLATION (unsynchronized — no R wave to sync to) + epinephrine.",
            "Refractory VF → continue CPR, repeat shocks, epinephrine, consider amiodarone. Minimize compression interruptions.",
            "After a shock, immediately resume CPR (no prolonged pulse check)." ] },
          { h: "Don't get cooked", b: [
            "VF has NO organized QRS; VT has wide but discrete QRS. Fine VF (low amplitude) ≈ longer downtime — still shock.",
            "Never synchronized-cardiovert VF (no QRS to synchronize to)." ] },
        ],
      },
      {
        id: "asystole", strip: "asystole", title: "Asystole",
        blurb: "Flat line, no electrical activity — CPR, never shock.",
        sections: [
          { h: "On the strip", b: [
            "A true flat line with no electrical deflections. Confirm in TWO leads and check lead placement first." ] },
          { h: "What to do", b: [
            "Non-shockable arrest → high-quality CPR + epinephrine every 3–5 min + find/treat reversible causes (H's & T's).",
            "Persistent asystole → keep doing CPR, repeat epinephrine, keep hunting reversible causes." ] },
          { h: "Don't get cooked", b: [
            "Defibrillation is useless — there's no electrical activity to reorganize.",
            "Fine VF shows low-amplitude chaotic activity (shockable); asystole is truly flat. A flat line in an awake, talking patient = disconnected/displaced lead, not asystole." ] },
        ],
      },
    ],
  },

  {
    id: "Liver", quizDomain: "Liver", title: "Liver Failure & Cirrhosis",
    subLabel: "Go deeper by problem",
    blurb: "End-stage liver disease kills down four lanes — bleeding, the brain, infection, and the kidneys. Recognize the lane, take the first action, name the metric that proves it worked.",
    sections: [
      { h: "Four lanes that kill in ESLD", b: [
        "1) Variceal hemorrhage — the fastest killer (airway + bleeding).",
        "2) Hepatic encephalopathy — ammonia rises, mentation falls; can become an airway problem.",
        "3) Infection — especially spontaneous bacterial peritonitis (SBP).",
        "4) Effective hypovolemia / AKI — vasodilation + third-spacing → hepatorenal syndrome.",
        "All lecture long: name the lane, the first action, and the metric that proves it helped." ] },
      { h: "Tie every cue to a failed function", b: [
        "Synthetic failure: ↓albumin → edema/ascites; ↓clotting factors → bruising/bleeding; risk of hypoglycemia.",
        "Excretory failure: jaundice, dark urine, pale/clay stools, pruritus.",
        "Detox failure: ↑ammonia → sleep-wake reversal (earliest sign), confusion, asterixis, somnolence.",
        "Portal hypertension: ascites, splenomegaly with thrombocytopenia, varices." ] },
      { h: "Diet IS treatment", b: [
        "2 g sodium/day (aim ≤500 mg/meal + two low-Na snacks); read labels (<2000 mg Na/day).",
        "Adequate protein — only restrict short-term for refractory HE. Small frequent meals; strict alcohol abstinence.",
        "Avoid NSAIDs and acetaminophen. Daily weight + girth (same scale, same time, after void).",
        "High-yield snack: Greek yogurt + berries (protein, low sodium). Call parameters: gain >2 lb/24 h or >5 lb/week." ] },
      { h: "Med safety & hepatotoxins", b: [
        "Acetaminophen is hepatotoxic and hides in many combo OTC products → APAP ceiling often ≤2 g/day (verify policy); reconcile all OTCs.",
        "Diuretics: spironolactone 100 + furosemide 40 mg; HOLD/notify if K⁺ >5.0 or creatinine rising. Watch for hyponatremia.",
        "Bleeding risk (high INR + low platelets): bleeding precautions — soft toothbrush, no rectal temps, avoid invasive procedures." ] },
    ],
    topics: [
      {
        id: "varices", title: "Variceal Hemorrhage",
        blurb: "Portal pressure backs up into thin-walled esophageal veins that rupture and bleed briskly.",
        sections: [
          { h: "Why it happens", b: [
            "Scarred liver resists flow → portal pressure backs up → blood reroutes through collateral (esophageal/gastric) veins → varices → rupture → massive hematemesis/melena." ] },
          { h: "First actions (hypotension + melena)", b: [
            "Airway/oxygen and TWO large-bore IVs (16–18 g) FIRST; keep suction ready.",
            "Then labs + type & cross; activate massive transfusion protocol if ordered.",
            "Octreotide (50 mcg IV bolus → 50 mcg/hr) to lower portal pressure; notify GI for urgent EGD/banding (or TIPS).",
            "Ceftriaxone prophylaxis is often given. Nonselective beta-blocker (propranolol) lowers portal pressure to PREVENT future bleeds." ] },
          { h: "Don't get cooked", b: [
            "Do NOT rush an NG tube into a suspected variceal bleed — resuscitate first; NG may be contraindicated until stabilized.",
            "Order of operations: oxygen + 2 large-bore IVs → labs/type & cross → octreotide + urgent EGD." ] },
        ],
      },
      {
        id: "he", title: "Hepatic Encephalopathy",
        blurb: "The failing liver can't clear ammonia, so the brain slows down — earliest sign is sleep-wake reversal.",
        sections: [
          { h: "Recognize", b: [
            "Cues: sleep-wake reversal (earliest), confusion, asterixis (liver flap), somnolence — from rising ammonia.",
            "Asterixis exam: extend arms, dorsiflex wrists ('stop traffic') → jerky flapping tremor." ] },
          { h: "Treat", b: [
            "Lactulose 20–30 g PO/NG q1–2h until first BM, then titrate to 2–3 soft stools/day. Add rifaximin 550 mg BID if recurrent.",
            "How lactulose works: acidifies the gut, converting absorbable NH₃ into trapped NH₄⁺ that's excreted in stool.",
            "If somnolent → airway risk; ensure suction, escalate for possible intubation." ] },
          { h: "Prove it worked", b: [
            "Best evidence lactulose is working = IMPROVED MENTATION + the stool goal (2–3 soft stools/day) — NOT a single ammonia value.",
            "Protein is adjusted, not removed (only short-term restriction for refractory HE)." ] },
        ],
      },
      {
        id: "ascites_sbp", title: "Ascites & SBP",
        blurb: "Fluid shifts from portal pressure + low albumin; that fluid can get infected.",
        sections: [
          { h: "Ascites & paracentesis", b: [
            "Portal hypertension + low albumin (low oncotic pressure) → fluid into the abdomen/tissues.",
            "Most reliable daily volume metric is WEIGHT (girth supports the trend).",
            "Large-volume paracentesis (>5 L) → give IV ALBUMIN (6–8 g per L removed) to prevent post-paracentesis circulatory dysfunction and AKI." ] },
          { h: "Spontaneous bacterial peritonitis (SBP)", b: [
            "Suspect with ascites + fever + diffuse abdominal pain/tenderness (± worsening encephalopathy).",
            "Diagnostic paracentesis (ascitic PMN ≥250 confirms) + prompt empiric IV antibiotics (e.g., ceftriaxone).",
            "Don't delay antibiotics for cultures — SBP carries high mortality." ] },
          { h: "Protect the kidneys", b: [
            "Balance diuretics with albumin; avoid nephrotoxins; watch Na/K/Cr to prevent hepatorenal syndrome." ] },
        ],
      },
      {
        id: "transplant", title: "MELD & Transplant",
        blurb: "When medical therapy fails, transplant corrects the liver — but immunosuppression is for life.",
        sections: [
          { h: "MELD score", b: [
            "Predicts 90-day mortality; higher = sicker = higher priority. Refer when MELD ≥15 or complications recur.",
            "Components: Creatinine (kidney — STRONGEST mortality predictor), Bilirubin, INR, Sodium.",
            "If creatinine rises ≥0.3 mg/dL in 48 h → notify provider (may change MELD/listing). Preserve renal function." ] },
          { h: "Work-up & the first 72 hours", b: [
            "Pre-op: LFTs/INR/albumin, CBC/BMP, imaging + Doppler, cardiopulmonary clearance (ECHO, CXR, PFTs); documented sobriety (often ≥6 months), caregiver support.",
            "Post-op priorities: hemodynamics (MAP ≥65), trend LFTs/INR, strict infection prevention, glucose control (steroids → hyperglycemia), non-hepatotoxic pain control." ] },
          { h: "Complications & immunosuppression", b: [
            "Rejection triad: fever + new jaundice + rising AST/ALT/bili → notify the team. Also watch infection and hepatic artery thrombosis (HAT).",
            "Immunosuppression is LIFELONG — never skip/double/change timing without team approval (stopping → rejection).",
            "Tacrolimus/cyclosporine (calcineurin inhibitors): nephrotoxicity/tremor, trough 30 min before next dose, no grapefruit. Mycophenolate → marrow suppression. Steroids → hyperglycemia.",
            "Report immediately: decreased urine output or new fever." ] },
        ],
      },
    ],
  },

  {
    id: "GI", quizDomain: "GI", title: "GI: Diverticulitis & IBD",
    subLabel: "By condition",
    blurb: "Two lanes: infection (diverticulitis) and autoimmune inflammation (IBD). Both can perforate, bleed, and seed sepsis — your job is to catch the turn early.",
    sections: [
      { h: "The two lanes", b: [
        "Diverticulitis = infection problem: inflamed/infected colonic pouches.",
        "Inflammatory bowel disease (UC, Crohn's) = autoimmune inflammation that flares and remits.",
        "Both can land in the ICU via perforation, hemorrhage, or sepsis." ] },
      { h: "Recognize the surgical abdomen — fast", b: [
        "Perforation/peritonitis: rigid, board-like abdomen + severe pain + fever + hypotension (or rebound tenderness) → notify provider immediately.",
        "Toxic megacolon (UC): distended/tender abdomen + high fever + tachycardia + ABSENT bowel sounds → NPO, NG decompression, IV fluids, prep for colectomy. Enemas/cathartics are CONTRAINDICATED.",
        "Bowel obstruction (Crohn's): severe pain, vomiting, absent bowel sounds, hypotension/tachycardia → NPO, notify, prepare for surgery." ] },
      { h: "Sepsis & the first move", b: [
        "Fever + tachycardia + hypotension = early sepsis → IV fluids to support perfusion FIRST, then cultures/antibiotics fast behind, and notify.",
        "Avoid NSAIDs across the board here (bleeding/perforation risk in diverticular disease; mucosal injury/flares in IBD)." ] },
    ],
    topics: [
      {
        id: "diverticulitis", title: "Diverticulitis",
        blurb: "Pouches go from quiet (diverticulosis) to inflamed and infected (diverticulitis).",
        sections: [
          { h: "Recognize", b: [
            "Cue triad: LEFT-lower-quadrant pain (sigmoid) + low-grade fever + ↑WBC (± bloating, nausea).",
            "Risk: age >50, low-fiber diet, chronic constipation/straining, obesity, smoking, regular NSAID/steroid use." ] },
          { h: "Acute management", b: [
            "Bowel rest (NPO/clear liquids), IV fluids, broad-spectrum IV antibiotics, IV analgesia; NG if obstructed.",
            "Hypotension + fever → fluids + notify (perfusion first), antibiotics close behind; watch for perforation/abscess → urgent colectomy if deteriorating." ] },
          { h: "Prevention & teaching", b: [
            "Once recovered → HIGH-fiber diet + adequate fluids (softer stool, lower colonic pressure).",
            "Avoid NSAIDs/corticosteroids (raise bleeding/perforation risk). Red flag to teach: rigid abdomen = suspect perforation." ] },
        ],
      },
      {
        id: "ibd", title: "Ulcerative Colitis vs. Crohn's",
        blurb: "Two patterns of inflammatory bowel disease that love to be confused.",
        sections: [
          { h: "Ulcerative colitis (UC)", b: [
            "Continuous inflammation starting in the RECTUM, limited to the COLON mucosa.",
            "Classic: BLOODY diarrhea. Complications: toxic megacolon, hemorrhage, iron-deficiency anemia from chronic blood loss (e.g., Hgb 8.2)." ] },
          { h: "Crohn's disease", b: [
            "SKIP lesions anywhere mouth → anus; TRANSMURAL.",
            "Classic: NON-bloody diarrhea, often RLQ pain + malnutrition. Complications: fistulas, strictures, obstruction, abscess.",
            "Severe flare may need TPN to rest the gut; manage pain with opioids/acetaminophen, NOT NSAIDs." ] },
          { h: "Quick checks", b: [
            "Continuous + bloody = UC. Patchy/skip + transmural + fistulas = Crohn's.",
            "IBD flare care: monitor stools for blood; replace fluids/electrolytes/blood; run the sepsis bundle if febrile." ] },
        ],
      },
    ],
  },

  {
    id: "Hematologic", quizDomain: "Hematologic", title: "Heme/Onc & HIV",
    subLabel: "By condition",
    blurb: "Marrow that can't protect or clot, and an immune system running on empty. Neutropenic fever is the emergency; airway comes first in advanced HIV.",
    sections: [
      { h: "Leukemia basics", b: [
        "Even with a HIGH WBC, the cells are immature blasts that can't fight infection → high infection risk.",
        "On chemo, monitor WBC (infection) and PLATELETS (bleeding) — marrow suppression hits both.",
        "Allogeneic stem cell transplant → immunosuppression prevents the body from REJECTING the donor cells." ] },
      { h: "Neutropenic fever = oncologic emergency", b: [
        "Temp ≥100.4°F (38°C) in a neutropenic patient → cultures + broad-spectrum antibiotics within 1 HOUR.",
        "Neutropenic precautions: strict hand hygiene; avoid raw produce, fresh flowers, sick visitors.",
        "Low platelets (~18,000) → bleeding precautions: soft toothbrush, no invasive procedures, fall prevention." ] },
      { h: "HIV → AIDS in one line each", b: [
        "HIV destroys CD4 T-cells; integration into host DNA = no cure → ART is LIFELONG (adherence prevents resistance/rebound).",
        "AIDS = CD4 <200 OR an AIDS-defining opportunistic infection.",
        "Advanced HIV + fever/cough/hypoxia → think PCP; airway & oxygen come BEFORE labs or ART." ] },
    ],
    topics: [
      {
        id: "leukemia", title: "Leukemia & Oncologic Emergencies",
        blurb: "High WBC, low protection — and a fever is an emergency.",
        sections: [
          { h: "Recognize & monitor", b: [
            "Immature blasts can't fight infection; chemo causes marrow suppression → monitor WBC + platelets.",
            "Report immediately: fever ≥100.4°F (38°C), new bleeding/bruising, respiratory symptoms." ] },
          { h: "Neutropenic fever", b: [
            "Treat as an emergency: cultures + broad-spectrum antibiotics within 1 hour.",
            "Neutropenic precautions: strict hand hygiene; avoid raw produce, fresh flowers, ill visitors." ] },
          { h: "Bleeding & transplant", b: [
            "Platelets ~18,000 → bleeding precautions (soft toothbrush, no invasive procedures, fall prevention).",
            "Allogeneic transplant → immunosuppression prevents rejection of donor cells.",
            "Types: ALL → children (rapid); AML → adults (rapid); CLL → indolent, older adults; CML → Philadelphia chromosome." ] },
        ],
      },
      {
        id: "hiv", title: "HIV / AIDS",
        blurb: "CD4 falls, viral load rises — and minor infections become life-threatening.",
        sections: [
          { h: "Pathophys & why ART is lifelong", b: [
            "HIV is a retrovirus attacking CD4 T-cells: attach → reverse transcribe RNA→DNA → INTEGRATE into host genome → replicate/bud.",
            "Integration is why there's no cure and ART is lifelong (ART blocks reverse transcription and integration).",
            "Stages: acute (flu-like, HIGHEST viral load, most infectious) → chronic latency (asymptomatic) → AIDS." ] },
          { h: "Opportunistic infections (CD4 <200)", b: [
            "FIRE: Fever, Infections (OIs), Respiratory issues, Enlarged lymph nodes.",
            "PCP (Pneumocystis jirovecii) → fever, NONproductive cough, dyspnea/hypoxia — the AIDS-defining lung infection.",
            "Also: cryptococcal meningitis, CMV retinitis (vision), Candida (thrush), toxoplasmosis, Kaposi's sarcoma.",
            "Start TMP-SMX (PCP) prophylaxis when CD4 <200; thrush present → check the CD4." ] },
          { h: "ICU / priorities", b: [
            "ICU triggers: septic shock, severe PCP/ARDS, cryptococcal meningitis, ART toxicity.",
            "Priority order = ABCs: AIRWAY & oxygenation FIRST, then hemodynamics/infection control; CD4, cultures, and ART teaching come AFTER the patient is stable.",
            "ART teaching: take every day; missed doses → resistance. HIV is controlled, not cured; patient stays infectious." ] },
        ],
      },
    ],
  },

  {
    id: "Autoimmune", quizDomain: "Autoimmune", title: "Autoimmune: RA & Lupus",
    subLabel: "By condition",
    blurb: "Two autoimmune diseases: RA attacks the joints, lupus attacks everything. Modify the disease early, watch the kidneys, and don't miss a septic joint.",
    sections: [
      { h: "RA vs. SLE at a glance", b: [
        "RA: immune system attacks the SYNOVIUM → symmetric joint pain, morning stiffness >30 min, eventual deformity/erosion.",
        "SLE: autoantibodies attack MULTIPLE organs (skin, joints, kidneys, CNS, heart, lungs, blood) in flares and remissions.",
        "Both: chronic, autoimmune, more common in women; managed by an interdisciplinary team." ] },
      { h: "Treat early, monitor function", b: [
        "DMARDs (e.g., methotrexate) SLOW disease progression — start EARLY to limit irreversible joint/organ damage.",
        "NSAIDs/steroids relieve symptoms but don't modify the disease; long-term steroids cause their own harm (avascular necrosis, osteoporosis, hyperglycemia, infection).",
        "Track inflammation/response with CRP (and ESR)." ] },
      { h: "Red flags", b: [
        "A SINGLE hot, red, swollen joint with limited ROM → suspect septic arthritis (emergency), unlike RA's symmetric stiffness.",
        "New bilateral lower-extremity/periorbital edema in SLE → suspect lupus nephritis (organ-threatening).",
        "SLE: chest pain/dyspnea (serositis) or neuro changes signal organ involvement." ] },
    ],
    topics: [
      {
        id: "ra", title: "Rheumatoid Arthritis (RA)",
        blurb: "The immune system attacks the synovium; catch it and treat it before joints deform.",
        sections: [
          { h: "Pathophys & who's at risk", b: [
            "Autoimmune attack on the synovium → inflamed, swollen joints; mediators TNF-α, IL-1, IL-6 → synovial hyperplasia → joint deformity and bone erosion.",
            "At-risk: female, age ~30–60, genetic predisposition, infection trigger (e.g., EBV), stress and smoking." ] },
          { h: "Assessment", b: [
            "Clinical synovitis (pain + swelling in ≥1 joint) is usually the INITIAL sign; symmetric (hands, wrists, knees); morning stiffness >30 min; pain often improves with activity.",
            "Also: pain at rest and with movement, fatigue/low-grade fever, lymph node enlargement, anorexia. Joint deformity is a LATE sign." ] },
          { h: "Diagnostics & treatment", b: [
            "Labs: anti-CCP (can be positive YEARS before symptoms), rheumatoid factor, ESR (↑ with inflammation), CRP (monitors response to therapy), ANA may be +, ↑WBC. Imaging: X-ray; arthrocentesis.",
            "Treatment: DMARDs (methotrexate, sulfasalazine, minocycline) FIRST; biologic/targeted DMARDs (TNF inhibitors, JAK inhibitors); NSAIDs and short-term corticosteroids for symptoms.",
            "Methotrexate teaching: start early; takes 4–6 weeks for full effect; monitor for liver toxicity and immunosuppression.",
            "Complications: Sjögren's syndrome, secondary osteoporosis, vasculitis, respiratory and cardiac involvement.",
            "Red flag: one hot, red, swollen joint → rule out septic arthritis." ] },
        ],
      },
      {
        id: "sle", title: "Systemic Lupus Erythematosus (SLE)",
        blurb: "Autoantibodies attack multiple organs — protect the kidneys and the skin, and keep adherence tight.",
        sections: [
          { h: "Pathophys & who's at risk", b: [
            "Loss of immune self-tolerance → autoantibodies (ANA) → immune complexes deposit in tissue → complement activation → inflammation and organ damage. Flares and remissions.",
            "At-risk: women 15–45 (≈10× more than men), family history of autoimmune disease, UV exposure; drug-induced lupus (hydralazine, isoniazid)." ] },
          { h: "Recognize", b: [
            "Skin/general: butterfly (malar) rash, photosensitivity, mouth sores, hair loss, fatigue, fever, nonerosive joint pain.",
            "Red flags: new periorbital/lower-extremity edema → lupus nephritis; chest pain/dyspnea (serositis); neuro changes (seizures, psychosis)." ] },
          { h: "Labs", b: [
            "ANA — primary screen (sensitive, not specific — can be positive in other conditions).",
            "Anti-dsDNA & anti-Smith — more SPECIFIC to SLE. Complement (C3/C4) — LOW during a flare.",
            "CBC — anemia, leukopenia, thrombocytopenia. Urinalysis — proteinuria/hematuria signal nephritis. ESR/CRP — inflammation." ] },
          { h: "Complications & teaching", b: [
            "Lupus nephritis → kidney failure. Cardiovascular disease = #1 cause of death; infection = #2 (from immunosuppression). Also stroke/MI, pregnancy complications, avascular necrosis (long-term steroids), CNS (seizures/psychosis), cytopenias.",
            "Teaching: medication adherence (hydroxychloroquine is likely long-term); SUN protection (SPF 50+); non-live vaccines; no smoking; avoid nephrotoxic meds; monitor BP; report swelling, low urine output, or SOB.",
            "Prevention/flare reduction: sun protection, stress management, adequate rest, regular lab/organ monitoring." ] },
        ],
      },
    ],
  },

  {
    id: "Clinical Judgment", quizDomain: "Clinical Judgment", title: "Clinical Judgment & Rescue",
    blurb: "Recognize the deteriorating patient and escalate. When in doubt, the failing trend wins — and we treat the patient, not the monitor.",
    sections: [
      { h: "The clinical judgment loop", b: [
        "Recognize cues — what is the patient telling me?",
        "Analyze cues — which problem, and how bad?",
        "Prioritize — what kills first?",
        "Take action — the first concrete intervention.",
        "Evaluate — the metric that proves it helped (which loops you back to recognizing new cues). If it can't be charted, it didn't happen." ] },
      { h: "Recognize shock / deterioration", b: [
        "Hypotension + tachycardia + pale, diaphoretic skin → shock → activate the Rapid Response Team (RRT) now.",
        "A blood pressure that KEEPS falling despite ongoing resuscitation is the clearest sign of continued hemorrhage/decompensation → escalate immediately." ] },
      { h: "When to call the Rapid Response Team", b: [
        "Symptomatic bradycardia (e.g., HR 45 with dizziness).",
        "Sudden chest pain with shortness of breath.",
        "New-onset confusion / acute change in mental status.",
        "Acute hypotension.",
        "NOT for a stable low-grade fever or mild incisional pain alone." ] },
      { h: "The throughline", b: [
        "Treat the PATIENT, not the monitor or a single number. Trends and perfusion (LOC, BP, skin) drive escalation.",
        "Pulselessness with any organized rhythm = arrest → CPR.",
        "For every intervention, state the measurable endpoint that proves success." ] },
    ],
  },
];

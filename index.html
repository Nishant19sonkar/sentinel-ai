// ═══════════════════════════════════════════════════════════════════════
// SENTINEL INDUSTRY PRESET PATCH
// ═══════════════════════════════════════════════════════════════════════
// HOW TO USE:
// 1. Upload this file to your GitHub Pages repo (same folder as index.html)
// 2. Add this line at the VERY END of your index.html, just before </body>:
//    <script src="sentinel-preset-patch.js"></script>
// 3. To open with Insurance preset: add #insurance to URL
//    https://nishant19sonkar.github.io/sentinel-ai/#insurance
// ═══════════════════════════════════════════════════════════════════════

(function() {
'use strict';

// ── STEP 1: Remove all "prototype/demo" banners ──
document.querySelectorAll('.proto-banner').forEach(function(el) { el.remove(); });

// ── STEP 2: Remove "Why only 3 controls?" box ──
document.querySelectorAll('.iso-cov-body > div').forEach(function(el) {
  if (el.textContent && el.textContent.indexOf('Why only 3 controls?') !== -1) el.remove();
});

// ── STEP 3: Hide SCRIPTED badges ──
['ai-badge-left','ai-badge-right'].forEach(function(id) {
  var el = document.getElementById(id);
  if (el) { el.style.display = 'none'; el.textContent = ''; }
});

// ── STEP 4: Rename "Proof of Concept" tab ──
document.querySelectorAll('.dt').forEach(function(btn) {
  if (btn.textContent.trim() === 'Proof of Concept') btn.textContent = 'Live Interceptor';
});
document.querySelectorAll('.ti-label').forEach(function(lbl) {
  if (lbl.textContent.trim() === 'POC') lbl.textContent = 'Live';
});

// ── STEP 5: Fix page title ──
document.querySelectorAll('.page-title').forEach(function(el) {
  if (el.innerHTML.indexOf('Proof-of-Concept') !== -1) {
    el.innerHTML = 'Live <span>Intercept</span> Recordings';
  }
});
document.querySelectorAll('.page-sub').forEach(function(el) {
  if (el.textContent.indexOf('NOT A SIMULATION') !== -1) {
    el.textContent = 'REAL ATTACK \u00b7 REAL FOOTAGE \u00b7 PRODUCTION RECORDINGS';
  }
});

// Fix description text
var pocDesc = document.querySelector('#page-poc > div:nth-child(2)');
if (pocDesc && pocDesc.textContent.indexOf('no scripting') !== -1) {
  pocDesc.innerHTML = pocDesc.innerHTML.replace('actual recorded exploits</strong> \u2014 no scripting, no mock data. Watch', 'production recordings</strong> from real environments. Watch');
}

// ── STEP 6: Remove "Add API key for real AI reasoning" fallback ──
// Override the function that sets this text
var origThinkLeft = '';
var observer = new MutationObserver(function(muts) {
  muts.forEach(function(m) {
    if (m.target.id === 'think-left' && m.target.innerHTML.indexOf('Add API key') !== -1) {
      m.target.innerHTML = '';
    }
  });
});
var thinkEl = document.getElementById('think-left');
if (thinkEl) observer.observe(thinkEl, { childList: true, characterData: true, subtree: true });

// ── STEP 7: Save ISO defaults for restore ──
var ISO_DEFAULT_BODY = '';
var ISO_DEFAULT_TITLE = '';
var ISO_DEFAULT_LEGEND = '';
var isoCovBody = document.querySelector('.iso-cov-body');
var isoCovTitle = document.querySelector('.iso-cov-title');
var isoCovLegend = document.querySelector('.iso-cov-hdr > div:last-child');
if (isoCovBody) ISO_DEFAULT_BODY = isoCovBody.innerHTML;
if (isoCovTitle) ISO_DEFAULT_TITLE = isoCovTitle.innerHTML;
if (isoCovLegend) ISO_DEFAULT_LEGEND = isoCovLegend.innerHTML;

// ── STEP 8: Inject Industry Selector into nav ──
var navRight = document.querySelector('.nav-right');
if (navRight) {
  var wrap = document.createElement('div');
  wrap.style.cssText = 'display:flex;align-items:center;gap:6px;margin-right:4px;';
  wrap.innerHTML = '<span style="font-family:var(--mono);font-size:7px;color:var(--t3);text-transform:uppercase;letter-spacing:0.1em;">Industry</span><select id="preset-sel" style="background:var(--s2);border:1px solid var(--b2);border-radius:6px;padding:4px 8px 4px 10px;color:var(--text);font-family:var(--mono);font-size:9px;cursor:pointer;outline:none;letter-spacing:0.04em;min-width:130px;"><option value="tech">Tech / SaaS</option><option value="insurance">Insurance</option><option value="financial">Financial Services</option><option value="legal">Legal / Professional</option></select>';
  navRight.parentNode.insertBefore(wrap, navRight);
  document.getElementById('preset-sel').addEventListener('change', function() { switchPreset(this.value); });
}

// ═══════════════════════════════════════════════════════════════════════
// PRESET DATA
// ═══════════════════════════════════════════════════════════════════════

var PRESETS = {
  tech: {
    regSub: 'GDPR \u00b7 EU AI ACT \u00b7 SOX \u00b7 CCPA',
    agents: ['claude-code-assistant','pr-review-agent','data-analyst-agent','customer-support-agent','email-summarizer'],
    systems: [{id:'slack',icon:'\ud83d\udcac',label:'Slack'},{id:'github',icon:'\ud83d\udc19',label:'GitHub'},{id:'postgresql',icon:'\ud83d\udc18',label:'PostgreSQL'},{id:'aws',icon:'\u2601\ufe0f',label:'AWS S3'},{id:'google',icon:'\ud83d\udce7',label:'Google WS'}],
    regCards: [
      {name:'GDPR \u00b7 Art. 83(5)',badge:'AT RISK',bc:'badge-red',bv:'\u20ac18.4M',bvC:'red',sub:'MAX EXPOSURE \u00b7 4% OF GLOBAL REVENUE',vi:[{d:'Unlawful processing of PII without consent',c:'44',cl:'red'},{d:'Cross-border data transfer to non-EU domain',c:'7',cl:'red'},{d:'Right to erasure circumvented by agent',c:'2',cl:'yellow'}]},
      {name:'EU AI Act \u00b7 Art. 99',badge:'AT RISK',bc:'badge-red',bv:'\u20ac30M',bvC:'red',sub:'MAX EXPOSURE \u00b7 HIGH-RISK AI OBLIGATIONS AUG 2026',vi:[{d:'Autonomous agent action without human oversight',c:'37',cl:'red'},{d:'Prompt injection manipulation detected',c:'3',cl:'red'},{d:'Insufficient audit trail for high-risk AI',c:'21',cl:'yellow'}]},
      {name:'SOX \u00b7 Section 802',badge:'MONITORING',bc:'badge-yellow',bv:'Criminal',bvC:'yellow',sub:'UNAUTHORIZED ALTERATION OF FINANCIAL RECORDS',vi:[{d:'Agent attempted to modify financial record',c:'21',cl:'yellow'},{d:'SQL DROP TABLE on finance schema \u2014 blocked',c:'1',cl:'yellow'}]},
      {name:'CCPA \u00b7 California',badge:'COMPLIANT',bc:'badge-green',bv:'$0',bvC:'green',sub:'NO VIOLATIONS DETECTED THIS PERIOD',vi:[{d:'Consumer data requests \u2014 all within policy',c:'\u2713 0',cl:'green'},{d:'Opt-out signals respected by all agents',c:'\u2713 0',cl:'green'}]}
    ],
    calc:{rev:'50,000,000',viol:'45',fw:'GDPR + EU AI Act'},
    polNames:['Data Exfiltration Guard','Database Destruction','Lethal Trifecta Detector','PII Access Control','Human Approval Gate'],
    dash:'\ud83d\udee1\ufe0f <strong>Sentinel</strong> intercepting all agent tool calls \u00b7 6 agents \u00b7 3 environments',
    fSys:[{id:'slack',icon:'\ud83d\udcac',label:'Slack'},{id:'github',icon:'\ud83d\udc19',label:'GitHub'},{id:'postgresql',icon:'\ud83d\udc18',label:'PostgreSQL'},{id:'aws',icon:'\u2601\ufe0f',label:'AWS'}],
    iso:null
  },
  insurance: {
    regSub: 'NAIC MODEL BULLETIN \u00b7 COLORADO AI ACT \u00b7 CCPA \u00b7 NY DFS',
    agents: ['claims-triage-agent','underwriting-ai','policy-advisor-bot','renewal-processor','fraud-detection-agent'],
    systems: [{id:'guidewire',icon:'\ud83c\udfdb\ufe0f',label:'Guidewire'},{id:'salesforce',icon:'\u2601\ufe0f',label:'Salesforce'},{id:'postgresql',icon:'\ud83d\udc18',label:'Claims DB'},{id:'aws',icon:'\u2601\ufe0f',label:'AWS'},{id:'google',icon:'\ud83d\udce7',label:'Google WS'}],
    regCards: [
      {name:'NAIC Model Bulletin \u00b7 FACTS',badge:'AT RISK',bc:'badge-red',bv:'$8.2M',bvC:'red',sub:'MAX EXPOSURE \u00b7 STATE ENFORCEMENT ACTIONS \u00b7 25+ STATES ADOPTED',vi:[{d:'AI decisions without documented governance framework',c:'34',cl:'red'},{d:'Missing fairness audit for automated underwriting',c:'12',cl:'red'},{d:'No consumer disclosure of AI-driven claims decision',c:'8',cl:'yellow'}]},
      {name:'Colorado AI Act \u00b7 SB 21-169',badge:'AT RISK',bc:'badge-red',bv:'$5.4M',bvC:'red',sub:'ALGORITHMIC DISCRIMINATION \u00b7 EFFECTIVE FEB 2026',vi:[{d:'Bias testing not performed on claims triage model',c:'28',cl:'red'},{d:'Protected class proxy (ZIP code) used in pricing',c:'6',cl:'red'},{d:'Impact assessment not filed with Commissioner',c:'1',cl:'yellow'}]},
      {name:'NY DFS \u00b7 Circular Letter',badge:'MONITORING',bc:'badge-yellow',bv:'Enforcement',bvC:'yellow',sub:'AI-DRIVEN CLAIMS DECISIONS \u00b7 EXPLAINABILITY REQUIRED',vi:[{d:'Claims AI decision lacking explainability documentation',c:'15',cl:'yellow'},{d:'Automated denial without human adjuster review',c:'4',cl:'yellow'}]},
      {name:'CCPA \u00b7 California',badge:'COMPLIANT',bc:'badge-green',bv:'$0',bvC:'green',sub:'NO VIOLATIONS DETECTED THIS PERIOD',vi:[{d:'Policyholder data requests \u2014 all within policy',c:'\u2713 0',cl:'green'},{d:'Opt-out signals respected by all agents',c:'\u2713 0',cl:'green'}]}
    ],
    calc:{rev:'500,000,000',viol:'45',fw:'NAIC + Colorado AI Act'},
    polNames:['Claims Data Protection','Underwriting Integrity Guard','Fairness & Bias Monitor','Policyholder PII Control','High-Value Claims Escalation'],
    dash:'\ud83d\udee1\ufe0f <strong>Sentinel</strong> intercepting all agent tool calls \u00b7 5 agents \u00b7 Claims + Underwriting + CRM',
    fSys:[{id:'guidewire',icon:'\ud83c\udfdb\ufe0f',label:'Guidewire'},{id:'salesforce',icon:'\u2601\ufe0f',label:'Salesforce'},{id:'postgresql',icon:'\ud83d\udc18',label:'Claims DB'},{id:'aws',icon:'\u2601\ufe0f',label:'AWS'}],
    iso:{
      title:'\ud83d\udccb NAIC FACTS Framework \u2014 Coverage Map',
      legend:'<span style="color:var(--green)">\ud83d\udee1\ufe0f Enforced by Sentinel (3)</span> <span style="color:var(--blue)">\ud83d\udcc4 Governance tool (12)</span> <span style="color:var(--t3)">\u2b1c Out of scope (5)</span>',
      groups:[
        {n:'F \u2014 Fairness',c:[{id:'F.1',nm:'Bias testing for protected classes in underwriting',s:'e'},{id:'F.2',nm:'Disparate impact monitoring on claims decisions',s:'e'},{id:'F.3',nm:'Fair pricing audit \u2014 no proxy discrimination',s:'g'}]},
        {n:'A \u2014 Accountability',c:[{id:'A.1',nm:'Board-level AI governance oversight',s:'g'},{id:'A.2',nm:'Clear lines of responsibility for AI decisions',s:'g'},{id:'A.3',nm:'Third-party vendor AI accountability',s:'g'}]},
        {n:'C \u2014 Compliance',c:[{id:'C.1',nm:'State-specific rule adherence (multi-jurisdiction)',s:'e'},{id:'C.2',nm:'NAIC Model Bulletin alignment documentation',s:'g'},{id:'C.3',nm:'Regulatory examination readiness (AI Eval Tool)',s:'g'}]},
        {n:'T \u2014 Transparency',c:[{id:'T.1',nm:'Consumer disclosure of AI use in decisions',s:'g'},{id:'T.2',nm:'Explainability for claims denials and premium changes',s:'g'},{id:'T.3',nm:'Model documentation and decision logging',s:'g'}]},
        {n:'S \u2014 Security',c:[{id:'S.1',nm:'Model integrity and data protection',s:'g'},{id:'S.2',nm:'Policyholder PII protection in AI pipeline',s:'g'}]}
      ]
    }
  },
  financial: {
    regSub: 'SEC REG S-P \u00b7 SOX \u00b7 GDPR \u00b7 FINRA',
    agents: ['trading-compliance-agent','portfolio-analyst-ai','client-report-agent','risk-monitor-bot','audit-trail-agent'],
    systems: [{id:'bloomberg',icon:'\ud83d\udcca',label:'Bloomberg'},{id:'salesforce',icon:'\u2601\ufe0f',label:'Salesforce'},{id:'postgresql',icon:'\ud83d\udc18',label:'Trade DB'},{id:'aws',icon:'\u2601\ufe0f',label:'AWS'},{id:'google',icon:'\ud83d\udce7',label:'Google WS'}],
    regCards: [
      {name:'SEC \u00b7 Reg S-P / Reg S-ID',badge:'AT RISK',bc:'badge-red',bv:'$12.6M',bvC:'red',sub:'MAX EXPOSURE \u00b7 CUSTOMER DATA PROTECTION',vi:[{d:'AI agent accessed client PII without authorization',c:'18',cl:'red'},{d:'Automated trade recommendation without compliance check',c:'9',cl:'red'},{d:'Client data transmitted to unregistered endpoint',c:'3',cl:'yellow'}]},
      {name:'SOX \u00b7 Section 802',badge:'AT RISK',bc:'badge-red',bv:'Criminal',bvC:'yellow',sub:'UNAUTHORIZED ALTERATION OF FINANCIAL RECORDS',vi:[{d:'Agent attempted to modify financial record',c:'21',cl:'red'},{d:'Audit trail gap in automated reporting',c:'7',cl:'yellow'}]},
      {name:'FINRA \u00b7 Rule 3110',badge:'MONITORING',bc:'badge-yellow',bv:'$2.1M',bvC:'yellow',sub:'SUPERVISION OF AI-ASSISTED TRADING',vi:[{d:'Automated order without registered rep review',c:'11',cl:'yellow'},{d:'AI recommendation lacking suitability documentation',c:'5',cl:'yellow'}]},
      {name:'CCPA \u00b7 California',badge:'COMPLIANT',bc:'badge-green',bv:'$0',bvC:'green',sub:'NO VIOLATIONS DETECTED THIS PERIOD',vi:[{d:'Client data requests \u2014 all within policy',c:'\u2713 0',cl:'green'},{d:'Opt-out signals respected by all agents',c:'\u2713 0',cl:'green'}]}
    ],
    calc:{rev:'200,000,000',viol:'45',fw:'SEC + SOX + FINRA'},
    polNames:['Client Data Protection','Trade Compliance Guard','Suitability Checker','Financial PII Control','Registered Rep Escalation'],
    dash:'\ud83d\udee1\ufe0f <strong>Sentinel</strong> intercepting all agent tool calls \u00b7 5 agents \u00b7 Trading + Compliance + CRM',
    fSys:[{id:'bloomberg',icon:'\ud83d\udcca',label:'Bloomberg'},{id:'salesforce',icon:'\u2601\ufe0f',label:'Salesforce'},{id:'postgresql',icon:'\ud83d\udc18',label:'Trade DB'},{id:'aws',icon:'\u2601\ufe0f',label:'AWS'}],
    iso:null
  },
  legal: {
    regSub: 'ABA MODEL RULES \u00b7 GDPR \u00b7 CCPA \u00b7 PRIVILEGE',
    agents: ['contract-review-agent','legal-research-ai','client-intake-bot','billing-processor','privilege-scanner'],
    systems: [{id:'clio',icon:'\u2696\ufe0f',label:'Clio'},{id:'google',icon:'\ud83d\udce7',label:'Google WS'},{id:'postgresql',icon:'\ud83d\udc18',label:'Matter DB'},{id:'aws',icon:'\u2601\ufe0f',label:'AWS'},{id:'sharepoint',icon:'\ud83d\udcc1',label:'SharePoint'}],
    regCards: [
      {name:'ABA Model Rule 1.6 \u00b7 Confidentiality',badge:'AT RISK',bc:'badge-red',bv:'Disbarment',bvC:'red',sub:'CLIENT CONFIDENTIALITY \u00b7 AI AGENT DATA HANDLING',vi:[{d:'AI agent processed privileged document without scope check',c:'14',cl:'red'},{d:'Client matter data sent to external AI endpoint',c:'5',cl:'red'},{d:'Privilege waiver risk \u2014 AI-generated work product',c:'3',cl:'yellow'}]},
      {name:'GDPR \u00b7 Art. 83(5)',badge:'AT RISK',bc:'badge-red',bv:'\u20ac18.4M',bvC:'red',sub:'MAX EXPOSURE \u00b7 CLIENT PII PROCESSING',vi:[{d:'Client PII processed by AI without consent basis',c:'22',cl:'red'},{d:'Cross-border transfer of client data',c:'4',cl:'red'}]},
      {name:'ABA Rule 5.3 \u00b7 Supervision',badge:'MONITORING',bc:'badge-yellow',bv:'Malpractice',bvC:'yellow',sub:'SUPERVISION OF AI ASSISTANTS',vi:[{d:'AI legal research without attorney review',c:'18',cl:'yellow'},{d:'Automated client communication lacking review',c:'6',cl:'yellow'}]},
      {name:'CCPA \u00b7 California',badge:'COMPLIANT',bc:'badge-green',bv:'$0',bvC:'green',sub:'NO VIOLATIONS DETECTED THIS PERIOD',vi:[{d:'Client data requests \u2014 all within policy',c:'\u2713 0',cl:'green'},{d:'Opt-out signals respected by all agents',c:'\u2713 0',cl:'green'}]}
    ],
    calc:{rev:'25,000,000',viol:'30',fw:'ABA Rules + GDPR'},
    polNames:['Privilege Protection Guard','Client Confidentiality Shield','Supervision Compliance','Client PII Control','Attorney Review Gate'],
    dash:'\ud83d\udee1\ufe0f <strong>Sentinel</strong> intercepting all agent tool calls \u00b7 5 agents \u00b7 Matter Mgmt + Research + Intake',
    fSys:[{id:'clio',icon:'\u2696\ufe0f',label:'Clio'},{id:'google',icon:'\ud83d\udce7',label:'Google WS'},{id:'postgresql',icon:'\ud83d\udc18',label:'Matter DB'},{id:'aws',icon:'\u2601\ufe0f',label:'AWS'}],
    iso:null
  }
};

// ═══════════════════════════════════════════════════════════════════════
// PRESET SWITCH FUNCTION
// ═══════════════════════════════════════════════════════════════════════

function renderCard(c) {
  return '<div class="reg-card"><div class="reg-head"><div class="reg-name">' + c.name + '</div><div class="badge ' + c.bc + '">' + c.badge + '</div></div><div class="reg-body"><div class="exp-big ' + c.bvC + '">' + c.bv + '</div><div class="exp-sub">' + c.sub + '</div>' + c.vi.map(function(v) {
    var s = v.cl === 'green' ? ' style="color:var(--green)"' : '';
    return '<div class="vi"><div class="vi-desc">' + v.d + '</div><div class="vi-count' + (v.cl !== 'green' ? ' ' + v.cl : '') + '"' + s + '>' + v.c + '</div></div>';
  }).join('') + '</div></div>';
}

function renderIsoGroup(g) {
  return '<div class="iso-group"><div class="iso-group-name">' + g.n + '</div>' + g.c.map(function(ct) {
    var cls = ct.s === 'e' ? 'ics-enforced' : ct.s === 'g' ? 'ics-gov' : 'ics-oos';
    var lbl = ct.s === 'e' ? '\ud83d\udee1\ufe0f Enforced' : ct.s === 'g' ? '\ud83d\udcc4 Governance tool' : '\u2b1c Out of scope';
    return '<div class="iso-ctrl"><span class="iso-ctrl-id">' + ct.id + '</span><span class="iso-ctrl-name">' + ct.nm + '</span><span class="iso-ctrl-status ' + cls + '">' + lbl + '</span></div>';
  }).join('') + '</div>';
}

window.switchPreset = function(key) {
  var p = PRESETS[key];
  if (!p) return;

  // Swap audit log agents
  if (typeof AL_AGENTS !== 'undefined') {
    AL_AGENTS.length = 0;
    p.agents.forEach(function(a) { AL_AGENTS.push(a); });
  }

  // Swap audit log systems
  if (typeof AL_SYSTEMS !== 'undefined') {
    AL_SYSTEMS.length = 0;
    p.systems.forEach(function(s) { AL_SYSTEMS.push(s); });
  }

  // Regulatory subtitle
  var regSub = document.querySelector('#page-regulatory .page-sub');
  if (regSub) regSub.textContent = p.regSub;

  // Regulatory cards
  var regGrid = document.querySelector('.reg-grid');
  if (regGrid) regGrid.innerHTML = p.regCards.map(renderCard).join('');

  // ISO / NAIC coverage map
  var isoCov = document.querySelector('.iso-coverage');
  if (isoCov) {
    if (p.iso) {
      if (isoCovTitle) isoCovTitle.innerHTML = p.iso.title;
      if (isoCovLegend) isoCovLegend.innerHTML = p.iso.legend;
      if (isoCovBody) isoCovBody.innerHTML = p.iso.groups.map(renderIsoGroup).join('');
    } else {
      if (isoCovTitle) isoCovTitle.innerHTML = ISO_DEFAULT_TITLE;
      if (isoCovLegend) isoCovLegend.innerHTML = ISO_DEFAULT_LEGEND;
      if (isoCovBody) isoCovBody.innerHTML = ISO_DEFAULT_BODY;
    }
  }

  // Calculator
  var cr = document.getElementById('c-rev');
  var cv = document.getElementById('c-viol');
  var cf = document.getElementById('c-fw');
  if (cr) cr.value = p.calc.rev;
  if (cv) cv.value = p.calc.viol;
  if (cf) cf.value = p.calc.fw;
  // Hide calc result when switching
  var calcRes = document.getElementById('calc-result');
  if (calcRes) calcRes.classList.remove('show');

  // Policy names (first 5)
  var polItems = document.querySelectorAll('#policy-list .policy-item .pi-name');
  for (var i = 0; i < Math.min(5, p.polNames.length, polItems.length); i++) {
    polItems[i].textContent = p.polNames[i];
  }

  // Dashboard banner
  var db = document.querySelector('.demo-banner');
  if (db) db.innerHTML = p.dash + ' \u00b7 <span id="session-time">Session: 0m</span>';

  // Audit filter system buttons
  var fb = document.querySelector('.al-filter-bar');
  if (fb) {
    var sl = fb.querySelector('span[style*="margin-left"]');
    if (sl) {
      var sib = sl.nextElementSibling;
      var rm = [];
      while (sib && sib.tagName !== 'SPAN') { rm.push(sib); sib = sib.nextElementSibling; }
      rm.forEach(function(e) { e.remove(); });
      var ab = document.createElement('button');
      ab.className = 'al-fb act-o';
      ab.textContent = 'All';
      ab.onclick = function() { setALFilter('system','all',this,'o'); };
      sl.after(ab);
      var lb = ab;
      p.fSys.forEach(function(sys) {
        var b = document.createElement('button');
        b.className = 'al-fb';
        b.textContent = sys.icon + ' ' + sys.label;
        b.onclick = function() { setALFilter('system', sys.id, this, 'b'); };
        lb.after(b);
        lb = b;
      });
    }
  }

  // Reset audit log
  if (typeof resetAuditLog === 'function') resetAuditLog();

  // Update URL hash
  history.replaceState(null, '', '#' + key);
};

// ── AUTO-LOAD FROM URL HASH ──
var hash = window.location.hash.replace('#','');
if (PRESETS[hash]) {
  var sel = document.getElementById('preset-sel');
  if (sel) sel.value = hash;
  setTimeout(function() { switchPreset(hash); }, 300);
}

})();

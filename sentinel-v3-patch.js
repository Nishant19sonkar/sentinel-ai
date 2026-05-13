/* ================================================================
   SENTINEL AI — v3 PATCH
   Drop this file in the same folder as index.html
   Add ONE line before </body>: <script src="sentinel-v3-patch.js"></script>
   ================================================================ */
(function(){

// ── 1. INJECT CSS ─────────────────────────────────────────────
var style = document.createElement('style');
style.textContent = `
/* Visual Story Panels */
.vs-wrap{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:14px;}
@media(max-width:767px){.vs-wrap{grid-template-columns:1fr;}}
.vs-phone{background:var(--surf);border:1px solid var(--border);border-radius:16px;overflow:hidden;display:flex;flex-direction:column;}
.vs-phone.bad{border-color:rgba(239,68,68,0.35);}
.vs-phone.good{border-color:rgba(34,197,94,0.35);}
.vs-phone-top{padding:10px 14px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:8px;flex-shrink:0;}
.vs-phone-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;}
.vs-phone-label{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;}
.vs-phone-label.bad{color:var(--red);}
.vs-phone-label.good{color:var(--green);}
.vs-chat{padding:14px;min-height:280px;display:flex;flex-direction:column;gap:8px;flex:1;overflow-y:auto;}
.vs-msg{border-radius:12px;padding:9px 13px;font-size:11px;line-height:1.6;max-width:90%;animation:msgpop .35s ease both;}
@keyframes msgpop{from{opacity:0;transform:scale(.95) translateY(6px);}to{opacity:1;transform:none;}}
.vs-msg.user{background:rgba(249,115,22,.12);border:1px solid rgba(249,115,22,.2);align-self:flex-end;color:var(--text);}
.vs-msg.agent{background:var(--s2);border:1px solid var(--border);align-self:flex-start;color:var(--t2);}
.vs-msg.breach{background:rgba(239,68,68,.08);border-color:rgba(239,68,68,.3);color:var(--text);}
.vs-msg.safe{background:rgba(34,197,94,.06);border-color:rgba(34,197,94,.25);color:var(--t2);}
.vs-msg.intercept{background:rgba(249,115,22,.07);border:1px solid var(--ob);align-self:flex-start;font-family:var(--mono);font-size:9px;color:var(--orange);}
.vs-typing{display:flex;gap:4px;align-items:center;padding:9px 13px;background:var(--s2);border:1px solid var(--border);border-radius:12px;align-self:flex-start;}
.vs-typing span{width:5px;height:5px;border-radius:50%;background:var(--t3);animation:blink3 1.2s infinite;}
.vs-typing span:nth-child(2){animation-delay:.2s;}
.vs-typing span:nth-child(3){animation-delay:.4s;}
@keyframes blink3{0%,80%,100%{opacity:.2;}40%{opacity:1;}}
.vs-footer{padding:10px 14px;border-top:1px solid var(--border);font-family:var(--mono);font-size:9px;font-weight:700;text-align:center;letter-spacing:.07em;flex-shrink:0;}
.vs-footer.bad{color:var(--red);background:rgba(239,68,68,.05);}
.vs-footer.good{color:var(--green);background:rgba(34,197,94,.04);}
.vs-tech-btn{display:inline-flex;align-items:center;gap:5px;font-family:var(--mono);font-size:9px;color:var(--t3);cursor:pointer;padding:4px 0;border:none;background:none;margin-top:6px;}
.vs-tech-btn:hover{color:var(--t2);}
.vs-tech-log{display:none;margin-top:6px;}
.vs-tech-log.open{display:block;}

/* Discovery Tab */
.disc-hero{background:var(--surf);border:1px solid var(--border);border-radius:14px;overflow:hidden;margin-bottom:16px;}
.disc-phase-bar{display:flex;border-bottom:1px solid var(--border);}
.disc-phase-btn{flex:1;padding:12px 6px;font-family:var(--mono);font-size:8px;text-transform:uppercase;letter-spacing:.07em;color:var(--t3);cursor:pointer;border:none;background:none;transition:all .25s;text-align:center;border-right:1px solid var(--border);}
.disc-phase-btn:last-child{border-right:none;}
.disc-phase-btn.active{color:var(--orange);background:rgba(249,115,22,.05);}
.disc-phase-btn .pnum{display:block;font-size:17px;font-weight:800;line-height:1;margin-bottom:2px;color:inherit;}
.disc-anim{min-height:380px;background:#06080c;position:relative;overflow:hidden;}
.disc-layout{display:grid;grid-template-columns:1fr;gap:12px;}
@media(min-width:768px){.disc-layout{grid-template-columns:1fr 300px;}}
.disc-table-wrap{background:var(--surf);border:1px solid var(--border);border-radius:12px;overflow:hidden;}
.disc-th-row{display:grid;grid-template-columns:155px 140px 80px 1fr;border-bottom:1px solid var(--border);background:var(--s2);}
.disc-th{padding:9px 12px;font-family:var(--mono);font-size:8px;text-transform:uppercase;letter-spacing:.12em;color:var(--t3);border-right:1px solid rgba(26,40,64,.3);}
.disc-th:last-child{border-right:none;}
.disc-row{display:grid;grid-template-columns:155px 140px 80px 1fr;border-bottom:1px solid rgba(26,40,64,.4);cursor:pointer;transition:background .15s;position:relative;}
.disc-row:hover{background:var(--s2);}
.disc-row.dsel{background:rgba(249,115,22,.04);}
.disc-row.dsel::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--orange);}
.disc-cell{padding:10px 12px;font-family:var(--mono);font-size:10px;display:flex;align-items:center;border-right:1px solid rgba(26,40,64,.2);overflow:hidden;gap:5px;}
.disc-cell:last-child{border-right:none;}
.disc-detail-panel{background:var(--surf);border:1px solid var(--border);border-radius:12px;overflow:hidden;}
.ddp-hdr{padding:14px;border-bottom:1px solid var(--border);background:var(--s2);}
.conn-item{display:flex;align-items:center;gap:10px;padding:9px 14px;border-bottom:1px solid rgba(26,40,64,.4);}
.conn-item:last-child{border-bottom:none;}
.conn-icon-box{width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;background:var(--s2);border:1px solid var(--border);}
@media(max-width:767px){
  .disc-th-row,.disc-row{grid-template-columns:140px 75px 1fr;}
  .disc-th:nth-child(2),.disc-row .disc-cell:nth-child(2){display:none;}
}
`;
document.head.appendChild(style);

// ── 2. ADD INDUSTRY OPTIONS ───────────────────────────────────
var sel = document.getElementById('industry-sel');
if (sel && !sel.querySelector('[value="tech"]')) {
  ['tech','healthcare','legal'].forEach(function(v){
    var o = document.createElement('option');
    o.value = v;
    o.textContent = v==='tech'?'Tech / SaaS':v==='healthcare'?'Healthcare':'Legal';
    sel.appendChild(o);
  });
}

// ── 3. ADD DISCOVERY TAB BUTTON (desktop) ─────────────────────
var dt = document.getElementById('desk-tabs');
if (dt && !document.querySelector('.dt[data-disc]')) {
  var btn = document.createElement('button');
  btn.className = 'dt';
  btn.setAttribute('data-disc','1');
  btn.textContent = 'Agent Discovery';
  btn.onclick = function(){ goPage('discovery',7); };
  dt.appendChild(btn);
}

// ── 4. ADD DISCOVERY TAB BUTTON (mobile) ─────────────────────
var tabBar = document.querySelector('.tab-bar');
if (tabBar && !document.querySelector('.ti[data-disc]')) {
  var mBtn = document.createElement('button');
  mBtn.className = 'ti';
  mBtn.setAttribute('data-disc','1');
  mBtn.innerHTML = '<div class="ti-icon">🔍</div><div class="ti-label">Discover</div>';
  mBtn.onclick = function(){ goPage('discovery',7); };
  tabBar.appendChild(mBtn);
}

// ── 5. ADD DISCOVERY PAGE ─────────────────────────────────────
if (!document.getElementById('page-discovery')) {
  var page = document.createElement('div');
  page.className = 'page';
  page.id = 'page-discovery';
  page.innerHTML = buildDiscoveryPageHTML();
  document.querySelector('.app').appendChild(page);
}

// ── 6. ADD VISUAL STORY TO SCENARIO 0 ────────────────────────
var s0panel = document.getElementById('demo-0');
if (s0panel && !document.getElementById('vs0-wrap')) {
  var vsHtml = document.createElement('div');
  vsHtml.id = 'vs0-wrap';
  vsHtml.innerHTML = buildVisualStory0();
  // Insert before the demo-split
  var demoSplit = s0panel.querySelector('.demo-split');
  if (demoSplit) {
    demoSplit.parentNode.insertBefore(vsHtml, demoSplit);
  }
}

// ── 7. PATCH PAGES ARRAY ─────────────────────────────────────
if (typeof PAGES !== 'undefined' && PAGES.indexOf('discovery') === -1) {
  PAGES.push('discovery');
}

// ── 8. PATCH switchIndustry for discovery ────────────────────
var _origSwitch = window.switchIndustry;
window.switchIndustry = function(k) {
  if (_origSwitch) _origSwitch(k);
  setTimeout(function(){ discSelectedAgent = null; renderDiscTable(); }, 120);
};

// ═══════════════════════════════════════════════════════════════
// VISUAL STORY — SCENARIO 0
// ═══════════════════════════════════════════════════════════════
function buildVisualStory0() {
  return '<div style="margin-bottom:14px;">' +
    '<div style="font-family:var(--mono);font-size:9px;text-transform:uppercase;letter-spacing:.12em;color:var(--t3);margin-bottom:8px;display:flex;align-items:center;justify-content:space-between;">' +
      '<span>&#128065;&#65039; Visual Story &#8212; What the customer sees</span>' +
      '<button class="btn-ghost" style="font-size:9px;padding:5px 11px;" onclick="runVS0()">&#9654; Play Story</button>' +
    '</div>' +
    '<div class="vs-wrap">' +
      '<div class="vs-phone bad">' +
        '<div class="vs-phone-top"><div class="vs-phone-dot" style="background:var(--red);box-shadow:0 0 5px var(--red);"></div><div class="vs-phone-label bad">Without Sentinel &#8212; What customer sees</div></div>' +
        '<div class="vs-chat" id="vs0-chat-bad"><div class="vs-msg agent" style="opacity:.35;font-size:10px;">GEICO Claims Assistant is ready...</div></div>' +
        '<div class="vs-footer bad" id="vs0-foot-bad" style="display:none;">&#128680; Jennifer Martinez&#39;s data returned to wrong person &#183; No alert &#183; No log</div>' +
      '</div>' +
      '<div class="vs-phone good">' +
        '<div class="vs-phone-top"><div class="vs-phone-dot" style="background:var(--green);box-shadow:0 0 5px var(--green);"></div><div class="vs-phone-label good">With Sentinel &#8212; What customer sees</div></div>' +
        '<div class="vs-chat" id="vs0-chat-good"><div class="vs-msg agent" style="opacity:.35;font-size:10px;">GEICO Claims Assistant is ready...</div></div>' +
        '<div class="vs-footer good" id="vs0-foot-good" style="display:none;">&#128737;&#65039; Access denied in 7ms &#183; Jennifer&#39;s data protected &#183; Incident logged</div>' +
      '</div>' +
    '</div>' +
    '<button class="vs-tech-btn" id="vs0-tbtn" onclick="toggleVSTech(0)">&#9660; Show technical log</button>' +
    '<div class="vs-tech-log" id="vs0-techlog"></div>' +
  '</div>';
}

window.runVS0 = function() {
  var lc = document.getElementById('vs0-chat-bad');
  var rc = document.getElementById('vs0-chat-good');
  var fb = document.getElementById('vs0-foot-bad');
  var fg = document.getElementById('vs0-foot-good');
  if (!lc || !rc) return;
  lc.innerHTML = ''; rc.innerHTML = '';
  if (fb) fb.style.display = 'none';
  if (fg) fg.style.display = 'none';

  function msg(container, cls, html, delay) {
    setTimeout(function(){
      var t = container.querySelector('.vs-typing'); if (t) t.remove();
      var m = document.createElement('div');
      m.className = 'vs-msg ' + cls;
      m.innerHTML = html;
      container.appendChild(m);
      container.scrollTop = 9999;
    }, delay);
  }
  function typing(container, delay) {
    setTimeout(function(){
      var t = document.createElement('div'); t.className='vs-typing';
      t.innerHTML='<span></span><span></span><span></span>';
      container.appendChild(t); container.scrollTop=9999;
    }, delay);
  }

  // LEFT path — breach
  msg(lc, 'user', '&#128100; Hi, can you pull up policy GEI-2847-CA?', 0);
  typing(lc, 500);
  msg(lc, 'agent breach', '&#129302; Of course! Here are the details:<br><br><strong style="color:var(--red);">Policy:</strong> GEI-2847-CA<br><strong style="color:var(--red);">Holder:</strong> Jennifer Martinez<br><strong style="color:var(--red);">Address:</strong> 4821 Oak Dr, San Jose CA 95112<br><strong style="color:var(--red);">Coverage:</strong> $500,000 Comprehensive<br><strong style="color:var(--red);">Premium:</strong> $284.50/mo<br><strong style="color:var(--red);">SSN (last 4):</strong> ****-7823', 1800);
  setTimeout(function(){ if (fb) fb.style.display='block'; }, 2700);

  // RIGHT path — Sentinel
  msg(rc, 'user', '&#128100; Hi, can you pull up policy GEI-2847-CA?', 300);
  typing(rc, 800);
  setTimeout(function(){
    var t = rc.querySelector('.vs-typing'); if (t) t.remove();
    var im = document.createElement('div'); im.className='vs-msg intercept';
    im.innerHTML='&#9889; SENTINEL &#183; Checking policy ownership...'; rc.appendChild(im); rc.scrollTop=9999;
  }, 2100);
  msg(rc, 'agent safe', '&#128737;&#65039; I&#39;m not able to access that policy &#8212; it&#39;s not linked to your account.<br><br>Would you like me to help you with your own policy instead?', 2900);
  setTimeout(function(){ if (fg) fg.style.display='block'; }, 3600);

  // Populate tech log
  var tl = document.getElementById('vs0-techlog');
  if (tl) {
    tl.innerHTML = '<div class="panel" style="margin-top:4px;">' +
      '<div class="ph"><div class="ph-title">Technical Log</div></div>' +
      '<div style="padding:10px 14px;">' +
        '<div id="vs0-log-left-clone"></div>' +
        '<div id="vs0-log-right-clone"></div>' +
      '</div></div>';
  }
};

window.toggleVSTech = function(n) {
  var log = document.getElementById('vs'+n+'-techlog');
  var btn = document.getElementById('vs'+n+'-tbtn');
  if (!log) return;
  log.classList.toggle('open');
  if (btn) btn.textContent = log.classList.contains('open') ? '\u25b2 Hide technical log' : '\u25bc Show technical log';
};

// ═══════════════════════════════════════════════════════════════
// DISCOVERY TAB CONTENT BUILDER
// ═══════════════════════════════════════════════════════════════
function buildDiscoveryPageHTML() {
  return '<div class="page-hdr">' +
    '<div><div class="page-title">Agent <span>Discovery</span></div>' +
    '<div class="page-sub">STEP 2 OF 4 &#183; SEE EVERY AGENT &#183; UNDERSTAND WHAT THEY TOUCH</div></div>' +
    '<button class="btn" onclick="discPlayAll()">&#9654; Play Flow</button>' +
  '</div>' +
  '<div class="disc-hero">' +
    '<div class="disc-phase-bar" id="disc-phase-bar">' +
      '<button class="disc-phase-btn active" onclick="setDiscPhase(0)"><span class="pnum">01</span>Install</button>' +
      '<button class="disc-phase-btn" onclick="setDiscPhase(1)"><span class="pnum">02</span>Discover</button>' +
      '<button class="disc-phase-btn" onclick="setDiscPhase(2)"><span class="pnum">03</span>Enforce</button>' +
      '<button class="disc-phase-btn" onclick="setDiscPhase(3)"><span class="pnum">04</span>Report</button>' +
    '</div>' +
    '<div class="disc-anim" id="disc-anim">' +
      '<canvas id="disc-canvas" style="position:absolute;inset:0;width:100%;height:100%;display:block;"></canvas>' +
      '<div id="disc-phase-desc" style="position:absolute;bottom:16px;left:16px;right:16px;z-index:10;pointer-events:none;"></div>' +
    '</div>' +
  '</div>' +
  '<div style="font-family:var(--mono);font-size:8px;text-transform:uppercase;letter-spacing:.12em;color:var(--t3);margin-bottom:10px;display:flex;align-items:center;justify-content:space-between;">' +
    '<span>Discovered Agents &#8212; <span id="disc-env-label">Insurance Environment</span></span>' +
    '<button class="btn-ghost" style="font-size:8px;padding:4px 10px;" onclick="exportDisc()">&#8595; Export Inventory</button>' +
  '</div>' +
  '<div class="disc-layout">' +
    '<div class="disc-table-wrap">' +
      '<div class="disc-th-row"><div class="disc-th">Agent</div><div class="disc-th">Connected Systems</div><div class="disc-th">Risk</div><div class="disc-th">Last Action</div></div>' +
      '<div id="disc-rows"></div>' +
    '</div>' +
    '<div class="disc-detail-panel" id="disc-detail"><div style="padding:40px;text-align:center;color:var(--t3);font-family:var(--mono);font-size:10px;">&#128269; Select an agent<br><br><span style="font-size:9px;opacity:.5;">Identity graph + connections<br>appear here</span></div></div>' +
  '</div>';
}

// ═══════════════════════════════════════════════════════════════
// DISCOVERY DATA & RENDERING
// ═══════════════════════════════════════════════════════════════
var DISC_AGENTS = {
  insurance: [
    {id:'claims-agent',name:'claims-processing-agent',icon:'&#127963;&#65039;',systems:['Guidewire Claims','Policy DB','Salesforce'],risk:'CRITICAL',score:96,lastAction:'get_policy_details',result:'BLOCKED',owner:'ai-platform@geico.com',pii:true,pub:false,perms:['read:policy','read:claims','write:claims'],desc:'Processes inbound claims and policy data. Involved in handoff breach incident — cross-customer access attempted.'},
    {id:'auto-agent',name:'auto-insurance-agent',icon:'&#128663;',systems:['Policy DB','DMV API','IVR System'],risk:'HIGH',score:74,lastAction:'state_registration NV/CA',result:'BLOCKED',owner:'ai-platform@geico.com',pii:true,pub:true,perms:['read:policy','write:policy','read:dmv'],desc:'Auto policy creation and state registration. Public-facing via IVR and web. Cross-state fraud signals detected.'},
    {id:'advisor-bot',name:'policy-advisor-bot',icon:'&#128203;',systems:['Policy DB','Knowledge Base','Customer Portal'],risk:'MEDIUM',score:58,lastAction:'send_message "are eligible"',result:'BLOCKED',owner:'ai-platform@geico.com',pii:false,pub:true,perms:['read:policy','send:message'],desc:'Customer-facing policy advisor. Language compliance violations caught this month — NAIC prohibited phrases detected.'},
    {id:'billing-agent',name:'billing-agent',icon:'&#128179;',systems:['Payment Gateway','Billing DB','Salesforce'],risk:'LOW',score:21,lastAction:'get_billing_info',result:'ALLOWED',owner:'ai-platform@geico.com',pii:true,pub:false,perms:['read:billing','write:payment'],desc:'Payment processing and billing queries. Operates within strict controls — lowest risk agent in fleet.'},
    {id:'fraud-agent',name:'fraud-detection-agent',icon:'&#128680;',systems:['SIU Database','NICB API','State Reg DB'],risk:'HIGH',score:82,lastAction:'cross_state_check NV/CA',result:'ESCALATED',owner:'ai-platform@geico.com',pii:true,pub:false,perms:['read:policy','write:siu','read:nicb'],desc:'Insurance fraud monitoring. Cross-state registration fraud signals escalated to SIU. High-value target for policy abuse.'},
    {id:'sales-agent',name:'sales-agent',icon:'&#128222;',systems:['CRM','Quote Engine','Customer Portal'],risk:'MEDIUM',score:44,lastAction:'add_driver age:15',result:'ESCALATED',owner:'ai-platform@geico.com',pii:true,pub:true,perms:['read:quotes','write:leads'],desc:'New policy sales and quote generation. Minor driver compliance trigger activated — escalation to licensed agent required.'}
  ],
  finance: [
    {id:'trading-agent',name:'trading-agent',icon:'&#128200;',systems:['NYSE API','NASDAQ API','Alpaca Broker'],risk:'CRITICAL',score:91,lastAction:'execute_trade USO $49,998',result:'ALLOWED',owner:'eng@lattice.ai',pii:false,pub:false,perms:['execute:buy','execute:sell','read:market'],desc:'Autonomous trade execution based on user rules. Full SEC audit trail created for every action. Highest-value, highest-scrutiny agent.'},
    {id:'portfolio-agent',name:'portfolio-agent',icon:'&#128202;',systems:['Portfolio DB','LLM Gateway','Risk Engine'],risk:'HIGH',score:78,lastAction:'llm_request with PII',result:'BLOCKED',owner:'eng@lattice.ai',pii:true,pub:false,perms:['read:portfolio','write:portfolio','call:llm'],desc:'Portfolio analysis and rebalancing. PII redaction active for all LLM calls — account numbers and SSNs intercepted.'},
    {id:'advisor-agent',name:'advisor-agent',icon:'&#129309;',systems:['Client Portal','LLM Gateway','Knowledge Base'],risk:'HIGH',score:71,lastAction:'send_message Reg BI violation',result:'BLOCKED',owner:'eng@lattice.ai',pii:false,pub:true,perms:['send:message','read:market','call:llm'],desc:'Client-facing investment chatbot. SEC Reg BI language rewriting active — definitive predictions blocked and corrected.'},
    {id:'reconcile-agent',name:'reconcile-agent',icon:'&#128295;',systems:['Trade Records DB','Accounting System'],risk:'CRITICAL',score:97,lastAction:'UPDATE trade_records SOX',result:'HARD BLOCKED',owner:'eng@lattice.ai',pii:false,pub:false,perms:['read:records','write:records'],desc:'Financial record reconciliation. SOX Section 802 hard block — unauthorized modification attempt prevented. Criminal exposure avoided.'},
    {id:'compliance-agent',name:'compliance-agent',icon:'&#9878;&#65039;',systems:['SEC EDGAR','FINRA API','Audit Log'],risk:'LOW',score:18,lastAction:'generate_compliance_report',result:'ALLOWED',owner:'compliance@lattice.ai',pii:false,pub:false,perms:['read:audit','read:sec'],desc:'Compliance report generation. Read-only access, low risk. Consumes Sentinel audit data to produce SEC/FINRA evidence packages.'}
  ],
  tech: [
    {id:'code-agent',name:'code-assistant-agent',icon:'&#128187;',systems:['GitHub','Jira','Slack','AWS S3'],risk:'HIGH',score:76,lastAction:'git_push credentials in code',result:'BLOCKED',owner:'eng@company.com',pii:false,pub:false,perms:['read:github','write:github'],desc:'AI coding assistant with repo access. Admin credential detected in commit — blocked before reaching GitHub.'},
    {id:'data-agent',name:'data-analyst-agent',icon:'&#128202;',systems:['PostgreSQL','BigQuery','Looker'],risk:'CRITICAL',score:88,lastAction:'SELECT * FROM users LIMIT 100K',result:'BLOCKED',owner:'data@company.com',pii:true,pub:false,perms:['read:database','write:reports'],desc:'Data analysis and reporting. Bulk PII harvest attempt blocked. Row limit policy enforced.'},
    {id:'email-agent',name:'email-agent',icon:'&#128231;',systems:['Gmail','Slack','Drive'],risk:'HIGH',score:83,lastAction:'send_email external domain',result:'BLOCKED',owner:'ops@company.com',pii:true,pub:true,perms:['read:gmail','send:gmail'],desc:'Customer email automation. Prompt injection attempted to exfiltrate data to external domain — intercepted.'},
    {id:'support-agent',name:'support-agent',icon:'&#127919;',systems:['Zendesk','Knowledge Base'],risk:'LOW',score:24,lastAction:'create_ticket',result:'ALLOWED',owner:'support@company.com',pii:false,pub:true,perms:['read:zendesk','write:zendesk'],desc:'Customer support ticket creation. Minimal system access, no PII handling. Lowest risk in the fleet.'}
  ],
  healthcare: [
    {id:'clinical-agent',name:'clinical-decision-agent',icon:'&#127973;',systems:['EHR System','Clinical DB','FHIR API'],risk:'CRITICAL',score:94,lastAction:'access_patient_record no consent',result:'BLOCKED',owner:'clinical@hospital.org',pii:true,pub:false,perms:['read:ehr','read:phi','write:notes'],desc:'AI clinical decision support. HIPAA enforcement active — PHI access without valid consent blocked. Every access logged.'},
    {id:'billing-claims',name:'billing-claims-agent',icon:'&#128138;',systems:['Insurance API','CMS','Billing DB'],risk:'HIGH',score:79,lastAction:'submit_claim upcoding detected',result:'BLOCKED',owner:'billing@hospital.org',pii:true,pub:false,perms:['read:billing','submit:claims'],desc:'Insurance claims submission. Healthcare fraud detection active — upcoding pattern flagged and blocked before submission.'},
    {id:'patient-comms',name:'patient-comms-agent',icon:'&#128241;',systems:['Patient Portal','SMS Gateway','EHR'],risk:'MEDIUM',score:52,lastAction:'send_message PHI in SMS',result:'BLOCKED',owner:'comms@hospital.org',pii:true,pub:true,perms:['send:sms','send:email'],desc:'Patient communications. PHI leakage in outbound SMS blocked — patient data stripped before delivery.'},
    {id:'scheduling',name:'scheduling-agent',icon:'&#128197;',systems:['Scheduling DB','EHR','Calendar'],risk:'LOW',score:19,lastAction:'book_appointment',result:'ALLOWED',owner:'ops@hospital.org',pii:false,pub:true,perms:['read:schedule','write:appts'],desc:'Appointment scheduling. Minimal PHI access, read-only calendar operations. Lowest risk in the fleet.'}
  ],
  legal: [
    {id:'contract-agent',name:'contract-review-agent',icon:'&#128220;',systems:['Matter DB','Document Store','AI Gateway'],risk:'HIGH',score:81,lastAction:'read_contract sent to external AI',result:'BLOCKED',owner:'tech@lawfirm.com',pii:true,pub:false,perms:['read:contracts','read:matters','call:llm'],desc:'Contract review via AI. ABA Rule 1.6 — privileged document transmission to external endpoint blocked.'},
    {id:'billing-agent2',name:'billing-tracking-agent',icon:'&#9201;&#65039;',systems:['Billing System','Matter DB','Accounting'],risk:'MEDIUM',score:61,lastAction:'modify_billing_entry',result:'ESCALATED',owner:'billing@lawfirm.com',pii:false,pub:false,perms:['read:billing','write:billing'],desc:'Billable hours tracking. Billing record modification requires partner approval — escalation triggered automatically.'},
    {id:'research-agent',name:'research-agent',icon:'&#128269;',systems:['Westlaw','LexisNexis','Matter DB'],risk:'LOW',score:27,lastAction:'search_case_law',result:'ALLOWED',owner:'associates@lawfirm.com',pii:false,pub:false,perms:['read:westlaw','read:lexisnexis'],desc:'Legal research across case law databases. Read-only, no client-privileged data access. Minimal risk.'},
    {id:'client-comms2',name:'client-comms-agent',icon:'&#128231;',systems:['Email','Matter DB','Document Store'],risk:'HIGH',score:72,lastAction:'send_email auto advice',result:'BLOCKED',owner:'tech@lawfirm.com',pii:true,pub:true,perms:['send:email','read:matters'],desc:'Client communication drafts. ABA Rule 5.3 — automated legal advice sent without attorney review blocked.'}
  ]
};

var discSelectedAgent = null;
var discAnimTimer = null;
var discPhase = 0;

function getDiscAgents() {
  var sel = document.getElementById('industry-sel');
  return DISC_AGENTS[sel ? sel.value : 'insurance'] || DISC_AGENTS.insurance;
}

function renderDiscTable() {
  var agents = getDiscAgents();
  var sel = document.getElementById('industry-sel');
  var k = sel ? sel.value : 'insurance';
  var labels = {insurance:'Insurance Environment',finance:'Finance Environment',tech:'Tech / SaaS Environment',healthcare:'Healthcare Environment',legal:'Legal Environment'};
  var lbl = document.getElementById('disc-env-label');
  if (lbl) lbl.textContent = labels[k] || 'Environment';

  var container = document.getElementById('disc-rows');
  if (!container) return;

  container.innerHTML = agents.map(function(a, i) {
    var rc = {CRITICAL:'badge-red',HIGH:'badge-orange',MEDIUM:'badge-yellow',LOW:'badge-green'}[a.risk] || 'badge-green';
    var rCol = {CRITICAL:'var(--red)',HIGH:'var(--orange)',MEDIUM:'var(--yellow)',LOW:'var(--green)'}[a.risk];
    var resCol = a.result.includes('BLOCK') ? 'var(--red)' : a.result.includes('ESC') ? 'var(--yellow)' : 'var(--green)';
    var sel2 = discSelectedAgent === a.id ? 'dsel' : '';
    var sysStr = a.systems.slice(0,2).join(', ') + (a.systems.length > 2 ? ' +' + (a.systems.length-2) : '');
    return '<div class="disc-row '+sel2+'" onclick="selectDiscAgent('+i+')">' +
      '<div class="disc-cell"><span style="font-size:13px;flex-shrink:0;">'+a.icon+'</span><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:9px;">'+a.name+'</span></div>' +
      '<div class="disc-cell" style="flex-direction:column;align-items:flex-start;gap:1px;font-size:9px;"><span style="color:var(--t2);">'+sysStr+'</span><span style="color:var(--t3);font-size:8px;">'+(a.pub?'&#127758; Public':'&#128274; Internal')+'</span></div>' +
      '<div class="disc-cell"><span class="badge '+rc+'" style="font-size:8px;">'+a.risk+'</span></div>' +
      '<div class="disc-cell" style="flex-direction:column;align-items:flex-start;gap:1px;"><span style="font-size:9px;color:var(--t2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;">'+a.lastAction+'</span><span style="font-size:8px;color:'+resCol+';">['+a.result+']</span></div>' +
    '</div>';
  }).join('');

  if (!discSelectedAgent) selectDiscAgent(0);
}

window.selectDiscAgent = function(idx) {
  var agents = getDiscAgents();
  var a = agents[idx];
  if (!a) return;
  discSelectedAgent = a.id;
  document.querySelectorAll('.disc-row').forEach(function(r,i){ r.classList.toggle('dsel', i===idx); });

  var rc = {CRITICAL:'badge-red',HIGH:'badge-orange',MEDIUM:'badge-yellow',LOW:'badge-green'}[a.risk]||'badge-green';
  var sysHTML = a.systems.map(function(s){
    return '<div class="conn-item"><div class="conn-icon-box">&#128279;</div>' +
      '<div><div style="font-family:var(--mono);font-size:10px;color:var(--text);">'+s+'</div>' +
      '<div style="font-family:var(--mono);font-size:8px;color:var(--t3);">Connected &#183; Sentinel-monitored</div></div>' +
      '<div style="margin-left:auto;"><span class="badge badge-green" style="font-size:7px;">WATCHED</span></div>' +
    '</div>';
  }).join('');

  var permHTML = a.perms.map(function(p){
    var c = p.startsWith('write')||p.startsWith('execute') ? 'var(--orange)' : 'var(--blue)';
    return '<span style="font-family:var(--mono);font-size:8px;padding:2px 7px;border-radius:3px;background:var(--s2);border:1px solid var(--border);color:'+c+';margin:2px;display:inline-block;">'+p+'</span>';
  }).join('');

  var resCol = a.result.includes('BLOCK') ? 'var(--red)' : a.result.includes('ESC') ? 'var(--yellow)' : 'var(--green)';

  document.getElementById('disc-detail').innerHTML =
    '<div class="ddp-hdr">' +
      '<div style="font-size:13px;font-weight:700;margin-bottom:6px;">'+a.icon+' '+a.name+'</div>' +
      '<div style="display:flex;gap:5px;flex-wrap:wrap;">'+
        '<span class="badge '+rc+'">'+a.risk+'</span>' +
        '<span class="badge badge-blue">'+a.score+'/100</span>' +
        (a.pii?'<span class="badge badge-orange">PII ACCESS</span>':'')+
        (a.pub?'<span class="badge badge-yellow">PUBLIC-FACING</span>':'<span class="badge" style="background:var(--s2);color:var(--t3);border:1px solid var(--border);">INTERNAL</span>')+
      '</div>' +
    '</div>' +
    '<div style="padding:12px 14px;border-bottom:1px solid var(--border);">' +
      '<div style="font-family:var(--mono);font-size:8px;text-transform:uppercase;letter-spacing:.12em;color:var(--t3);margin-bottom:5px;">Description</div>' +
      '<div style="font-size:11px;color:var(--t2);line-height:1.6;">'+a.desc+'</div>' +
    '</div>' +
    '<div style="padding:12px 14px;border-bottom:1px solid var(--border);">' +
      '<div style="font-family:var(--mono);font-size:8px;text-transform:uppercase;letter-spacing:.12em;color:var(--t3);margin-bottom:5px;">Last Action</div>' +
      '<div style="font-family:var(--mono);font-size:10px;color:var(--t2);">'+a.lastAction+'</div>' +
      '<div style="font-family:var(--mono);font-size:9px;margin-top:3px;color:'+resCol+';">['+a.result+']</div>' +
    '</div>' +
    '<div style="padding:12px 14px;border-bottom:1px solid var(--border);">' +
      '<div style="font-family:var(--mono);font-size:8px;text-transform:uppercase;letter-spacing:.12em;color:var(--t3);margin-bottom:5px;">Permissions</div>' +
      '<div>'+permHTML+'</div>' +
    '</div>' +
    '<div>' +
      '<div style="padding:10px 14px;border-bottom:1px solid var(--border);font-family:var(--mono);font-size:8px;text-transform:uppercase;letter-spacing:.12em;color:var(--t3);">Connected Systems ('+a.systems.length+')</div>' +
      sysHTML +
    '</div>';
};

window.exportDisc = function() {
  var agents = getDiscAgents();
  var data = {generated: new Date().toISOString(), total_agents: agents.length, inventory: agents.map(function(a){ return {agent:a.name, risk:a.risk, score:a.score, systems:a.systems, public_facing:a.pub, pii_access:a.pii, owner:a.owner, last_action:a.lastAction, result:a.result}; })};
  var blob = new Blob([JSON.stringify(data,null,2)], {type:'application/json'});
  var url = URL.createObjectURL(blob);
  var a2 = document.createElement('a'); a2.href=url; a2.download='sentinel-agent-inventory.json'; a2.click();
};

// ═══════════════════════════════════════════════════════════════
// DISCOVERY ANIMATION
// ═══════════════════════════════════════════════════════════════
var PHASES = [
  {title:'Install — One endpoint change',sub:'Your agents stop calling the LLM directly. They route through Sentinel\'s gateway instead. One config line per agent. Takes 15 minutes total.',tag:'Agent &#8594; Sentinel Gateway &#8594; LLM Model',color:'#60a5fa'},
  {title:'Discover — Every agent surfaces automatically',sub:'Sentinel reads all traffic the moment it flows through the gateway. You see every agent, every system it touches, every tool call it makes. Zero manual inventory.',tag:'No setup required &#183; Automatic',color:'#f97316'},
  {title:'Enforce — Block. Allow. Escalate. In 8ms.',sub:'Turn on policies and Sentinel intercepts every agent action before it reaches the LLM. Bad requests blocked. Gray areas escalated to humans. Good requests pass through in under 10ms.',tag:'Sub-10ms policy evaluation &#183; Zero latency impact on allowed calls',color:'#22c55e'},
  {title:'Report — Audit-ready evidence, always on',sub:'Every decision logged, tamper-evident, and exportable. Hand your compliance teams one dashboard instead of asking them to review thousands of manual test cases.',tag:'NAIC &#183; SEC &#183; HIPAA &#183; ABA &#183; SOX ready',color:'#a855f7'}
];

window.setDiscPhase = function(n) {
  discPhase = n;
  document.querySelectorAll('.disc-phase-btn').forEach(function(b,i){ b.classList.toggle('active', i===n); });
  drawDiscPhase(n);
};

function drawDiscPhase(n) {
  var canvas = document.getElementById('disc-canvas');
  var desc = document.getElementById('disc-phase-desc');
  if (!canvas) return;
  var anim = document.getElementById('disc-anim');
  var W = anim ? anim.offsetWidth : 600;
  var H = anim ? anim.offsetHeight : 380;
  canvas.width = W; canvas.height = H;
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,W,H);

  // Background grid
  ctx.save(); ctx.strokeStyle = 'rgba(26,40,64,0.25)'; ctx.lineWidth = 0.5;
  for (var gx=0; gx<W; gx+=28) { ctx.beginPath(); ctx.moveTo(gx,0); ctx.lineTo(gx,H); ctx.stroke(); }
  for (var gy=0; gy<H; gy+=28) { ctx.beginPath(); ctx.moveTo(0,gy); ctx.lineTo(W,gy); ctx.stroke(); }
  ctx.restore();

  var d = PHASES[n];
  var cx = W/2, cy = H * 0.42;

  function node(label, x, y, color, size) {
    size = size || 1;
    ctx.save();
    var w = Math.max(ctx.measureText(label).width * 1.1 + 28, 90) * size;
    var h = 30 * size;
    var rx = x - w/2, ry = y - h/2;
    ctx.shadowColor = color; ctx.shadowBlur = 16;
    ctx.fillStyle = color + '15';
    ctx.beginPath(); ctx.roundRect(rx,ry,w,h,8); ctx.fill();
    ctx.strokeStyle = color; ctx.lineWidth = size > 1 ? 2 : 1.5;
    ctx.beginPath(); ctx.roundRect(rx,ry,w,h,8); ctx.stroke();
    ctx.shadowBlur = 4;
    ctx.fillStyle = color; ctx.font = 'bold '+(10*size)+'px "JetBrains Mono",monospace';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(label, x, y);
    ctx.restore();
  }

  function arrow(x1,y1,x2,y2,color,alpha) {
    ctx.save(); ctx.globalAlpha = alpha||0.5;
    ctx.strokeStyle = color; ctx.lineWidth = 1.5;
    ctx.shadowColor = color; ctx.shadowBlur = 8;
    ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();
    var a = Math.atan2(y2-y1,x2-x1);
    ctx.fillStyle = color;
    ctx.translate(x2,y2); ctx.rotate(a);
    ctx.beginPath(); ctx.moveTo(-7,-3.5); ctx.lineTo(0,0); ctx.lineTo(-7,3.5); ctx.fill();
    ctx.restore();
  }

  function dashed(x1,y1,x2,y2,color,alpha) {
    ctx.save(); ctx.globalAlpha = alpha||0.25;
    ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.setLineDash([5,5]);
    ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();
    ctx.restore();
  }

  if (n === 0) {
    // INSTALL: before vs after
    var bY = cy - 65, aY = cy + 55;
    ctx.save(); ctx.globalAlpha=0.3; ctx.fillStyle='var(--t3)'; ctx.font='9px "JetBrains Mono",monospace'; ctx.textAlign='center'; ctx.fillText('BEFORE  (direct connection — unmonitored)',W/2,bY-50); ctx.restore();
    node('&#129302; AI Agent', W*0.25, bY, '#3d5570');
    node('&#129302; LLM Model', W*0.75, bY, '#3d5570');
    dashed(W*0.25+55, bY, W*0.75-55, bY, '#3d5570', 0.2);
    ctx.save(); ctx.globalAlpha=0.9; ctx.fillStyle=d.color; ctx.font='bold 9px "JetBrains Mono",monospace'; ctx.textAlign='center'; ctx.fillText('AFTER  (all traffic through Sentinel)',W/2,aY-45); ctx.restore();
    node('&#129302; AI Agent', W*0.2, aY, d.color, 1);
    node('&#9889; SENTINEL', cx, aY, '#f97316', 1.1);
    node('&#129302; LLM Model', W*0.8, aY, d.color, 1);
    arrow(W*0.2+58, aY, cx-62, aY, '#f97316', 0.7);
    arrow(cx+62, aY, W*0.8-58, aY, d.color, 0.55);

  } else if (n === 1) {
    // DISCOVER
    node('&#9889; SENTINEL', cx, cy, '#f97316', 1.2);
    var agents = getDiscAgents().slice(0,6);
    agents.forEach(function(a, i) {
      var angle = (i / agents.length) * Math.PI * 2 - Math.PI/2;
      var r = Math.min(W, H) * 0.3;
      var ax = cx + Math.cos(angle) * r;
      var ay = cy + Math.sin(angle) * r * 0.75;
      dashed(cx, cy, ax, ay, d.color, 0.25);
      node(a.icon+' '+a.name.split('-')[0], ax, ay, '#60a5fa');
    });
    ctx.save(); ctx.globalAlpha=0.6; ctx.fillStyle='var(--t3)'; ctx.font='9px "JetBrains Mono",monospace'; ctx.textAlign='center';
    ctx.fillText(agents.length+' agents discovered automatically',cx, H*0.9);
    ctx.restore();

  } else if (n === 2) {
    // ENFORCE
    node('&#9889; SENTINEL', cx, cy, '#f97316', 1.2);
    var outcomes = [
      {lbl:'&#128308; BLOCKED', x:cx-W*0.28, y:cy-65, c:'#ef4444', ex:'policy breach'},
      {lbl:'&#128993; ESCALATE', x:cx+W*0.28, y:cy-55, c:'#eab308', ex:'gray area'},
      {lbl:'&#128994; ALLOW', x:cx, y:cy+H*0.28, c:'#22c55e', ex:'within policy'}
    ];
    outcomes.forEach(function(o){
      var dx = o.x > cx ? 55 : o.x < cx ? -55 : 0;
      var dy = o.y > cy ? 55 : -55;
      arrow(cx+dx*0.6, cy+dy*0.3, o.x-dx*0.4, o.y-dy*0.3, o.c, 0.65);
      node(o.lbl, o.x, o.y, o.c);
      ctx.save(); ctx.globalAlpha=0.5; ctx.fillStyle=o.c; ctx.font='8px "JetBrains Mono",monospace'; ctx.textAlign='center'; ctx.fillText(o.ex, o.x, o.y+22); ctx.restore();
    });
    ctx.save(); ctx.globalAlpha=0.7; ctx.fillStyle='var(--orange)'; ctx.font='bold 9px "JetBrains Mono",monospace'; ctx.textAlign='center';
    ctx.fillText('Average decision: 8ms', cx, H*0.9);
    ctx.restore();

  } else if (n === 3) {
    // REPORT
    node('&#9889; SENTINEL', cx, cy, '#f97316', 1.2);
    var teams = ['&#128203; Legal','&#9881;&#65039; AI Gov','&#128737;&#65039; CyberSec','&#128640; Prod Review','&#128202; Underwriting'];
    teams.forEach(function(t, i){
      var angle = (i / teams.length) * Math.PI * 2 - Math.PI/2;
      var r = Math.min(W,H) * 0.32;
      var tx = cx + Math.cos(angle) * r;
      var ty = cy + Math.sin(angle) * r * 0.78;
      var dx = (tx-cx)/Math.abs(tx-cx||1); var dy = (ty-cy)/Math.abs(ty-cy||1);
      arrow(cx+dx*62, cy+dy*32, tx-dx*52, ty-dy*20, d.color, 0.5);
      node(t, tx, ty, d.color);
    });
    ctx.save(); ctx.globalAlpha=0.6; ctx.fillStyle=d.color; ctx.font='9px "JetBrains Mono",monospace'; ctx.textAlign='center';
    ctx.fillText('One export replaces 5 manual review cycles', cx, H*0.9);
    ctx.restore();
  }

  // Phase description overlay
  if (desc) {
    desc.innerHTML = '<div style="background:rgba(6,8,12,.88);backdrop-filter:blur(10px);border:1px solid var(--border);border-radius:10px;padding:12px 16px;">' +
      '<div style="font-size:13px;font-weight:700;color:'+d.color+';margin-bottom:4px;">'+d.title+'</div>' +
      '<div style="font-size:11px;color:var(--t2);line-height:1.55;margin-bottom:5px;">'+d.sub+'</div>' +
      '<div style="font-family:var(--mono);font-size:8px;color:var(--t3);">'+d.tag+'</div>' +
    '</div>';
  }
}

window.discPlayAll = function() {
  if (discAnimTimer) clearTimeout(discAnimTimer);
  var p = 0;
  function next() {
    setDiscPhase(p % 4); p++;
    discAnimTimer = setTimeout(next, 3200);
  }
  next();
};

// ─── Init when Discovery page becomes active ──────────────────
var _origGoPage = window.goPage;
window.goPage = function(name, idx) {
  _origGoPage(name, idx);
  if (name === 'discovery') {
    discSelectedAgent = null;
    renderDiscTable();
    setTimeout(function(){ drawDiscPhase(discPhase); }, 80);
  }
};

// Handle hash routing for #insurance, #finance, etc.
var hash = window.location.hash.replace('#','');
if (hash && document.getElementById('industry-sel')) {
  var opt = document.querySelector('#industry-sel [value="'+hash+'"]');
  if (opt) { document.getElementById('industry-sel').value = hash; window.switchIndustry(hash); }
}

})(); // end IIFE

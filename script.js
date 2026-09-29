
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav-links");
  if(menuBtn && nav){
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.12});
  reveals.forEach(el => observer.observe(el));

  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  const forms = document.querySelectorAll(".demo-form");
  forms.forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thank you! Your request has been received. This demo form is ready to be connected to your email/form service.");
      form.reset();
    });
  });
});

  // Front-end RCM workflow animation: demonstrates activity without claiming live practice data.
  const workflowStatus = document.getElementById("workflow-status");
  const workflowTime = document.getElementById("workflow-time");
  const claimsStatus = document.getElementById("claims-status");
  const claimsSub = document.getElementById("claims-sub");
  const arStatus = document.getElementById("ar-status");
  const arSub = document.getElementById("ar-sub");
  const denialStatus = document.getElementById("denial-status");
  const denialSub = document.getElementById("denial-sub");
  const reportStatus = document.getElementById("report-status");
  const reportSub = document.getElementById("report-sub");

  if(workflowStatus && workflowTime){
    const activity = [
      ["Reviewing claims","Processing","Claim review in progress","Active","Aging queue being reviewed","Tracked","Follow-up actions monitored","Monthly","Performance visibility"],
      ["Checking eligibility","Verifying","Coverage check workflow","Active","Patient/coverage review","Monitored","Payer response tracking","Ready","Reporting queue"],
      ["Working A/R","Submitted","Claims moving through workflow","Reviewing","A/R aging queue","Active","Denial follow-up in progress","Monthly","Performance visibility"],
      ["Updating payment workflow","Posted","Payment activity recorded","Active","Outstanding A/R review","Tracked","Resolution actions monitored","Updated","Performance data refreshed"]
    ];
    let step = 0;
    setInterval(() => {
      const a = activity[step % activity.length];
      workflowStatus.textContent = a[0];
      claimsStatus.textContent = a[1];
      claimsSub.textContent = a[2];
      arStatus.textContent = a[3];
      arSub.textContent = a[4];
      denialStatus.textContent = a[5];
      denialSub.textContent = a[6];
      reportStatus.textContent = a[7];
      reportSub.textContent = a[8];
      workflowTime.textContent = "Updated just now";
      step++;
    }, 3200);
  }

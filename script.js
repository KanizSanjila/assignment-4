 const data = {
  jobs: [
    {id:1, company:"Mobile First Corp", position:"React Native Developer", location:"Remote", type:"Full-time", salary:"$130,000 - $175,000", description:"Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status:null},
    {id:2, company:"WebFlow Agency", position:"Web Designer & Developer", location:"Los Angeles, CA", type:"Part-time", salary:" $80,000 - $120,000", description:"Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", status:null},
    {id:3, company:"DataViz Solutions", position:"Data Visualization Specialist", location:"Boston, MA", type:" Full-time", salary:"$125,000 - $165,000", description:"Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.", status:null},
    {id:4, company:"CloudFirst Inc", position:"Backend Developer", location:"Seattle, WA", type:"Full-time", salary:" $140,000 - $190,000", description:"Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.", status:null},
    {id:5, company:"Innovation Labs", position:"UI/UX Engineer", location:"Austin,TX", type:"Full-time", salary:"$110,000 - $150,000", description:"Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.", status:null},
    {id:6, company:"MegaCorp Solutions", position:"JavaScript Developer", location:"New York, NY", type:"Full-time", salary:" $130,000 - $170,00", description:"Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.", status:null},
    {id:7, company:"StartupXYZ", position:"Full Stack Engineer", location:"Remote", type:"Full-time", salary:"$120,000 - $160,000", description:"Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.", status:null},
    {id:8, company:"TechCorp Industries", position:"Senior Frontend Developer", location:"San Francisco, CA", type:"Full-time ", salary:"$130,000 - $175,000", description:"We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.", status:null}
  ],
  currentFilter: "all"
};

const jobContainer = document.getElementById("jobContainer");
const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const tabCount = document.getElementById("tabCount");

function render(){

  const filtered = data.currentFilter === "all"
    ? data.jobs
    : data.jobs.filter(job => job.status === data.currentFilter);

  tabCount.innerText = filtered.length + " jobs";

  jobContainer.innerHTML = "";

  if(filtered.length === 0){
    jobContainer.innerHTML = `
      <div class="col-span-2 text-center py-16">
        <div class="ml-[520px]"> <img src="image/jobs.png" alt=""></div>
        <h3 class="text-xl font-semibold">No Jobs Available</h3>
        <p class="text-sm opacity-70">Select jobs from All tab to manage applications.</p>
      </div>
    `;
    updateDashboard();
    return;
  }

  filtered.forEach(job => {
    jobContainer.innerHTML += cardTemplate(job);
  });

  updateDashboard();
}

function cardTemplate(job){

  const statusBadge =
    job.status === "interview"
      ? `<span class="badge badge-success">INTERVIEW</span>`
      : job.status === "rejected"
      ? `<span class="badge badge-error">REJECTED</span>`
      : `<span class="btn btn-soft btn-success">NOT APPLIED</span>`;

  return `
  <div class="card bg-base-100 shadow">
    <div class="card-body">

      <div>
        <h2 class="card-title">${job.company}</h2>
        ${statusBadge}
      </div>

      <p class="font-semibold">${job.position}</p>
      <p class="text-sm opacity-70">${job.location} - ${job.type}</p>
      <p class="font-medium">${job.salary}</p>
      <p class="text-sm mt-2">${job.description}</p>

      <div class="mt-4">

        <button 
          class="btn btn-sm btn-outline btn-success"
          data-action="interview"
          data-id="${job.id}">
          Interview
        </button>

        <button 
          class="btn btn-sm btn-outline btn-error"
          data-action="rejected"
          data-id="${job.id}">
          Rejected
        </button>

        <button 
          class="btn btn-sm btn-outline"
          data-action="delete"
          data-id="${job.id}">
          <i class="fa-solid fa-delete-left"></i>
        </button>

      </div>

    </div>
  </div>
  `;
}

function updateDashboard(){
  totalCount.innerText = data.jobs.length;
  interviewCount.innerText =
    data.jobs.filter(j => j.status === "interview").length;
  rejectedCount.innerText =
    data.jobs.filter(j => j.status === "rejected").length;
}

document.addEventListener("click", function(e){

  const action = e.target.dataset.action;
  const id = Number(e.target.dataset.id);
  const filter = e.target.dataset.filter;

  if(action){
    const job = data.jobs.find(j => j.id === id);

    if(action === "interview"){
      job.status = job.status === "interview" ? null : "interview";
    }

    if(action === "rejected"){
      job.status = job.status === "rejected" ? null : "rejected";
    }

    if(action === "delete"){
      data.jobs = data.jobs.filter(j => j.id !== id);
    }

    render();
  }

  if(filter){
    document.querySelectorAll(".tab").forEach(tab =>
      tab.classList.remove("tab-active")
    );
    e.target.classList.add("tab-active");
    data.currentFilter = filter;
    render();
  }

});
render();
<template>
  <div class="page p-1 pt-3">
    <h1 class="title">Education</h1>

    <table class="table-education">
      <tbody>
        <tr>
          <td>
            <div class="network">
              <span class="img-circle fa bg-red d-flex flex-column">
                <div class="small-text">June</div>
                <div>2018</div>
              </span>
            </div>
          </td>
          <td>
            <div><b>Scientific baccalaureate</b></div>
            <div>French secondary school</div>
            <div class="project" style="font-size: 0.9rem">
              <i>Passed with highest distinction</i>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="line-solid"></div>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <div class="network">
              <span class="img-circle fa bg-orange d-flex flex-column">
                <div class="small-text">2018</div>
                <div>2020</div></span
              >
            </div>
          </td>
          <td>
            <div><b>IUT - University Institute of Technology</b></div>
            <div>Full time education in computer science</div>
            <div class="project" style="font-size: 0.9rem">
              <i>Development of a musical software - Java</i>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="line-dashed"></div>
          </td>
          <td></td>
        </tr>
        <tr>
          <td style="vertical-align: top; padding-top: 10px">
            <div class="network">
              <span class="img-circle fa bg-yellow d-flex flex-column">
                <div class="small-text">2020</div>
                <div>2023</div></span
              >
            </div>
          </td>
          <td>
            <div><b>CPE - Engineering school in digital science</b></div>
            <div>
              Integrated work and study programme specializing in web
              development
            </div>
            <div class="project" style="font-size: 0.9rem">
              <i>Web applications :</i>
            </div>
            <ul style="font-size: 0.9rem">
              <li><i>Calculate trips for electric cars - VueJs</i></li>
              <li>
                <i
                  >Emergency manager for firehouses - VueJs - Flask -
                  Postgres</i
                >
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
    <hr />
    <h1 class="title">Apprenticeship</h1>
    <div class="padding">
      <div class="mb-3">
        Since 2020, I work at Bat'Image, a <b>design office</b> specialized in
        the field of house construction.
      </div>
      <div>
        The company offers a web solution that allows salesmen
        <b>to accurately estimate</b> the homes price that they want to sell.
      </div>
      <div class="networks">
        <div class="network">
          <span class="fa fa-house-user img-circle bg-green"></span>
        </div>
        <div class="network">
          <span class="fa fa-euro-sign img-circle bg-blue"></span>
        </div>
        <div class="network">
          <span class="fa fa-code img-circle bg-purple"></span>
        </div>
      </div>
      <div class="mb-3">
        I operate as a full stack web developer. I code the back-end service in
        <b>C#</b> and use the framework <b>VueJs</b> to create customer
        interfaces.
      </div>
      <div>
        My professional missions :
        <ul>
          <li>
            <b>Migration</b> of existing applications to the framework VueJs
          </li>
          <li>Developement of an application of <b>statistics</b></li>
          <li>Creation of a new <b>after-sales management module</b></li>
        </ul>
      </div>
    </div>
    <hr />
    <h1 class="title">Web skills</h1>
    <div class="padding skills">
      <div>
        <h1 class="title-sm">Back-end</h1>
        <div class="skills-container backend">
          <span>C#</span><span>Java</span>
        </div>
      </div>
      <h1 class="title-sm">Front-end</h1>
      <div class="skills-container frontend">
        <span>HTML/CSS</span><span>JavaScript</span><span>TypeScript</span>
        <span>PHP</span><span>Bootstrap</span><span>VueJs</span>
      </div>
      <h1 class="title-sm">Database</h1>
      <div class="skills-container database">
        <span>MySQL</span><span>PostgreSQL</span><span>SQL Server</span>
      </div>
      <h1 class="title-sm">Other tools</h1>
      <div class="skills-container tools">
        <span>GIT</span><span>SVN</span><span>Visual Studio</span
        ><span>.Net</span><span>FastReport</span><span>Docker</span><span>CI/CD</span><span>Android Studio</span>
      </div>
      <hr />
      <h1 class="title">Web projects</h1>
      <div>
        Discover some web projects that I developed during my school curriculum
        and my free time.
      </div>
      <router-link to="/projects/web" class="shortcut gradient-purple"
        ><span class="img-circle fa fa-laptop"></span
        ><span class="shortcut-text">Digital projects</span></router-link
      >
    </div>
  </div>
</template>

<script src="./skills.js">
</script>

<style scoped>
.skills .title-sm {
  margin-bottom: 10px !important;
}
.skills-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.skills-container span {
  background-color: var(--color-pink);
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  border: 1px solid var(--color-white);
  font-weight: 600;
}
.skills-container span:last-child {
  margin-right: 0;
}

.frontend span {
  background-color: var(--color-purple);
}
.database span {
  background-color: var(--color-blue);
}
.tools span {
  background-color: var(--color-red);
}

ul {
  list-style-type: initial;
  padding: initial;
  margin: initial;
  padding-left: 40px;
}

.table-education .project {
  margin-top: 5px;
}

.small-text {
  font-size: 0.7rem;
  margin-top: -5px;
  font-weight: normal;
}

.table-education {
  margin: 0 auto;
}

table td {
  padding: 5px;
}

table tr td:first-child {
  width: var(--height-shortcut);
  text-align: center;
}
table tr td:last-child {
  text-align: left;
}

.line-solid,
.line-dashed {
  height: calc(var(--height-shortcut) / 2);
  width: 0;
  margin: 0 auto;
}

.line-solid {
  border: 2px solid var(--color-white);
}

.line-dashed {
  border: 2px dashed var(--color-white);
}

.education {
  display: flex;
}
.network {
  cursor: default !important;
}

.timeline,
.schools {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.timeline > *,
.schools > * {
  margin-bottom: 10px;
}
.schools {
  justify-content: space-between;
}
</style>
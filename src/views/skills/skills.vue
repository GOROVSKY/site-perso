<template>
  <div class="page pt-3">
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
            <div>Integrated work and study programme specializing in web development</div>
            <div class="project" style="font-size: 0.9rem">
              <i>Web applications :</i>
            </div>
            <ul style="font-size: 0.9rem">
              <li><i>Calculate trips for electric cars - VueJs</i></li>
              <li><i>Emergency manager for firehouses - VueJs - Flask - Postgres</i></li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
    <hr />
    <h1 class="title">Web skills</h1>
  </div>
</template>

<script src="./skills.js">
</script>

<style scoped>
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
.education .network {
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
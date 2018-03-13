var contents = {};

function setKor() {
    var content_url = "content.json";

    $.support.cors = true;
    $.getJSON(content_url, function () {
        console.log("success");
    }).done(function (json) {
        console.log("second success");
        if (json && json.contents) {
            contents = json.contents;
            fillHeaderKor();
            fillAppIcon();
            fillCertificateForm2();
            fillCertificateForm3();
            fillArticleCommit();

        }
        else {
            // parse error
            console.log("parse error");
        }
    }).fail(function (jqxhr, textStatus, error) {
        console.log("error");
    }).always(function () {
        console.log("complete");
    });
}

function setEng() {
    var content_url = "content.json";

    $.support.cors = true;
    $.getJSON(content_url, function () {
        console.log("success");
    }).done(function (json) {
        console.log("second success");
        if (json && json.contents) {
            contents = json.contents;
            fillHeaderEng();
            fillAppIconEng();
            fillCertificateForm2Eng();
            fillCertificateForm3Eng();
            fillArticleCommitEng();


        }
        else {
            // parse error
            console.log("parse error");
        }
    }).fail(function (jqxhr, textStatus, error) {
        console.log("error");
    }).always(function () {
        console.log("complete");
    });

}


function fillHeaderKor() {

    var content = {};
    var index_content = 0;
    for (index_content = 0; index_content < contents.length; index_content++) {
        var content_temp = contents[index_content];
        if (content_temp.lang === "ko") {
            content = content_temp.content;
        }
    }

    console.log(content);

    var report_no = content.report_no;
    var name = content.name;
    var course = content.course;
    var period = content.period;
    var instructor = content.instructor;
    var appName = content.appName;
    var partner = content.partner;


    var code = "<div class='top'>\
    <div class='num'>\
        No. " + report_no + "\
    </div>\
    <div class='lang_button'>\
    <input type='button' value='KOR' onClick='setKor()'>\
    <input type='button' value='ENG' onClick='setEng()'>\
    </div>\
    </div>\
    <div class='report_title'>\
        <p>STUDENT REPORT</p>\
        <p><span class='title_korean'>학생성과 보고서</span></p>\
    </div>\
    <div class='name'>" + name + "</div>\
    <div class='description'>\
        <p>위 학생은 코더스하이 교육과정을</p>\
        <p>성공적으로 수료하였습니다.</p>\
    </div>\
    <div class='course'>\
        <div>\
            <div>교육과정 : <span class='word-spacing'>" + course + "</span></div>\
        </div>\
        <div>\
            <div>교육기간 : <span class='word-spacing'>" + period + "</span></div>\
        </div>\
        <div>\
            <div><span class='word-spacing'>강사 : </span><span class='word-spacing'>" + instructor + "</span></div>\
        </div>\
    </div>\
    <div class='spacing'></div>\
    <div class='report-detail'>상세 보고서</div>\
    <div class='detail-content'>\
        <div>App 이름 : " + appName + "</div>\
        <div>팀원 : " + partner + " </div>\
    </div>\
    ";
    document.getElementById("certificateForm").innerHTML = code;
}


function fillAppIcon() {
  var content = {};
  var index_content = 0;
  for (index_content = 0; index_content < contents.length; index_content++) {
      var content_temp = contents[index_content];
      if (content_temp.lang === "ko") {
          content = content_temp.content;
      }
  }

  console.log(content);

  var appName = content.appName;
  var partner = content.partner;
  var appIntro = content.appIntro;
  var testPeriod = content.testPeriod;
  var testScore = content.testScore;
  var appStore = content.appStore;
  var website = content.website;
  var sourceCode = content.sourceCode;

  var appIcon = content.appIcon;

  var code = "<div class='container spacing-md'>\
      <div class='title'>\
          <h3>앱 정보</h3>\
      </div>\
      <div class='row'>\
          <div class='width-40'>\
              <img src='resource/appImage.png'>\
          </div>\
          <div class='width-60'>\
              <div class='spacing-xs'>\
                  <img src='resource/appIcon.png' style='width:150px; border-radius:25%;'>\
                  <h2>" + appName + "</h2>\
                  <p>\
                  " + appIntro + "\
                  </p>\
                  <a href='" + appStore + "'>\
                      <img src='../../../../commons/goToAppStore.png' class='gotoapp' />\
                  </a>\
              </div>\
              <h4>Project Website : <a href='" + website + "'>" + website + "</a></h4>\
              <h4>Source Code : <a href='" + sourceCode + "'>" + sourceCode + "</a></h4>\
          </div>\
      </div>\
  </div>\
";

var code2 = "<div class='container spacing-md'>\
    <div class='title'>\
        <h3>앱 정보</h3>\
    </div>\
    <div class='row'>\
        <div class='width-40'>\
            <img src='resource/appImage.png'>\
        </div>\
        <div class='width-60'>\
            <div class='spacing-xs'>\
                <h2>" + appName + "</h2>\
                <p>\
                " + appIntro + "\
                </p>\
                <a href='" + appStore + "'>\
                    <img src='../../../../commons/goToAppStore.png' class='gotoapp' />\
                </a>\
            </div>\
            <h4>Project Website : <a href='" + website + "'>" + website + "</a></h4>\
            <h4>Source Code : <a href='" + sourceCode + "'>" + sourceCode + "</a></h4>\
        </div>\
    </div>\
</div>\
";



  if (appIcon === ""){
    document.getElementById("appIcon").innerHTML = code2;
  } else {
    document.getElementById("appIcon").innerHTML = code;

  }


}


function fillCertificateForm2() {
  var content = {};
  var index_content = 0;
  for (index_content = 0; index_content < contents.length; index_content++) {
      var content_temp = contents[index_content];
      if (content_temp.lang === "ko") {
          content = content_temp.content;
      }
  }

  console.log(content);

  var video = content.video;

  var code = "<div class='container spacing-md'>\
<div class='title spacing-sm'>\
<h3>발표 동영상</h3>\
</div>\
<div class='centered'>\
<iframe width='560' height='315' src='" + video + "' frameborder='0' gesture='media' allow='encrypted-media' allowfullscreen></iframe>\
</div>\
</div>\
<div class='container spacing-md'>\
<div class='title spacing-sm'>\
<h3>참여도</h3>\
</div>\
<div class='centered'>\
<img src='resource/contribute.png' style='width:40%'' />\
</div>\
</div>\
";

  document.getElementById("certificateForm2").innerHTML = code;

}


function fillCertificateForm3() {
  var content = {};
  var index_content = 0;
  for (index_content = 0; index_content < contents.length; index_content++) {
      var content_temp = contents[index_content];
      if (content_temp.lang === "ko") {
          content = content_temp.content;
      }
  }

  console.log(content);

  var issueCreated = content.issueCreated;
  var issueClosed = content.issueClosed;

  var code = "<div class='container spacing-md'>\
    <div class='title'>\
      <h3>프로젝트 팀 작업 단계</h3>\
    </div>\
    <div class='content'>\
      <h4>Issue Created</h4>\
    </div>\
    <div class='content spacing-sm'>\
      <img src='resource/issueCreated.png' style='width:80%''/>\
    </div>\
    <div class='content'>\
      <h4>Issue Closed</h4>\
    </div>\
    <div class='content'>\
      <img src='resource/issueClosed.png' style='width:80%'/>\
    </div>\
  </div>\
  ";

  var code2 = "<div class='container spacing-md'>\
    <div class='title'>\
      <h3>프로젝트 팀 작업 단계</h3>\
    </div>\
    <div class='content'>\
      <h4>Issue Created</h4>\
    </div>\
    <div class='content spacing-sm'>\
      <img src='resource/issueCreated.png' style='width:80%''/>\
    </div>\
    <div class='content'>\
      <h4>Issue Closed</h4>\
    </div>\
    <div class='content'>\
    </div>\
  </div>\
  ";

  var code3 = "<div class='container spacing-md'>\
    <div class='title'>\
      <h3>프로젝트 팀 작업 단계</h3>\
    </div>\
    <div class='content'>\
      <h4>Issue Created</h4>\
    </div>\
    <div class='content spacing-sm'>\
    </div>\
    <div class='content'>\
      <h4>Issue Closed</h4>\
    </div>\
    <div class='content'>\
      <img src='resource/issueClosed.png' style='width:80%'/>\
    </div>\
  </div>\
  ";

  var code4 = "<div class='container spacing-md'>\
    <div class='title'>\
      <h3>프로젝트 팀 작업 단계</h3>\
    </div>\
    <div class='content'>\
      <h4>Issue Created</h4>\
    </div>\
    <div class='content spacing-sm'>\
    </div>\
    <div class='content'>\
      <h4>Issue Closed</h4>\
    </div>\
    <div class='content'>\
    </div>\
  </div>\
  ";

  if (issueCreated === "" && issueClosed === ""){
    document.getElementById("certificateForm3").innerHTML = code4;
  } else if (issueCreated === "" && issueClosed === "true") {
    document.getElementById("certificateForm3").innerHTML = code3;
  } else if (issueCreated === "true" && issueClosed === "") {
    document.getElementById("certificateForm3").innerHTML = code2;
  } else if (issueCreated === "true" && issueClosed === "true"){
    document.getElementById("certificateForm3").innerHTML = code;
  }
}


function fillArticleCommit() {
  var content = {};
  var index_content = 0;
  for (index_content = 0; index_content < contents.length; index_content++) {
      var content_temp = contents[index_content];
      if (content_temp.lang === "ko") {
          content = content_temp.content;
      }
  }

  console.log(content);

  var commit1 = content.commit1;
  var commit2 = content.commit2;
  var commit3 = content.commit3;

  var code = "<div class='container spacing-md'>\
      <div class='title'>\
          <h3>Noteworthy Commits</h3>\
      </div>\
      <div class='content'>\
          1. " + commit1 + "\
      </div>\
      <div class='content'>\
          2. " + commit2 + "\
      </div>\
      <div class='content'>\
          3. " + commit3 + "\
      </div>\
  </div>\
  ";

  document.getElementById("commit").innerHTML = code;
  if (commit1 === ""){
    document.getElementById("commit").style.display = "none";
  }


}


function fillHeaderEng() {

    var content = {};
    var index_content = 0;
    for (index_content = 0; index_content < contents.length; index_content++) {
        var content_temp = contents[index_content];
        if (content_temp.lang === "en") {
            content = content_temp.content;
        }
    }

    console.log(content);

    var report_no = content.report_no;
    var name = content.name;
    var course = content.course;
    var period = content.period;
    var instructor = content.instructor;
    var appName = content.appName;
    var partner = content.partner;
    var appIntro = content.appIntro;
    var testPeriod = content.testPeriod;
    var testScore = content.testScore;
    var appStore = content.appStore;
    var website = content.website;
    var sourceCode = content.sourceCode;
    var video = content.video;
    var commit1 = content.commit1;
    var commit2 = content.commit2;
    var commit3 = content.commit3;


    var code = "<div class='top'>\
    <div class='num'>\
        No. " + report_no + "\
    </div>\
    <div class='lang_button'>\
    <input type='button' value='KOR' onClick='setKor()'>\
    <input type='button' value='ENG' onClick='setEng()'>\
    </div>\
    </div>\
    <div class='report_title'>\
        <div class='title_eng'><p>STUDENT REPORT</p></div>\
    </div>\
    <div class='name-eng'>" + name + "</div>\
    <div class='description'>\
        <p>The student above has successfully completed</p>\
        <p>the course of CodersHigh.</p>\
    </div>\
    <div class='course'>\
        <div>\
            <div class='course-spacing'>Course : <span class='word-spacing'>" + course + "</span></div>\
        </div>\
        <div>\
            <div class='period-spacing'>Period : <span class='word-spacing'>" + period + "</span></div>\
        </div>\
        <div>\
            <div>Instructor : </span><span class='word-spacing-eng'>" + instructor + "</span></div>\
        </div>\
    </div>\
    <div class='spacing'></div>\
    <div class='report-detail'>Detailed Report</div>\
    <div class='detail-content'>\
        <div>App Name : " + appName + "</div>\
        <div>Partner : " + partner + " </div>\
    </div>\
    ";
    document.getElementById("certificateForm").innerHTML = code;
}

function fillAppIconEng() {
  var content = {};
  var index_content = 0;
  for (index_content = 0; index_content < contents.length; index_content++) {
      var content_temp = contents[index_content];
      if (content_temp.lang === "en") {
          content = content_temp.content;
      }
  }

  console.log(content);

  var appName = content.appName;
  var partner = content.partner;
  var appIntro = content.appIntro;
  var testPeriod = content.testPeriod;
  var testScore = content.testScore;
  var appStore = content.appStore;
  var website = content.website;
  var sourceCode = content.sourceCode;

  var appIcon = content.appIcon;

  var code = "<div class='container spacing-md'>\
      <div class='title'>\
          <h3>App Information</h3>\
      </div>\
      <div class='row'>\
          <div class='width-40'>\
              <img src='resource/appImage.png'>\
          </div>\
          <div class='width-60'>\
              <div class='spacing-xs'>\
                  <img src='resource/appIcon.png' style='width:150px; border-radius:25%;'>\
                  <h2>" + appName + "</h2>\
                  <p>\
                  " + appIntro + "\
                  </p>\
                  <a href='" + appStore + "'>\
                      <img src='../../../../commons/goToAppStore.png' class='gotoapp' />\
                  </a>\
              </div>\
              <h4>Project Website : <a href='" + website + "'>" + website + "</a></h4>\
              <h4>Source Code : <a href='" + sourceCode + "'>" + sourceCode + "</a></h4>\
          </div>\
      </div>\
  </div>\
";

var code2 = "<div class='container spacing-md'>\
    <div class='title'>\
        <h3>App Information</h3>\
    </div>\
    <div class='row'>\
        <div class='width-40'>\
            <img src='resource/appImage.png'>\
        </div>\
        <div class='width-60'>\
            <div class='spacing-xs'>\
                <h2>" + appName + "</h2>\
                <p>\
                " + appIntro + "\
                </p>\
                <a href='" + appStore + "'>\
                    <img src='../../../../commons/goToAppStore.png' class='gotoapp' />\
                </a>\
            </div>\
            <h4>Project Website : <a href='" + website + "'>" + website + "</a></h4>\
            <h4>Source Code : <a href='" + sourceCode + "'>" + sourceCode + "</a></h4>\
        </div>\
    </div>\
</div>\
";



  if (appIcon === ""){
    document.getElementById("appIcon").innerHTML = code2;
  } else {
    document.getElementById("appIcon").innerHTML = code;

  }


}


function fillCertificateForm2Eng() {
  var content = {};
  var index_content = 0;
  for (index_content = 0; index_content < contents.length; index_content++) {
      var content_temp = contents[index_content];
      if (content_temp.lang === "en") {
          content = content_temp.content;
      }
  }

  console.log(content);

  var video = content.video;

  var code = "  <div class='container spacing-md'>\
        <div class='title spacing-sm'>\
            <h3>Presentation Video</h3>\
        </div>\
        <div class='centered'>\
            <iframe width='560' height='315' src='" + video + "' frameborder='0' gesture='media' allow='encrypted-media' allowfullscreen></iframe>\
        </div>\
    </div>\
    <div class='container spacing-md'>\
        <div class='title spacing-sm'>\
            <h3>Contribution</h3>\
        </div>\
        <div class='centered'>\
            <img src='resource/contribute.png' style='width:40%'' />\
        </div>\
    </div>\
";

  document.getElementById("certificateForm2").innerHTML = code;

}

function fillCertificateForm3Eng() {
  var content = {};
  var index_content = 0;
  for (index_content = 0; index_content < contents.length; index_content++) {
      var content_temp = contents[index_content];
      if (content_temp.lang === "en") {
          content = content_temp.content;
      }
  }

  console.log(content);

  var issueCreated = content.issueCreated;
  var issueClosed = content.issueClosed;

  var code = "<div class='container spacing-md'>\
    <div class='title'>\
      <h3>Team Project Working</h3>\
    </div>\
    <div class='content'>\
      <h4>Issue Created</h4>\
    </div>\
    <div class='content spacing-sm'>\
      <img src='resource/issueCreated.png' style='width:80%''/>\
    </div>\
    <div class='content'>\
      <h4>Issue Closed</h4>\
    </div>\
    <div class='content'>\
      <img src='resource/issueClosed.png' style='width:80%'/>\
    </div>\
  </div>\
  ";

  var code2 = "<div class='container spacing-md'>\
    <div class='title'>\
      <h3>Team Project Working</h3>\
    </div>\
    <div class='content'>\
      <h4>Issue Created</h4>\
    </div>\
    <div class='content spacing-sm'>\
      <img src='resource/issueCreated.png' style='width:80%''/>\
    </div>\
    <div class='content'>\
      <h4>Issue Closed</h4>\
    </div>\
    <div class='content'>\
    </div>\
  </div>\
  ";

  var code3 = "<div class='container spacing-md'>\
    <div class='title'>\
      <h3>Team Project Working</h3>\
    </div>\
    <div class='content'>\
      <h4>Issue Created</h4>\
    </div>\
    <div class='content spacing-sm'>\
    </div>\
    <div class='content'>\
      <h4>Issue Closed</h4>\
    </div>\
    <div class='content'>\
      <img src='resource/issueClosed.png' style='width:80%'/>\
    </div>\
  </div>\
  ";

  var code4 = "<div class='container spacing-md'>\
    <div class='title'>\
      <h3>Team Project Working</h3>\
    </div>\
    <div class='content'>\
      <h4>Issue Created</h4>\
    </div>\
    <div class='content spacing-sm'>\
    </div>\
    <div class='content'>\
      <h4>Issue Closed</h4>\
    </div>\
    <div class='content'>\
    </div>\
  </div>\
  ";

  if (issueCreated === "" && issueClosed === ""){
    document.getElementById("certificateForm3").innerHTML = code4;
  } else if (issueCreated === "" && issueClosed === "true") {
    document.getElementById("certificateForm3").innerHTML = code3;
  } else if (issueCreated === "true" && issueClosed === "") {
    document.getElementById("certificateForm3").innerHTML = code2;
  } else if (issueCreated === "true" && issueClosed === "true"){
    document.getElementById("certificateForm3").innerHTML = code;
  }
}


function fillArticleCommitEng() {
  var content = {};
  var index_content = 0;
  for (index_content = 0; index_content < contents.length; index_content++) {
      var content_temp = contents[index_content];
      if (content_temp.lang === "en") {
          content = content_temp.content;
      }
  }

  console.log(content);

  var commit1 = content.commit1;
  var commit2 = content.commit2;
  var commit3 = content.commit3;

  var code = "<div class='container spacing-md'>\
      <div class='title'>\
          <h3>Noteworthy Commits</h3>\
      </div>\
      <div class='content'>\
          1. " + commit1 + "\
      </div>\
      <div class='content'>\
          2. " + commit2 + "\
      </div>\
      <div class='content'>\
          3. " + commit3 + "\
      </div>\
  </div>\
  ";

  document.getElementById("commit").innerHTML = code;
  if (commit1 === ""){
    document.getElementById("commit").style.display = "none";
  }


}



window.onload = function () {
    setKor();


    // $("#report_detail").load("detail/report_detail.html");
};

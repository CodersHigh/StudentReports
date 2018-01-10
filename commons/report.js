var contents = {};

function getContents() {
    var content_url = "content.json";

    $.support.cors = true;
    $.getJSON(content_url, function () {
        console.log("success");
    }).done(function (json) {
        console.log("second success");
        if (json && json.contents) {
            contents = json.contents;
            fillHeader();
            fillFooter();
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

function fillHeader() {

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
    var appImg = content.appImg;

    var code = "<div class='top'>\
    <div class='ribbon'>\
    </div>\
    <div class='num'>\
        No. " + report_no + "\
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
    <div class='container spacing-md'>\
        <div class='title'>\
            <h3>앱 정보</h3>\
        </div>\
        <div class='row'>\
            <div class='col-xs-5 centered'>\
                "+appImg+"\
                <img src='detail/"+appImg+"'>\
            </div>\
            <div class='col-xs-7 centered lefted'>\
                <div class='spacing-xs'>\
                    <img src='detail/radioApp.png'>\
                    <h2>영어 라디오 PRO</h2>\
                    <p>\
                        '영어 라디오 PRO - News & Talk'는<br>\
                        영어권 국가의 토크, 뉴스 위주의 라디오 채널을<br>\
                        모아놓은 간편한 라디오 앱입니다.\
                    </p>\
                    <a href='https://itunes.apple.com/kr/app/%EC%98%81%EC%96%B4-%EB%9D%BC%EB%94%94%EC%98%A4-pro-%EB%89%B4%EC%8A%A4-%ED%86%A0%ED%81%AC/id1217141104?mt=8'>\
                        <img src='../../../commons/goToAppStore.png' class='gotoapp' />\
                    </a>\
                </div>\
                <h4>프로젝트 웹사이트 : <a href='https://projectintheclass.github.io/DayFeel/'>https://projectintheclass.github.io/DayFeel/</a></h4>\
                <h4>소스 코드 : <a href='https://github.com/ProjectInTheClass/DayFeel'>https://github.com/ProjectInTheClass/DayFeel</a></h4>\
            </div>\
        </div>\
    </div>\
    <div class='container spacing-md'>\
        <div class='title spacing-sm'>\
            <h3>발표 동영상</h3>\
        </div>\
        <div class='centered'>\
            <iframe width='560' height='315' src='https://www.youtube.com/embed/MHSgo6I1Pec?rel=0' frameborder='0' gesture='media' allow='encrypted-media' allowfullscreen></iframe>\
        </div>\
    </div>\
    <div class='container spacing-md'>\
        <div class='title spacing-sm'>\
            <h3>참여도</h3>\
        </div>\
        <div class='centered'>\
            <img src='detail/contribute.png' style='width:40%'' />\
        </div>\
    </div>\
    <div class='container spacing-md'>\
        <div class='title'>\
            <h3>프로젝트 팀 작업 단계</h3>\
        </div>\
        <div class='subtitle'>\
            <h4>Issue Created</h4>\
        </div>\
        <div class='centered spacing-xs'>\
            <img src='detail/issue.png' style='width:80%''/>\
        </div>\
        <div class='subtitle'>\
            <h4>Issue Closed</h4>\
        </div>\
        <div class='centered'>\
            <img src='detail/issue.png' style='width:80%'/>\
        </div>\
    </div>\
    <div class='container spacing-md'>\
        <div class='title'>\
            <h3>Noteworthy Commits</h3>\
        </div>\
        <div class='noteworthy-commit'>\
            1. alert modify : <a href='https://github.com/ProjectInTheClass/DayFeel/commit/5585918baa295df7aa33f0ccd4172fc1b6b3e63d?diff=unified'>https://github.com/ProjectInTheClass/DayFeel/commit/5585918baa295df7aa33f0ccd4172fc1b6b3e63d?diff=unified</a>\
        </div>\
        <div class='noteworthy-commit'>\
            1. alert modify : <a href='https://github.com/ProjectInTheClass/DayFeel/commit/5585918baa295df7aa33f0ccd4172fc1b6b3e63d?diff=unified'>https://github.com/ProjectInTheClass/DayFeel/commit/5585918baa295df7aa33f0ccd4172fc1b6b3e63d?diff=unified</a>\
        </div>\
        <div class='noteworthy-commit'>\
        1. alert modify : <a href='https://github.com/ProjectInTheClass/DayFeel/commit/5585918baa295df7aa33f0ccd4172fc1b6b3e63d?diff=unified'>https://github.com/ProjectInTheClass/DayFeel/commit/5585918baa295df7aa33f0ccd4172fc1b6b3e63d?diff=unified</a>\
        </div>\
    </div>\
    <div class='container spacing-md'>\
        <div class='title'>\
            <h3>개발 학습 단계</h3>\
        </div>\
        <div class='subtitle'>\
            <h4>Swift 언어 퀴즈</h4>\
        </div>\
        <div class='test'>\
            시험일 : 2017년 9월 12일\
        </div>\
        <div class='centered'>\
            점수 : 100\
        </div>\
    </div>\
    ";
    document.getElementById("certificateForm").innerHTML = code;
}

function fillFooter() {

}

window.onload = function () {
    getContents();
    // $("#report_detail").load("detail/report_detail.html");
};

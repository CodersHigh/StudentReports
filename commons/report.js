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
    var partner = content.partner

    var code = "<div class='top'>\
    <div class='ribbon'>\
    </div>\
    <div class='num'>\
        No. " + report_no + "\
    </div>\
    </div>\
    <div class='title'>\
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

function fillFooter() {

}

window.onload = function () {
    getContents();
    $("#report_detail").load("detail/report_detail.html");
};

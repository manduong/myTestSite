myMain(
{
  "total": 105507,
  "page": 1,
  "pagesize": 100,
  "questions": [
    {
      "tags": [
        "javascript",
        "jquery",
        "html"
      ],
      "answer_count": 0,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6414827/timeline",
      "question_comments_url": "/questions/6414827/comments",
      "question_answers_url": "/questions/6414827/answers",
      "question_id": 6414827,
      "owner": {
        "user_id": 807067,
        "user_type": "unregistered",
        "display_name": "Barcino",
        "reputation": 1,
        "email_hash": "a4aec9f48b0281995da5b2223b3ac213"
      },
      "creation_date": 1308589530,
      "last_activity_date": 1308589530,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 6,
      "score": 0,
      "community_owned": false,
      "title": "Why does my checkbox return the wrong state?",
      "body": "<p>I'm really confused. I have the following:</p>\n\n<pre><code>&lt;input class=\"check-box\" \n  id=\"Data__Correct\" \n  name=\"Data.Correct\" \n  type=\"checkbox\" value=\"Data.Correct\" /&gt;\n</code></pre>\n\n<p>When I put a check in the checkbox and check with fiddler I see it's sending back:</p>\n\n<pre><code>Data.Correct    False\n</code></pre>\n\n<p>I thought it should be the other way around. What's happening?</p>\n"
    },
    {
      "tags": [
        "php",
        "javascript",
        "jquery",
        "html",
        "div"
      ],
      "answer_count": 2,
      "accepted_answer_id": 6414808,
      "favorite_count": 1,
      "question_timeline_url": "/questions/6414614/timeline",
      "question_comments_url": "/questions/6414614/comments",
      "question_answers_url": "/questions/6414614/answers",
      "question_id": 6414614,
      "owner": {
        "user_id": 798662,
        "user_type": "registered",
        "display_name": "Eric",
        "reputation": 161,
        "email_hash": "25601fc3740f83926598cc89dc604e5f"
      },
      "creation_date": 1308588228,
      "last_edit_date": 1308589468,
      "last_activity_date": 1308589468,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 31,
      "score": 0,
      "community_owned": false,
      "title": "Fairly easy JQuery Input Selection location problem",
      "body": "<p>I am having a problem with getting my JQuery javascript code to apply to the select box elements that it is supposed to. What's happening is that the select boxes are not following the actions that are specified in the javascript code. They are simply staying disabled and checked (see code below) instead of changing based on the first checkbox's selection.</p>\n\n<p>I believe it is a problem regarding how I specify the location of the select boxes in the javascript code, but I don't know how to go about fixing it. Then again, I could be wrong about that too.</p>\n\n<p>If you have any insight on this or can correct the code, please do! Cheers.</p>\n\n<hr>\n\n<h2>HTML:</h2>\n\n<pre><code>&lt;div class=\"medium_box\"&gt;\n    &lt;form name=\"searchform\" class=\"FECKsearch\" method=\"get\" onSubmit=\"return dosearch();\"&gt;\n        &lt;input name=\"s\" id=\"searchBox\" class=\"input\" type=\"text\" value=\"\" onfocus=\"myFocusHandler(this);\" onblur=\"myBlurHandler(this);\" size=\"18\" maxlength=\"50\"&gt;\n        &lt;input type=\"submit\" name=\"searchsubmit\" class=\"button\" value=\"Go\" /&gt;\n\n        &lt;span class=\"searcher\"&gt;International: &lt;input type=\"checkbox\" id=\"International\" checked=\"yes\"&gt;&lt;/input&gt;&lt;/span&gt;\n        &lt;span class=\"searcher1\"&gt;Americas: &lt;input type=\"checkbox\" id=\"Americas\" disabled checked=\"yes\"&gt;&lt;/input&gt;&lt;/span&gt;\n        &lt;span class=\"searcher1\"&gt;Europe: &lt;input type=\"checkbox\" id=\"Europe\" disabled checked=\"yes\"&gt;&lt;/input&gt;&lt;/span&gt;\n        Asia: &lt;input type=\"checkbox\" id=\"Asia\" disabled checked=\"yes\"&gt;&lt;/input&gt;\n    &lt;/form&gt; \n&lt;/div&gt;\n</code></pre>\n\n<h2>Javascript:</h2>\n\n<pre><code>$('#International').click(function() {\nvar paramChangeBoxes = $('input:checkbox');\nif ($(this).is(':checked')) {\n    $('#Americas').attr('checked', 'checked');\n    $('#Americas').attr('disabled', 'disabled');\n    $('#Europe').attr('checked', 'checked');\n    $('#Europe').attr('disabled', 'disabled');\n    $('#Asia').attr('checked', 'checked');\n    $('#Asia').attr('disabled', 'disabled');\n}\nelse {\n    paramChangeBoxes.removeAttr('disabled');\n    $('#Americas').removeAttr('disabled');\n    $('#Europe').removeAttr('disabled');\n    $('#Asia').removeAttr('disabled');\n\n    }\n});\n</code></pre>\n\n<hr>\n\n<h1>Update &amp; Solution:</h1>\n\n<p>Cheers to <a href=\"http://stackoverflow.com/users/763228/john\">John</a> for the code <code>$('#International').live(\"click\",function() {</code> which corrected the error of the JQuery code not functioning. Apparently if you are importing the code from a remote file you must include the \"live\" portion inside of your coding.</p>\n\n<p>Thanks again John!</p>\n"
    },
    {
      "tags": [
        "javascript",
        "jquery",
        "html",
        "file-upload"
      ],
      "answer_count": 2,
      "favorite_count": 0,
      "bounty_closes_date": 1308660760,
      "bounty_amount": 50,
      "question_timeline_url": "/questions/6296451/timeline",
      "question_comments_url": "/questions/6296451/comments",
      "question_answers_url": "/questions/6296451/answers",
      "question_id": 6296451,
      "owner": {
        "user_id": 393751,
        "user_type": "registered",
        "display_name": "ibhbuhbuhb",
        "reputation": 92,
        "email_hash": "2a06a2827b2baa70da6c7ac35acfcb5e"
      },
      "creation_date": 1307638388,
      "last_edit_date": 1308056144,
      "last_activity_date": 1308589363,
      "up_vote_count": 7,
      "down_vote_count": 0,
      "view_count": 212,
      "score": 7,
      "community_owned": false,
      "title": "problem in file upload",
      "body": "<p>I have the following markup:</p>\n\n<pre><code>  &lt;select multiple=\"multiple\" id=\"targetFilesList\"  style=\"width:200px;height:110px;\"&gt;\n   &lt;/select&gt;\n   &lt;input type=\"button\" value=\"Get\" id=\"btnGet\" /&gt;\n</code></pre>\n\n<p>and following javascript:</p>\n\n<pre><code>    $(function()\n    {\n        $('#btnGet').click(function()\n        {\n            var fileupload = $(\"&lt;input type='file' name='filetoupload' style='visibility:hidden;'/&gt;\");\n            $('body').append(fileupload);\n\n            fileupload[0].onchange = function()\n            {\n                $('#targetFilesList').append('&lt;option &gt;' + fileupload.val() + '&lt;/option&gt;');\n                return false;\n            }\n            fileupload.click();\n        });\n    });\n</code></pre>\n\n<p>Scenario is that i have to upload multiple files and once user has chosen the file to be uploaded i have to show the file name to user.Then,on submitting the form i will upload all the files.For this,on clicking the get button i am adding a fileupload control dynamically\nand initialise onchange event of the fileupload control just added. The problem in chrome 12 on clicking get button fileupload control does not get opened but in firefox4 and ie8 it is working.\nAny idea why?</p>\n"
    },
    {
      "tags": [
        "php",
        "javascript",
        "facebook",
        "twitter",
        "share"
      ],
      "answer_count": 0,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6414782/timeline",
      "question_comments_url": "/questions/6414782/comments",
      "question_answers_url": "/questions/6414782/answers",
      "question_id": 6414782,
      "owner": {
        "user_id": 807063,
        "user_type": "unregistered",
        "display_name": "ponens",
        "reputation": 6,
        "email_hash": "28f14a601696f114e84c5be712032c73"
      },
      "creation_date": 1308589336,
      "last_activity_date": 1308589336,
      "up_vote_count": 1,
      "down_vote_count": 0,
      "view_count": 3,
      "score": 1,
      "community_owned": false,
      "title": "Provide link/Redirect after a 'Like' or 'Share' on Facebook or a 'Share' on Twitter",
      "body": "<p>basically what I want to do is forward people to a download link once they either 'like' my page on Facebook or post a link of the page to their profile (whatever is easier) and something similar for Twitter.</p>\n\n<p>I have seen some bands do this when promoting a free download — to download the new song you must post this to your profile etc.</p>\n\n<p>Anybody know how I could go about this? (This isn't a 'can you do it for me' question, I just need a point in the right direction regarding API's or any examples) </p>\n\n<p>Thanks.</p>\n"
    },
    {
      "tags": [
        "javascript",
        "jquery"
      ],
      "answer_count": 8,
      "accepted_answer_id": 6412781,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6412607/timeline",
      "question_comments_url": "/questions/6412607/comments",
      "question_answers_url": "/questions/6412607/answers",
      "question_id": 6412607,
      "owner": {
        "user_id": 256439,
        "user_type": "registered",
        "display_name": "Sandra Schlichting",
        "reputation": 1327,
        "email_hash": "c4b17df9c9b2f33a96eb84f92054f708"
      },
      "creation_date": 1308579341,
      "last_edit_date": 1308586824,
      "last_activity_date": 1308589242,
      "up_vote_count": 2,
      "down_vote_count": 0,
      "view_count": 67,
      "score": 2,
      "community_owned": false,
      "title": "Passing argument to function. What's wrong?",
      "body": "<p>In this <a href=\"http://jsfiddle.net/littlesandra88/EcCTx/\" rel=\"nofollow\">jsFiddle</a></p>\n\n<p>am I trying to pass an argument to a function, but it doesn't receive the argument or it isn't executed.</p>\n\n<pre><code>&lt;a href=\"javascript:addRemove('7249');\"&gt;Details&lt;/a&gt;\n</code></pre>\n\n<p>JQuery</p>\n\n<pre><code>$(document).ready(function() {\n\n    function addRemove(u) {\n    alert(u);\n    }\n\n});\n</code></pre>\n\n<p>Any ideas what's wrong and how to fix it?</p>\n"
    },
    {
      "tags": [
        "c#",
        "javascript",
        "matlab"
      ],
      "answer_count": 0,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6414755/timeline",
      "question_comments_url": "/questions/6414755/comments",
      "question_answers_url": "/questions/6414755/answers",
      "question_id": 6414755,
      "owner": {
        "user_id": 662770,
        "user_type": "registered",
        "display_name": "shahar_m",
        "reputation": 291,
        "email_hash": "4590affff8ab7bda7cbc2a3d766f02bd"
      },
      "creation_date": 1308589121,
      "last_activity_date": 1308589121,
      "up_vote_count": 1,
      "down_vote_count": 0,
      "view_count": 9,
      "score": 1,
      "community_owned": false,
      "title": "Convert Matlab Fuzzy Logic toolbox fis file to c# / c++ / javascript",
      "body": "<p>I have a Matlab program that is partially relies on Matlab's Fuzzy logic toolbox, which I want to convert to c# program (and later on to objective-c, but let's keep this for later).\nIs ther any means to convert my fuzzy logic fis file into c# (or c++, or maybe even javascript)?</p>\n\n<p>P.S. I know the <code>deploytool</code> can convert my program to exe, but I don't want to rely on <code>matlab runtime</code> component and dlls but to make it a complete c# (or c++) program.</p>\n"
    },
    {
      "tags": [
        "javascript",
        "html5",
        "browser",
        "cross-browser"
      ],
      "answer_count": 2,
      "accepted_answer_id": 5560986,
      "favorite_count": 3,
      "question_timeline_url": "/questions/5306132/timeline",
      "question_comments_url": "/questions/5306132/comments",
      "question_answers_url": "/questions/5306132/answers",
      "question_id": 5306132,
      "owner": {
        "user_id": 471795,
        "user_type": "registered",
        "display_name": "kanaka",
        "reputation": 3994,
        "email_hash": "b2bd81c28bcafeea19ac72e554859ec0"
      },
      "creation_date": 1300148053,
      "last_edit_date": 1308589105,
      "last_activity_date": 1308589105,
      "up_vote_count": 6,
      "down_vote_count": 0,
      "view_count": 274,
      "score": 6,
      "community_owned": false,
      "title": "Translate Javascript keyCode into charCode for non-U.S. keyboard layout (i.e. azerty)",
      "body": "<p>Quick background:</p>\n\n<ul>\n<li>when a key is pressed in a browser, three events are generated: <strong>keyDown</strong>, <strong>keyPress</strong> and <strong>keyUp</strong>.</li>\n<li><strong>keyDown</strong> and <strong>keyUp</strong> have a <strong>keyCode</strong> property which is approximately the physical key pressed.</li>\n<li><strong>keyPress</strong> also has <strong>charCode</strong> property set which takes into account modifier keys and keyboard layout (A and a have same keyCode but a different charCode).</li>\n<li>all three events have properties that indicate which modifier keys were pressed during those events.</li>\n</ul>\n\n<p>I'm the main <a href=\"https://github.com/kanaka/noVNC\" rel=\"nofollow\">noVNC</a> developer and I have a tough problem: noVNC needs the translated <strong>charCode</strong> value without using the <strong>keyPress</strong> event for the following reasons:</p>\n\n<ul>\n<li>noVNC needs to send the keyDown and keyUp events separately to the VNC server (otherwise it's not a completely functional VNC client).</li>\n<li>more importantly, noVNC needs to prevent the default keyboard actions while connected which means calling the <strong>preventDefault()</strong> method of the <strong>keyDown</strong> event. This has the side-effect of also preventing the <strong>keyPress</strong> event from firing.</li>\n</ul>\n\n<p>Due to differences in keyboard layouts (i.e. different keyCode to charCode mappings) I've determine that noVNC will need a lookup table for different keyboard layouts.</p>\n\n<p><strong>But here is the real problem:</strong> on alternate layouts, some different physical keys have the <strong>SAME</strong> keyCode. For example, with an <strong>azerty</strong> (French) keyboard layout the '-' (dash) and '_' underscore keys both generate keyCode 189. Ack!!!</p>\n\n<p>So ... how do I get proper keyCode to charCode mapping and prevent default browser actions at the same time?</p>\n\n<p>BTW, I suspect the solution to this will be applicable to other interactive web applications and HTML5 games since you often want to be able to know full information about the key pressed without triggering any additional browser response to that keypress.</p>\n\n<p>Useful links:</p>\n\n<ul>\n<li><a href=\"http://kanaka.github.com/noVNC/noVNC/tests/keyboard.html\" rel=\"nofollow\">Here</a> is an useful test page that show the three events and some other useful properties.</li>\n<li><a href=\"http://unixpapa.com/js/key.html\" rel=\"nofollow\">Summary</a> of the crazy state of key events in Javascript (thanks @Tim)</li>\n<li>Quirksmode <a href=\"http://www.quirksmode.org/js/keys.html\" rel=\"nofollow\">Detecting keystrokes</a></li>\n<li>Quirksmode <a href=\"http://www.quirksmode.org/dom/events/tests/keys.html\" rel=\"nofollow\">Events - key events</a></li>\n<li><a href=\"https://github.com/kanaka/noVNC/issues/#issue/21\" rel=\"nofollow\">noVNC issue</a> with more discussion of the problem.</li>\n</ul>\n\n<p><strong>Solution</strong>: see my post below.</p>\n"
    },
    {
      "tags": [
        "javascript",
        "ruby-on-rails"
      ],
      "answer_count": 1,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6413951/timeline",
      "question_comments_url": "/questions/6413951/comments",
      "question_answers_url": "/questions/6413951/answers",
      "question_id": 6413951,
      "owner": {
        "user_id": 51382,
        "user_type": "registered",
        "display_name": "willcodejavaforfood",
        "reputation": 12699,
        "email_hash": "d5c948086776fc91b4c7abff56bb7672"
      },
      "creation_date": 1308584996,
      "last_activity_date": 1308588759,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 17,
      "score": 0,
      "community_owned": false,
      "title": "How do I update my model object before a create/update?",
      "body": "<p>It's me the big rails newbie. I have another problem.</p>\n\n<p>This is my partial for _care_point.html.erb</p>\n\n<pre><code>&lt;div id='&lt;%=dom_id(care_point) %&gt;' class='draggable node_chin'&gt;\n  &lt;div id=&lt;%=\"node_#{care_point.id}\" %&gt; class='node'&gt;&lt;%= care_point.body %&gt;\n  &lt;/div&gt;\n  &lt;textarea class='node_input'&gt;&lt;%= care_point.body %&gt;&lt;/textarea&gt;\n  &lt;%= link_to 'Close', [care_map, care_point], :method =&gt; :post, :remote =&gt; true, :class =&gt; 'close' %&gt;\n  &lt;%= link_to 'Delete', [care_map, care_point], :confirm =&gt; \"Are you sure?\", :method =&gt; :delete, :remote =&gt; true, :class =&gt; 'delete' %&gt;\n&lt;/div&gt;\n</code></pre>\n\n<p>When I click the Close link the request is sent to the server as expected. All the fields are null though. How do I make sure that my model object is kept updated before it is sent to the server? Do I have to use the form functionality or can I just update it with Javascript somehow?</p>\n\n<p>Cheers</p>\n"
    },
    {
      "tags": [
        "javascript",
        "jquery",
        "ajax",
        "jquery-ajax"
      ],
      "answer_count": 1,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6414530/timeline",
      "question_comments_url": "/questions/6414530/comments",
      "question_answers_url": "/questions/6414530/answers",
      "question_id": 6414530,
      "owner": {
        "user_id": 484082,
        "user_type": "registered",
        "display_name": "blasteralfred",
        "reputation": 505,
        "email_hash": "cd867e89325fe74445707fb6b4364be8"
      },
      "creation_date": 1308587719,
      "last_edit_date": 1308588455,
      "last_activity_date": 1308588636,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 45,
      "score": 0,
      "community_owned": false,
      "title": "Change background using Javascript - AJAX - jQuery",
      "body": "<p>I have a table as below;</p>\n\n<pre><code>&lt;table style=\"width: 100%; border: solid 1px #666600; min-width: 800px\" cellpadding=\"0\" cellspacing=\"0\"&gt;\n&lt;tr&gt;\n&lt;td id=\"aaa\"&gt;&amp;nbsp;&lt;/td&gt;\n&lt;td class=\"content\" &gt;&amp;nbsp;&lt;/td&gt;\n&lt;td class=\"content\" &gt;&amp;nbsp;&lt;/td&gt;\n&lt;td class=\"content\" &gt;&amp;nbsp;&lt;/td&gt;\n&lt;td class=\"content\" &gt;&amp;nbsp;&lt;/td&gt;\n&lt;td class=\"content\" &gt;&amp;nbsp;&lt;/td&gt;\n&lt;td class=\"content\" &gt;&amp;nbsp;&lt;/td&gt;\n&lt;td id=\"bbb\"&gt;&amp;nbsp;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;&amp;nbsp;&lt;/td&gt;\n&lt;td class=\"title\" &gt;&amp;nbsp;&lt;/td&gt;\n&lt;td class=\"title\" &gt;&amp;nbsp;&lt;/td&gt;\n&lt;td class=\"title\" &gt;&amp;nbsp;&lt;/td&gt;\n&lt;td class=\"title\" &gt;&amp;nbsp;&lt;/td&gt;\n&lt;td class=\"title\" &gt;&amp;nbsp;&lt;/td&gt;\n&lt;td class=\"title\" &gt;&amp;nbsp;&lt;/td&gt;\n&lt;td&gt;&amp;nbsp;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;/table&gt;\n</code></pre>\n\n<p>I am using jquery ajax and i have script as below;</p>\n\n<pre><code>$(document).ready( function() {\nvar i = 1;\n$.ajax({\n  type: 'POST',\n  url: 'ajax.php',\n  data: 'id=' + i,\n  dataType: 'json',\n  cache: false,\n  success: function(result) {\n    $('.title').each(function(index){\n      values = result[index].split('*');\n      indexa = values[0];\n      indexb = values[1];\n      if((result[index])){\n        $(this).html(indexb);\n      }else{\n        $(this).html(\"&amp;nbsp;\");\n      }\n    });\n  },\n  });\n});\n</code></pre>\n\n<p>The php file will return <code>[\"data1*abc\",\"data2*abc\",\"data3*abc\",\"data4*abc\",\"data5*abc\",\"data6*abc\"]</code> for i=1, <code>[\"data7*abc\",\"data8*abc\",\"data9*abc\",\"data10*abc\",\"data11*abc\",\"data12*abc\"]</code> for i=2 etc etc.. The text in <code>class=\"title\"</code> changes accordingly with respect to the data, as <code>abc</code> or whatever it is..</p>\n\n<p>You can see another cell above every title cell having <code>class=\"content\"</code>. I have a php file, <code>ajax2.php</code>, which will return an image name with respect to a <code>$_POST[\"data1\"]</code> and <code>$_POST[\"data2\"]</code>. The <code>$_POST[\"data1\"]</code> portion should have value <code>indexa</code> and <code>$_POST[\"data2\"]</code> portion should have value <code>indexb</code> from javascript for each ajax request. The images are placed in images folder and the data returned by php file will be only <code>image_name.extension</code>.</p>\n\n<p>In short, I want to change the background image of content cell above title cell to change when data / text in corresponding title cell changes. Anybody tell me how to do the AJAX request and change background image (change background image url).</p>\n\n<p>I think it will be something like;</p>\n\n<p><code>$(.content).css({ 'background-image':'url(images/' + imagename });</code></p>\n\n<p>You can see my fiddle <a href=\"http://jsfiddle.net/blasteralfred/BFht7/\" rel=\"nofollow\"><strong>here</strong></a></p>\n\n<p>Thanks in advance..</p>\n"
    },
    {
      "tags": [
        "javascript"
      ],
      "answer_count": 3,
      "accepted_answer_id": 4047114,
      "favorite_count": 0,
      "question_timeline_url": "/questions/4047072/timeline",
      "question_comments_url": "/questions/4047072/comments",
      "question_answers_url": "/questions/4047072/answers",
      "question_id": 4047072,
      "owner": {
        "user_id": 457827,
        "user_type": "registered",
        "display_name": "Johnson",
        "reputation": 304,
        "email_hash": "1ce4f00aae1dbed39c2899dbd85e4169"
      },
      "creation_date": 1288299036,
      "last_activity_date": 1308588573,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 70,
      "score": 0,
      "community_owned": false,
      "title": "JS: setInterval and blur.",
      "body": "<p>I have this:</p>\n\n<pre><code>$(window).blur(function() {\n    setInterval(function() {\n        $.ajax({\n            type: \"POST\",\n            url: \"imback.php\",\n            data: {\n                mode: 'ajax',\n                getUpdates: 'auto',\n            },\n            success: function(msg){\n                document.title = msg + titleOrig;\n            }\n        });\n    }, 35000);\n</code></pre>\n\n<p>Works fine.</p>\n\n<p>Although, if you have been blur, and then when you focus back, it will keep making the ajax call, it doesnt stop sending ajax call after interval 35 seconds. </p>\n\n<p>How can i fix this?\n    })</p>\n"
    },
    {
      "tags": [
        "javascript",
        "xml"
      ],
      "answer_count": 2,
      "favorite_count": 0,
      "question_timeline_url": "/questions/4272538/timeline",
      "question_comments_url": "/questions/4272538/comments",
      "question_answers_url": "/questions/4272538/answers",
      "question_id": 4272538,
      "owner": {
        "user_id": 519506,
        "user_type": "unregistered",
        "display_name": "Erin",
        "reputation": 6,
        "email_hash": "dcc375d4184c9ce18bedc0db1391cb2f"
      },
      "creation_date": 1290641828,
      "last_edit_date": 1308588407,
      "last_activity_date": 1308588407,
      "up_vote_count": 1,
      "down_vote_count": 0,
      "view_count": 398,
      "score": 1,
      "community_owned": false,
      "title": "How can I parse XML in javascript in both IE and firefox?",
      "body": "<p>I'm trying to write a single piece of code to parse javascript in both IE and firefox.</p>\n\n<p>The following works in IE, and functions without complaining in firefox</p>\n\n<pre><code>function XmlDom(sXml){\n    var oXml;\n    if (window.ActiveXObject) {\n        // ie\n        oXml = new ActiveXObject(\"Microsoft.XMLDOM\");\n        oXml.resolveExternals = false;\n        oXml.async = false;\n        oXml.loadXML(sXml);\n    }\n    else if (window.DOMParser){\n\n        var parser = new DOMParser(); \n        oXml = parser.parseFromString(sXml, \"text/xml\");\n\n    }\nreturn oXml\n}\n</code></pre>\n\n<p>The following works in IE, but gives errors (because childNodes doesn't exist) under Firefox</p>\n\n<pre><code>var oXml = XmlDom(sourceXML);\nvar listHtml = \"\";\nif (oXml.firstChild != null) {\n    var childNodes = null;\n    try {\n        childNodes = oXml.lastChild.lastChild.firstChild.childNodes;\n    }\n    if (childNodes != null &amp;&amp; childNodes.length &gt; 0) {\n\n        for (var i = 0; i &lt; childNodes.length; i++) {\n\n            var vehicleName = NodeText(SelectSingleNode(childNodes[i], 'VehicleName', 'VehicleName'));\n            var vehicleId = NodeText(SelectSingleNode(childNodes[i], 'VehicleId', 'VehicleId'));\n\n        }\n    }\n}\n</code></pre>\n\n<p>Using jquery gives me correct behavior under firefox, but doesn't quite work in IE (it finds the correct number of vehicles, but each one has a null id and name)</p>\n\n<pre><code> $(sourceXml).find(\"Table1\").each(function() {\n        var vehicleId = $(this).find(\"VehicleId\").text();\n        var vehicleName = $(this).find(\"VehicleName\").text();\n    });\n</code></pre>\n\n<p>I firmly believe that both these approaches <em>should</em> work. But something is going wrong. I'd love a hand.</p>\n\n<pre><code>&lt;?xml version=\"1.0\" encoding=\"utf-16\"?&gt;\n&lt;DataSet&gt;\n  &lt;xs:schema id=\"NewDataSet\" xmlns=\"\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\"     xmlns:msdata=\"urn:schemas-microsoft-com:xml-msdata\" xmlns:msprop=\"urn:schemas-microsoft-com:xml-msprop\"&gt;\n    &lt;xs:element name=\"NewDataSet\" msdata:IsDataSet=\"true\" msdata:UseCurrentLocale=\"true\"&gt;\n      &lt;xs:complexType&gt;\n        &lt;xs:choice minOccurs=\"0\" maxOccurs=\"unbounded\"&gt;\n          &lt;xs:element name=\"Table1\"&gt;\n            &lt;xs:complexType&gt;\n              &lt;xs:sequence&gt;\n                &lt;xs:element name=\"VehicleId\" msprop:metadatacolumnname=\"VehicleId\" msprop:caption=\"VehicleId\" type=\"xs:string\" minOccurs=\"0\" /&gt;\n                &lt;xs:element name=\"VehicleName\" msprop:metadatacolumnname=\"VehicleName\" msprop:caption=\"VehicleName\" type=\"xs:string\" minOccurs=\"0\" /&gt;\n            &lt;xs:element name=\"SendAlarms\" msprop:metadatacolumnname=\"SendAlarms\" msprop:caption=\"SendAlarms\" type=\"xs:string\" minOccurs=\"0\" /&gt;\n          &lt;/xs:sequence&gt;\n        &lt;/xs:complexType&gt;\n      &lt;/xs:element&gt;\n    &lt;/xs:choice&gt;\n  &lt;/xs:complexType&gt;\n  &lt;/xs:element&gt;\n  &lt;/xs:schema&gt;\n  &lt;diffgr:diffgram xmlns:msdata=\"urn:schemas-microsoft-com:xml-msdata\"   xmlns:diffgr=\"urn:schemas-microsoft-com:xml-diffgram-v1\"&gt;\n&lt;NewDataSet&gt;\n  &lt;Table1 diffgr:id=\"Table11\" msdata:rowOrder=\"0\" diffgr:hasChanges=\"inserted\"&gt;\n    &lt;VehicleId&gt;8&lt;/VehicleId&gt;\n    &lt;VehicleName&gt;AIS Gate&lt;/VehicleName&gt;\n    &lt;SendAlarms&gt;False&lt;/SendAlarms&gt;\n  &lt;/Table1&gt;\n  &lt;Table1 diffgr:id=\"Table12\" msdata:rowOrder=\"1\" diffgr:hasChanges=\"inserted\"&gt;\n    &lt;VehicleId&gt;82&lt;/VehicleId&gt;\n    &lt;VehicleName&gt;Amigos&lt;/VehicleName&gt;\n    &lt;SendAlarms&gt;False&lt;/SendAlarms&gt;\n  &lt;/Table1&gt; \n&lt;/NewDataSet&gt;\n&lt;/diffgr:diffgram&gt;\n&lt;/DataSet&gt;\n</code></pre>\n"
    },
    {
      "tags": [
        "javascript",
        "json",
        "apple",
        "dashcode"
      ],
      "answer_count": 0,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6414613/timeline",
      "question_comments_url": "/questions/6414613/comments",
      "question_answers_url": "/questions/6414613/answers",
      "question_id": 6414613,
      "owner": {
        "user_id": 706742,
        "user_type": "registered",
        "display_name": "Nero F. RoxXx",
        "reputation": 8,
        "email_hash": "bc2da610ac397822eeb3405b7718a9d9"
      },
      "creation_date": 1308588222,
      "last_activity_date": 1308588222,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 2,
      "score": 0,
      "community_owned": false,
      "title": "Using Dashcode's List Controller without their DataSource option",
      "body": "<p>I'm working on my own custom google calendar, so far i'm able to get everything to work, i've loaded all the data and everything works great, each event shows up on a select box.</p>\n\n<p>What i want to do now is to load each event name on the LIST part. How exactly can i do that? i'm very lost with it.</p>\n\n<p>I looked at the sample code that dashcode has for the list part but i really am lost with populating the list in real time, can somebody help me? i can provide more info as needed, thanks!</p>\n"
    },
    {
      "tags": [
        "javascript",
        "google-maps",
        "marker"
      ],
      "answer_count": 1,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6413244/timeline",
      "question_comments_url": "/questions/6413244/comments",
      "question_answers_url": "/questions/6413244/answers",
      "question_id": 6413244,
      "owner": {
        "user_id": 365251,
        "user_type": "registered",
        "display_name": "markzzz",
        "reputation": 1345,
        "email_hash": "586ed1e5c3543cf7c304861c1240efdf"
      },
      "creation_date": 1308581995,
      "last_edit_date": 1308583496,
      "last_activity_date": 1308588085,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 16,
      "score": 0,
      "community_owned": false,
      "title": "How to set the google-maps marker as it is showed on the original website",
      "body": "<p>Try to Search the first address on google maps, and click on it :</p>\n\n<p>it will show us a marker with a photo (if avaiable), description, and some links.\nI'd like to add the same marker in my web application.</p>\n\n<p>Which API I need to use? At the moment I just make my own string and append it :</p>\n\n<pre><code>var finestra='';\nfinestra += '&lt;div style=\"position:relative;width:200px;\"&gt;';\nfinestra += '&lt;div style=\"position:relative;float:left; color:#000000;\" class=canale&gt;';\nfinestra += 'Archimede&lt;br /&gt;Via Brennero,12&lt;br /&gt;38100 Trento(TN)&lt;br /&gt;c.+39 555555555';\nfinestra += '&lt;/div&gt;';\nfinestra += '&lt;/div&gt;';\n\nvar marker = createMarker(map.getCenter());\nmap.setCenter(new GLatLng(46.084989,11.118851), 16, G_NORMAL_MAP);\nmap.addOverlay(marker);\nmarker.openInfoWindowHtml(finestra);    \n</code></pre>\n\n<p>But I need the same marker as google maps show on the original website.\nIs it possible?</p>\n"
    },
    {
      "tags": [
        "javascript",
        "jquery",
        "internet",
        "internet-explorer-9",
        "explorer"
      ],
      "answer_count": 0,
      "favorite_count": 1,
      "question_timeline_url": "/questions/6414578/timeline",
      "question_comments_url": "/questions/6414578/comments",
      "question_answers_url": "/questions/6414578/answers",
      "question_id": 6414578,
      "owner": {
        "user_id": 807033,
        "user_type": "unregistered",
        "display_name": "Mario",
        "reputation": 1,
        "email_hash": "15116221263b5450dd8abff3cc7a8ea9"
      },
      "creation_date": 1308588053,
      "last_activity_date": 1308588053,
      "up_vote_count": 0,
      "down_vote_count": 1,
      "view_count": 14,
      "score": -1,
      "community_owned": false,
      "title": "Javascript slider not showing in IE9",
      "body": "<p>We have an automatic slider on this website, <a href=\"http://www.realcapfinancial.com\" rel=\"nofollow\">http://www.realcapfinancial.com</a> and it has been working on all browsers. IE9 doesnt seem to work. It comes up with and error, no object line 298... character 2 etc. I forget what it says but I can't check it again since I'm at work using a mac.</p>\n\n<p>Any help is perfect, thank you</p>\n"
    },
    {
      "tags": [
        "javascript",
        "node.js",
        "socket.io",
        "nowjs"
      ],
      "answer_count": 2,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6409944/timeline",
      "question_comments_url": "/questions/6409944/comments",
      "question_answers_url": "/questions/6409944/answers",
      "question_id": 6409944,
      "owner": {
        "user_id": 578963,
        "user_type": "registered",
        "display_name": "DasAntonym",
        "reputation": 53,
        "email_hash": "90d33a04aa3d2ba5230831650d449714"
      },
      "creation_date": 1308566372,
      "last_activity_date": 1308588014,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 21,
      "score": 0,
      "community_owned": false,
      "title": "NowJS manually initiating a new connection after a lost connection",
      "body": "<p>i have a case where clients connect to a node.js server running nowjs and remain connected for a fairly long time (about 30 minutes). on some browsers though the connection gets dropped after a while and the client disconnects.</p>\n\n<p>i implemented a disconnect handler on the client side like this:</p>\n\n<pre><code>now.core.on('disconnect', function () {\n    // we should reconnect here, maybe after a short timeout\n});\n</code></pre>\n\n<p>what i am unclear about is how exactly to trigger a reconnect. this might be something blatantly obvious to experienced users but i didn't manage to figure this out.</p>\n\n<p>the now.js script initializes on page load and after that i can use the now object, but i can't figure out how to repeat this process without reloading the page.</p>\n\n<p>thanks!</p>\n"
    },
    {
      "tags": [
        "javascript",
        "regex",
        "comma"
      ],
      "answer_count": 1,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6413444/timeline",
      "question_comments_url": "/questions/6413444/comments",
      "question_answers_url": "/questions/6413444/answers",
      "question_id": 6413444,
      "owner": {
        "user_id": 806905,
        "user_type": "unregistered",
        "display_name": "Frederick Thompson",
        "reputation": 11,
        "email_hash": "5698d4707354e0b9e4ba6f22a0be84d8"
      },
      "creation_date": 1308582827,
      "last_edit_date": 1308586491,
      "last_activity_date": 1308587996,
      "up_vote_count": 2,
      "down_vote_count": 0,
      "view_count": 61,
      "score": 2,
      "community_owned": false,
      "title": "Regex Comma Separated Emails",
      "body": "<p>I am trying to get this Regex statement to work</p>\n\n<p><code>^([_a-z0-9-]+(\\.[_a-z0-9-]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,3})+(\\s?[,]\\s?|$))+$</code></p>\n\n<p>for a string of comma separated emails in a <code>textbox</code> using <code>jQuery('#textbox').val();</code> which passes the values into the Regex statement to find errors for a string like:</p>\n\n<p><code>\"test@test.com, test1@test.com,test2@test.com\"</code></p>\n\n<p>But for some reason it is returning an error. I tried running it through <a href=\"http://regexpal.com/\" rel=\"nofollow\">http://regexpal.com/</a> but i'm unsure ?</p>\n\n<p><strong>NB:</strong> This is just a basic client-side test. I validate emails via the <code>MailClass</code> on the server-side using .NET4.0 - so don't jump down my throat re-this. The aim here is to eliminate simple errors.</p>\n\n<p><strong>Escaped Version:</strong> </p>\n\n<p><code>^([_a-z0-9-]+(\\\\.[_a-z0-9-]+)*@[a-z0-9-]+(\\\\.[a-z0-9-]+)*(\\\\.[a-z]{2,3})+(\\\\s?[,]\\\\s?|$))+$</code></p>\n"
    },
    {
      "tags": [
        "javascript",
        "javascript-library"
      ],
      "answer_count": 2,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6414240/timeline",
      "question_comments_url": "/questions/6414240/comments",
      "question_answers_url": "/questions/6414240/answers",
      "question_id": 6414240,
      "owner": {
        "user_id": 806937,
        "user_type": "unregistered",
        "display_name": "simplified.",
        "reputation": 1,
        "email_hash": "e30b781f0306f0b46f32b17733b8398d"
      },
      "creation_date": 1308586242,
      "last_edit_date": 1308586843,
      "last_activity_date": 1308587979,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 35,
      "score": 0,
      "community_owned": false,
      "title": "Constant Variables in Javascript",
      "body": "<p>I am trying to have some const global variables which I can use in the javascript and I came out with this code and picking up from some answers referred in SO. But it seems that I have a little mistake somewhere which I couldn't spot. Can someone help me with this?</p>\n\n<p>in testQuery.js</p>\n\n<pre><code>(function (window, undefined) {\n\n    var testQuery = function(obj) {\n        if (!(this instanceof testQuery)) {\n            return new testQuery(obj);\n        }\n    }\n\n    var MYGLOBALS = function() {\n        var globals = {\n            foo : \"bar\",\n            batz : \"blah\"           \n        }\n\n        return {\n            getValue : function(s) {\n                return globals[s];\n            }\n        }\n    }();\n\n    window.testQuery = testQuery;\n\n}) (window);\n</code></pre>\n\n<hr>\n\n<p>and in the html javascript tag i have this line of code.</p>\n\n<p>in testQuery.html file</p>\n\n<pre><code>&lt;html&gt;\n  &lt;head&gt;\n    &lt;script src=\"testQuery.js\"&gt;&lt;/script&gt;\n    &lt;script&gt;\n\n       function onClick() {\n\n             alert(MYGLOBALS.getValue(\"foo\"));\n       }\n\n    &lt;/script&gt;\n  &lt;/head&gt;\n\n  &lt;body&gt;\n\n      &lt;input type=\"button\" onclick=\"onClick()\"&gt;\n\n  &lt;/body&gt;\n\n&lt;/html&gt;\n</code></pre>\n"
    },
    {
      "tags": [
        "javascript",
        "internet-explorer-8",
        "frame",
        "hang",
        "google-chrome-frame"
      ],
      "answer_count": 0,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6414558/timeline",
      "question_comments_url": "/questions/6414558/comments",
      "question_answers_url": "/questions/6414558/answers",
      "question_id": 6414558,
      "owner": {
        "user_id": 467240,
        "user_type": "registered",
        "display_name": "mtyson",
        "reputation": 40,
        "email_hash": "acd22ce8d834f8548c4200bec5fe6c40"
      },
      "creation_date": 1308587934,
      "last_activity_date": 1308587934,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 5,
      "score": 0,
      "community_owned": false,
      "title": "In IE8 with Chrome Frame, after Download, App hangs",
      "body": "<p>Here's a strange one.  Throwing it out there to see if anyone has any thoughts.</p>\n\n<p>This problem only occurs with IE8 with Chrome Frame installed.  However, some machines with IE8 and chrome frame do <em>not</em> have the problem.</p>\n\n<p>When a user downloads a file, the app stops responding (the file is successfully downloaded).  Links still work, but all JS appears to be blocked.  If the user re-loads the browser, the app works fine, and re-downloading (even the same file) no longer causes the app to hang.</p>\n\n<p>I should add that only a small number of users have this issue (so its definitely something in the app causing the problem).  The problem seems to require: certain user, certain setup with IE8+chrome frame.</p>\n"
    },
    {
      "tags": [
        "java",
        "javascript",
        "xml",
        "regex",
        "parsing"
      ],
      "answer_count": 5,
      "accepted_answer_id": 3047464,
      "favorite_count": 0,
      "question_timeline_url": "/questions/3047391/timeline",
      "question_comments_url": "/questions/3047391/comments",
      "question_answers_url": "/questions/3047391/answers",
      "question_id": 3047391,
      "owner": {
        "user_id": 107721,
        "user_type": "registered",
        "display_name": "wojtek_z",
        "reputation": 20,
        "email_hash": "45e2bb34105769aaae7dbf841b37da84"
      },
      "creation_date": 1276621727,
      "last_activity_date": 1308587918,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 225,
      "score": 0,
      "community_owned": false,
      "title": "Parsing complex string using regex",
      "body": "<p>My regex skills are not very good and recently a new data element has thrown my parser into a loop</p>\n\n<p>Take the following string</p>\n\n<p>\"+USER=Bob Smith-GROUP=Admin+FUNCTION=Read/FUNCTION=Write\"</p>\n\n<p>Previously I had the following for my regex : [+\\\\-/]</p>\n\n<p>Which would turn the result into  </p>\n\n<p>USER=Bob Smith<br>\nGROUP=Admin<br>\nFUNCTION=Read<br>\nFUNCTION=Write<br>\nFUNCTION=Read  </p>\n\n<p>But now I have values with dashes in them which is causing bad output</p>\n\n<p>New string looks like \"+USER=Bob Smith-GROUP=Admin+FUNCTION=Read/FUNCTION=Write/FUNCTION=Read-Write\"</p>\n\n<p>Which gives me the following result , and breaks the key = value structure.</p>\n\n<p>USER=Bob Smith<br>\nGROUP=Admin<br>\nFUNCTION=Read<br>\nFUNCTION=Write<br>\nFUNCTION=Read<br>\nWrite  </p>\n\n<p>Can someone help me formulate a valid regex for handling this or point me to some key / value examples. Basically I need to be able to handle + - / signs in order to get combinations.</p>\n"
    },
    {
      "tags": [
        "javascript",
        "jquery",
        "jquery-plugins",
        "jqplot",
        "time-format"
      ],
      "answer_count": 0,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6414438/timeline",
      "question_comments_url": "/questions/6414438/comments",
      "question_answers_url": "/questions/6414438/answers",
      "question_id": 6414438,
      "owner": {
        "user_id": 576364,
        "user_type": "registered",
        "display_name": "mcbobo",
        "reputation": 3,
        "email_hash": "7c269209b6935ebf04de6171e6da80a5"
      },
      "creation_date": 1308587186,
      "last_edit_date": 1308587719,
      "last_activity_date": 1308587719,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 12,
      "score": 0,
      "community_owned": false,
      "title": "jQuery jqPlot library 12 hour Time Y-Axis Inversion issue",
      "body": "<p>I've started using jqPlot recently. The generated graphs look amazing and I love it. There are a few little things to learn here and there, but overall it's great.</p>\n\n<p>I'm using the stacked bar generation and came into a werid issue. Basically, I want a 12 hour time from hours 0 - 24 on the Y axis, days on the X axis, and plot seconds of a certain activity on the graph. But also, I want the days (midnight) to start at the top of the graph, and come to the bottom.</p>\n\n<p>I can flip the data easily with an inverse of the 'min' and 'max', but the issue arises when I try to flip the ticks; essentially, the \"time\".</p>\n\n<p>I have my series defaults set to a hidden axis:</p>\n\n<pre><code>seriesDefaults: {\n    renderer: $.jqplot.BarRenderer,\n    yaxis: 'y2axis'\n},\n</code></pre>\n\n<p>And I put a placeholder series ( with the values all 0's, eg: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] ) to associate with a separate yaxis to plot the date ticks:</p>\n\n<pre><code>series: [\n    { show: true, yaxis: 'yaxis', }\n],\n</code></pre>\n\n<p>I can flip the values by changing the min and max on the default y axis and hiding it:</p>\n\n<pre><code>y2axis:{\n    min: 24,\n    max: 0,\n    showTicks: false\n}\n</code></pre>\n\n<p>Then I set the ticks, and format them with the DateAxisRenderer:</p>\n\n<pre><code>yaxis:{\n    renderer:$.jqplot.DateAxisRenderer,\n    ticks: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24'],\n    tickOptions: { formatString: '%I:%M %p' }\n}\n</code></pre>\n\n<p>This creates a yaxis with the time's from 12:00 AM to 12:00PM back to 12:00 AM in that format. but in increasing order from the bottom of the graph.</p>\n\n<p>Obviously, flipping the min and max on the 'yaxis' would accomplish nothing, as there is only place holder values, and it only flips the values. How would I go about to flip the axis values so that the time goes (from the bottom) 24, 22, 20... etc, etc, ?</p>\n\n<p>Thanks for your help in advance.</p>\n"
    },
    {
      "tags": [
        "javascript",
        "jquery",
        "firefox"
      ],
      "answer_count": 6,
      "accepted_answer_id": 6414466,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6414376/timeline",
      "question_comments_url": "/questions/6414376/comments",
      "question_answers_url": "/questions/6414376/answers",
      "question_id": 6414376,
      "owner": {
        "user_id": 533617,
        "user_type": "unregistered",
        "display_name": "David19801",
        "reputation": 822,
        "email_hash": "cba0529762ef11ebc58637b537a42acd"
      },
      "creation_date": 1308586914,
      "last_activity_date": 1308587629,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 24,
      "score": 0,
      "community_owned": false,
      "title": "Can I see what jquery is sending to an external server?",
      "body": "<p>I am on a website...it has jquery and is sending some requests using javascript out to a php page.  </p>\n\n<p>Is their any way to see what data it is sending out from my computer and/or which URLs it is talking to?</p>\n\n<p>I am using firefox and can load software if their is any needed.</p>\n\n<p>EDIT - I have downloaded firebug and have the page loaded.  Any idea what option I need to select?</p>\n"
    },
    {
      "tags": [
        "javascript",
        "html",
        "text-editor",
        "textwrapping"
      ],
      "answer_count": 1,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6414473/timeline",
      "question_comments_url": "/questions/6414473/comments",
      "question_answers_url": "/questions/6414473/answers",
      "question_id": 6414473,
      "owner": {
        "user_id": 807019,
        "user_type": "unregistered",
        "display_name": "neutreno",
        "reputation": 1,
        "email_hash": "86e6ff8f75f9daef42d53b7f8002fd95"
      },
      "creation_date": 1308587382,
      "last_activity_date": 1308587609,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 17,
      "score": 0,
      "community_owned": false,
      "title": "How to cause live text wrap while image/element is being dragged, in javascript?",
      "body": "<p>I want to make a text editor which incorporates this sort of effect (see video). However, I have no idea how this would be possible with javascript.</p>\n\n<p><a href=\"http://www.youtube.com/watch?v=mYnj4Mz9g9g\" rel=\"nofollow\">http://www.youtube.com/watch?v=mYnj4Mz9g9g</a></p>\n\n<p>Any ideas would be amazing!</p>\n\n<p>Thanks</p>\n"
    },
    {
      "tags": [
        "javascript",
        "javascript-events"
      ],
      "answer_count": 4,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6414123/timeline",
      "question_comments_url": "/questions/6414123/comments",
      "question_answers_url": "/questions/6414123/answers",
      "question_id": 6414123,
      "owner": {
        "user_id": 540394,
        "user_type": "registered",
        "display_name": "jurchiks",
        "reputation": 50,
        "email_hash": "b12346cb9e2e217ae6741e6af3ee6852"
      },
      "creation_date": 1308585694,
      "last_edit_date": 1308585896,
      "last_activity_date": 1308587324,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 27,
      "score": 0,
      "community_owned": false,
      "title": "javascript trigger function on event from a script, not explicitly from html",
      "body": "<p>So I'm making a registration form ATM, I have it like I want it so far except the excess JavaScript code to check the values realtime (onmouseover, onmouseout, onblur etc.).<br>\nA small sample:  </p>\n\n<pre><code>&lt;tr&gt;\n    &lt;td&gt;\n        &lt;label for=\"name\"\n               onmouseover=\"fieldSelected('name', '', 3);\"\n               onmouseout=\"checkValue('name', '', 3);\"&gt;\n            Enter your name:\n        &lt;/label&gt;\n    &lt;/td&gt;\n    &lt;td&gt;\n        &lt;input type=\"text\"\n               id=\"name\"\n               name=\"name\"\n               onmouseover=\"fieldSelected('name', '', 3);\"\n               onmouseout=\"checkValue('name', '', 3);\"\n               onblur=\"checkValue('name', '', 3);\"&gt;\n    &lt;/td&gt;\n&lt;/tr&gt;\n</code></pre>\n\n<p>fieldSelected makes the field background yellow if the value of the specified element (first parameter) matches the second parameter (default value) or is shorter than third parameter.<br>\nYou mouseover the label or the input field and it changes the bg first to yellow, then to red (since you didn't input anything).<br>\ncheckValue changes the field background to either red or green depending on the value (same parameters).<br>\nYou enter something in the input field, switch to another field and it changes the background color.  </p>\n\n<p>Now, as you will probably notice, there's a LOT of JavaScript function calls right there (5 per each input/select field). It would be great if someone would know a way to attach those event triggers from another place (I don't usually code this dirty), not directly in the form like this and preferably to multiple IDs at once. I have jQuery here, but I'm really no expert in JavaScript.  </p>\n\n<p>Or maybe there's a simpler way to do this? I want that the field background color changes on all those events for maximum interactivity. Sure, it's nothing much when all the data goes to the server side but I just want it that way.</p>\n"
    },
    {
      "tags": [
        "javascript",
        "google-maps"
      ],
      "answer_count": 2,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6414093/timeline",
      "question_comments_url": "/questions/6414093/comments",
      "question_answers_url": "/questions/6414093/answers",
      "question_id": 6414093,
      "owner": {
        "user_id": 365251,
        "user_type": "registered",
        "display_name": "markzzz",
        "reputation": 1345,
        "email_hash": "586ed1e5c3543cf7c304861c1240efdf"
      },
      "creation_date": 1308585621,
      "last_edit_date": 1308586479,
      "last_activity_date": 1308587198,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 19,
      "score": 0,
      "community_owned": false,
      "title": "Why isn't this google maps loaded?",
      "body": "<p>This is my code :</p>\n\n<pre><code>&lt;script type=\"text/javascript\" src=\"http://maps.google.com/maps/api/js?sensor=true\"&gt;&lt;/script&gt;     \n&lt;script type=\"text/javascript\"&gt;\n    function load() {\n        if (GBrowserIsCompatible()) {\n            var map;\n            var location = new google.maps.LatLng(46.084989, 11.118851);\n\n            var stylez =\n            [\n              {\n                  featureType: \"all\",\n                  elementType: \"all\",\n                  stylers: [\n                  { saturation: -98 }\n                ]\n              }\n            ];\n\n            var mapOptions = {\n                zoom: 11,\n                center: location,\n                mapTypeControlOptions: {\n                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'myScale']\n                }\n            };\n\n            map = new google.maps.Map(document.getElementById(\"map_canvas\"), mapOptions);\n            var mapType = new google.maps.StyledMapType(stylez, { name: \"Grayscale\" });\n            map.mapTypes.set('myScale', mapType);\n            map.setMapTypeId('myScale')        \n        }\n    }\n\n    $(document).ready(function(){\n        load();\n    });\n&lt;/script&gt;\n\n\n&lt;div id=\"map_canvas\" style=\"width: 100%; height: 700px\"&gt;&lt;/div&gt;\n</code></pre>\n\n<p>but nothing is loaded. Where am I wrong? Removing GBrowserIsCompatible() it works, but it doesn't recognize the location.</p>\n"
    },
    {
      "tags": [
        "php",
        "javascript"
      ],
      "answer_count": 3,
      "accepted_answer_id": 6413910,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6413881/timeline",
      "question_comments_url": "/questions/6413881/comments",
      "question_answers_url": "/questions/6413881/answers",
      "question_id": 6413881,
      "owner": {
        "user_id": 734174,
        "user_type": "unregistered",
        "display_name": "Michael",
        "reputation": 41,
        "email_hash": "5f8a354d18429fa4d502de0b18ddaa5b"
      },
      "creation_date": 1308584712,
      "last_activity_date": 1308587057,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 29,
      "score": 0,
      "community_owned": false,
      "title": "Setting a maximum and minimum value for text box",
      "body": "<p>I own a canvas website and want my customers to be able to enter a custom length of the canvas within a set range.</p>\n\n<p>Say the range for the product is:</p>\n\n<ul>\n<li>Minimum: 10 cm </li>\n<li>Maximum: 200 cm</li>\n</ul>\n\n<p>Then in the text box they can enter any number between that range, but if they enter \"215\" then it should automatically go down to \"200\". Likewise if they enter \"7\" then it should automatically go up to \"10\"</p>\n"
    },
    {
      "tags": [
        "javascript",
        "xmlhttprequest",
        "google-weather-api"
      ],
      "answer_count": 1,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6413908/timeline",
      "question_comments_url": "/questions/6413908/comments",
      "question_answers_url": "/questions/6413908/answers",
      "question_id": 6413908,
      "owner": {
        "user_id": 766182,
        "user_type": "registered",
        "display_name": "user766182",
        "reputation": 6,
        "email_hash": "3e412d974a909f07ac9382b2d46cdf80"
      },
      "creation_date": 1308584819,
      "last_edit_date": 1308584942,
      "last_activity_date": 1308587049,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 14,
      "score": 0,
      "community_owned": false,
      "title": "Simple XMLHttpRequest (Google Weather)",
      "body": "<p>Hello I want to get xml from Google Weather</p>\n\n<pre><code>var xmlhttp;\n\nif (window.XMLHttpRequest)\n  {// code for IE7+, Firefox, Chrome, Opera, Safari\n  xmlhttp= new XMLHttpRequest();\n  }\nelse\n  {// code for IE6, IE5\n  xmlhttp=new ActiveXObject(\"Microsoft.XMLHTTP\");\n  }\n\n xmlhttp.open(\"GET\", \"http://www.google.com/ig/api?weather=london&amp;hl=en\", true);\n\nxmlhttp.send(null);\n\nxmlDoc=xmlhttp.responseXML;\n</code></pre>\n\n<p>It`s not working . Thanks</p>\n"
    },
    {
      "tags": [
        "javascript",
        "forms",
        "html5",
        "autocomplete",
        "localstorage"
      ],
      "answer_count": 3,
      "favorite_count": 0,
      "question_timeline_url": "/questions/5351143/timeline",
      "question_comments_url": "/questions/5351143/comments",
      "question_answers_url": "/questions/5351143/answers",
      "question_id": 5351143,
      "owner": {
        "user_id": 665929,
        "user_type": "unregistered",
        "display_name": "prabhat",
        "reputation": 1,
        "email_hash": "5de923d527dc4cd4cacbafb74d4c5d18"
      },
      "creation_date": 1300446824,
      "last_edit_date": 1308586981,
      "last_activity_date": 1308586981,
      "up_vote_count": 0,
      "down_vote_count": 2,
      "view_count": 286,
      "score": -2,
      "community_owned": false,
      "title": "how to create autocomplete forum using html5 local storage?",
      "body": "<p>Hi to all, I am new to programming. will you help me to write code for autocomplete text fields in a html form. I want to use local storage data.\nIf any time user will inter some data in text field, it will be stored in local storage. if next time when he enters data then, localstorage data related to that field will appear as popup(like mozila or chrome autocomplete).</p>\n\n<p>please provide me some guidelines</p>\n"
    },
    {
      "tags": [
        "javascript",
        "firefox",
        "browser"
      ],
      "answer_count": 1,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6413732/timeline",
      "question_comments_url": "/questions/6413732/comments",
      "question_answers_url": "/questions/6413732/answers",
      "question_id": 6413732,
      "owner": {
        "user_id": 806937,
        "user_type": "unregistered",
        "display_name": "simplified.",
        "reputation": 1,
        "email_hash": "e30b781f0306f0b46f32b17733b8398d"
      },
      "creation_date": 1308584011,
      "last_edit_date": 1308586969,
      "last_activity_date": 1308586969,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 46,
      "score": 0,
      "community_owned": false,
      "title": "Why won't this web page finish loading?",
      "body": "<p>If I run this code, why doesn't the page ever finish loading? It will always show connecting on my browser tab.</p>\n\n<p>It is a simple javascript which will prompt an alert box and change the entire document to the word testing.</p>\n\n<p>Javascript - testQuery.js</p>\n\n<pre><code>(function (window, undefined) {\n\nvar testQuery = function(obj) {\n        if (!(this instanceof testQuery)) {\n            return new testQuery(obj);\n        }\n}\n\n\ntestQuery.alertMessage = function () {\n        alert(\"alert\");\n    document.write(\"testing\");\n};\n\n   window.testQuery = testQuery;\n\n}) (window);\n</code></pre>\n\n<p>HTML - testQuery.html</p>\n\n<pre><code>&lt;html&gt;\n&lt;head&gt;\n\n&lt;script src=\"testQuery.js\"&gt;&lt;/script&gt;\n&lt;script&gt;\n\nfunction onClick() {\n\ntestQuery.alertMessage();\n\n}\n\n&lt;/script&gt;\n&lt;/head&gt;\n</code></pre>\n\n<p></p>\n\n<p></p>\n\n<p>\n</p>\n"
    },
    {
      "tags": [
        "javascript",
        "asp.net"
      ],
      "answer_count": 3,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6412632/timeline",
      "question_comments_url": "/questions/6412632/comments",
      "question_answers_url": "/questions/6412632/answers",
      "question_id": 6412632,
      "owner": {
        "user_id": 806682,
        "user_type": "registered",
        "display_name": "Peter Santos",
        "reputation": 6,
        "email_hash": "a2fe3b7599ef15af835ce803d5244f8e"
      },
      "creation_date": 1308579446,
      "last_edit_date": 1308586779,
      "last_activity_date": 1308586779,
      "up_vote_count": 1,
      "down_vote_count": 0,
      "view_count": 40,
      "score": 1,
      "community_owned": false,
      "title": "How to find and modify an asp.net control with JavaScript?",
      "body": "<p>This has been bothering me for quite some time. I'm simply trying to change the value of a textbox defined in asp.net, which normally works when it is not within a LoggedInTemplate.</p>\n\n<p>I've searched everywhere on the net and even here, but the only thing I can find close to doing what I need is here <a href=\"http://stackoverflow.com/questions/3024954/finding-an-aspbutton-and-asptextbox-in-javascript\">Finding an asp:button and asp:textbox in Javascript</a>. Unfortunately that doesn't work. Here's what I have so far:</p>\n\n<pre><code>&lt;head id=\"Head1\" runat=\"server\"&gt;\n  &lt;script src=\"../../scripts/webeffects.js\" type=\"text/javascript\" language=\"javascript\"&gt;&lt;/script&gt;\n&lt;/head&gt;\n&lt;asp:LoginView ID=\"LoginView1\" runat=\"server\"&gt;\n  &lt;LoggedInTemplate&gt;\n  &lt;div class=\"lotto_pick_container\"&gt;\n    &lt;table runat=\"server\" id=\"tblLottoPick\"&gt;\n      &lt;tr&gt;&lt;th colspan=\"3\"&gt;Pick a Lotto Number&lt;/th&gt;&lt;/tr&gt;\n  &lt;tr&gt;\n    &lt;td&gt;&lt;asp:TextBox ID=\"txt1stNum\" runat=\"server\"&gt;&lt;/asp:TextBox&gt;&lt;/td&gt;\n    &lt;td&gt;&lt;asp:TextBox ID=\"txt2ndNum\" runat=\"server\"&gt;&lt;/asp:TextBox&gt;&lt;/td&gt;\n    &lt;td&gt;&lt;asp:TextBox ID=\"txt3rdNum\" runat=\"server\"&gt;&lt;/asp:TextBox&gt;&lt;/td&gt;\n  &lt;/tr&gt;\n  &lt;tr&gt;\n    &lt;td&gt;&lt;asp:Button ID=\"cmdSubmitPick\" runat=\"server\" Text=\"Submit Lotto Number\" \n        onclientclick=\"return validateLottoPicks()\" /&gt;&lt;/td&gt;\n  &lt;/tr&gt;\n&lt;/table&gt;\n  &lt;/div&gt;\n  &lt;/LoggedInTemplate&gt;\n&lt;/asp:LoginView&gt;\n</code></pre>\n\n<p>Right now I'm trying to use an external js script to find a textbox and modify it with an arbitrary value of 12, just so that I know it can work:</p>\n\n<pre><code>function validateLottoPicks() {\n  document.getElementById('&lt;%= LoginView1.FindControl(\"txt2ndNum\").ClientID %&gt;').value = 12\n}\n</code></pre>\n\n<p>When I debug this with Firebug it seems all my other code works, except for this one function. I have verified the function gets called, it's just this line that doesn't work. Can someone please provide some guidance? I'll send milk and cookies.</p>\n\n<p><strong>Update:</strong></p>\n\n<p>Thanks for all the help so far! I got some pretty quick responses.\n<br />\n<br />I removed the <strong>visible=\"false\"</strong> portion of the html, but no luck.\n<br />I also tried using <strong>tblLottoPick.FindControl</strong>, but no luck.\n<br />I added my header which includes the script that contains the function I am trying to run.\n<br />Using the rendered id, <strong>document.getElementById(\"LoginView1_txt2ndNum\").value = 12</strong>, works fine.</p>\n"
    },
    {
      "tags": [
        "javascript",
        "jquery",
        "css",
        "lightbox"
      ],
      "answer_count": 3,
      "accepted_answer_id": 4529480,
      "favorite_count": 0,
      "question_timeline_url": "/questions/4529460/timeline",
      "question_comments_url": "/questions/4529460/comments",
      "question_answers_url": "/questions/4529460/answers",
      "question_id": 4529460,
      "owner": {
        "user_id": 184814,
        "user_type": "registered",
        "display_name": "OM The Eternity",
        "reputation": 1720,
        "email_hash": "23a8b77e957cf10622f9039e4f3a954d"
      },
      "creation_date": 1293256850,
      "last_activity_date": 1308586634,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 863,
      "score": 0,
      "community_owned": false,
      "title": "How to fix the width and height of jquery lightbox?",
      "body": "<p>I have aplied jquery lighbox on my image gallery, but due to the variable size of images, the lightbox size is not fixed hence opens up with image's original size, this in turn causes the biga images to go out of screen and display horizontal scroll bar in browser.</p>\n\n<p>Hence I am looking for the way to apply the fix width and height to lightbox so that every image must be displayed with this size in lightbox.</p>\n\n<p>Please help..</p>\n\n<blockquote>\n  <p><strong>Update</strong></p>\n</blockquote>\n\n<p>i Just tried with the solution Scott (<a href=\"http://geekswithblogs.net/wojan/archive/2009/06/17/jquerylightbox.aspx\" rel=\"nofollow\">http://geekswithblogs.net/wojan/archive/2009/06/17/jquerylightbox.aspx</a>) has given to me, I did this,</p>\n\n<pre><code>function _resize_container_image_box(intImageWidth,intImageHeight) {\n// Get current width and height\n//rescale if necessary\nif((settings.maxWidth != null &amp;&amp; settings.maxHeight != null) &amp;&amp; (intImageWidth &gt; settings.maxWidth || intImageHeight &gt; settings.maxHeight)){\nvar isWider = intImageWidth &gt; intImageHeight;//is the image wide or tall?\nvar scale = isWider ? settings.maxWidth/intImageWidth : settings.maxHeight/intImageHeight;\nintImageWidth = intImageWidth * scale;\nintImageHeight = intImageHeight * scale;\n}\n\n$('#lightbox-image').height(intImageHeight); \n$('#lightbox-image').width(intImageWidth); \nvar intCurrentWidth = $('#lightbox-container-image-box').width();\nvar intCurrentHeight = $('#lightbox-container-image-box').height();\n// Get the width and height of the selected image plus the padding\nvar intWidth = (intImageWidth + (settings.containerBorderSize * 2)); // Plus the image´s width and the left and right padding value\nvar intHeight = (intImageHeight + (settings.containerBorderSize * 2)); // Plus the image´s height and the left and right padding value\n// Diferences\nvar intDiffW = intCurrentWidth - intWidth;\nvar intDiffH = intCurrentHeight - intHeight;\n// Perfomance the effect\n$('#lightbox-container-image-box').animate({ width: intWidth, height: intHeight },settings.containerResizeSpeed,function() { _show_image(); });\nif ( ( intDiffW == 0 ) &amp;&amp; ( intDiffH == 0 ) ) {\nif ( $.browser.msie ) {\n___pause(250);\n} else {\n___pause(100);  \n}\n} \n$('#lightbox-container-image-data-box').css({ width: intImageWidth });\n$('#lightbox-nav-btnPrev,#lightbox-nav-btnNext').css({ height: intImageHeight + (settings.containerBorderSize * 2) });\n};\n</code></pre>\n\n<p>AND</p>\n\n<pre><code>$('#gallery a').lightBox( maxHeight: null,\nmaxWidth: null);\n});\n</code></pre>\n\n<p>But whenever I do this and click on the image just gets open in browsers annother tab, all the lightbox functinalty fails</p>\n\n<p>Please help me to correct it</p>\n\n<p>Thanks</p>\n"
    },
    {
      "tags": [
        "javascript",
        "html",
        "prototype",
        "prototypejs"
      ],
      "answer_count": 1,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6414253/timeline",
      "question_comments_url": "/questions/6414253/comments",
      "question_answers_url": "/questions/6414253/answers",
      "question_id": 6414253,
      "owner": {
        "user_id": 444549,
        "user_type": "registered",
        "display_name": "woot586",
        "reputation": 146,
        "email_hash": "2b8b22a4feb9a73e64bd1a51287ef20f"
      },
      "creation_date": 1308586312,
      "last_edit_date": 1308586544,
      "last_activity_date": 1308586574,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 14,
      "score": 0,
      "community_owned": false,
      "title": "Prototype - How to deselect the selected value from a dropdown",
      "body": "<p>How do I deselect the selected value from a dropdown list using Prototype.</p>\n\n<p><strong>From</strong></p>\n\n<pre><code>&lt;select id=“mylist\"&gt;\n&lt;option value=“val-1”&gt;Value 1&lt;/option&gt;\n&lt;option value=“val-2” SELECTED&gt;Value 2&lt;/option&gt;\n&lt;option value=“val-3”&gt;Value 3&lt;/option&gt;\n&lt;/select&gt;\n</code></pre>\n\n<p><strong>To</strong></p>\n\n<pre><code>&lt;select id=“mylist\"&gt;\n&lt;option value=“val-1”&gt;Value 1&lt;/option&gt;\n&lt;option value=“val-2”&gt;Value 2&lt;/option&gt;\n&lt;option value=“val-3”&gt;Value 3&lt;/option&gt;\n&lt;/select&gt;\n</code></pre>\n\n<p>Thanks for any help in advance.</p>\n"
    },
    {
      "tags": [
        "javascript"
      ],
      "answer_count": 12,
      "accepted_answer_id": 6398800,
      "favorite_count": 7,
      "question_timeline_url": "/questions/6398787/timeline",
      "question_comments_url": "/questions/6398787/comments",
      "question_answers_url": "/questions/6398787/answers",
      "question_id": 6398787,
      "owner": {
        "user_id": 699159,
        "user_type": "registered",
        "display_name": "walle1357",
        "reputation": 348,
        "email_hash": "1d1af4fce4b64ececdfc88b33881bbc9"
      },
      "creation_date": 1308429772,
      "last_activity_date": 1308586389,
      "up_vote_count": 44,
      "down_vote_count": 1,
      "view_count": 843,
      "score": 43,
      "community_owned": false,
      "title": "Javascript Shorthand for getElementById",
      "body": "<p>Is there any shorthand for the JavaScript document.getElementById? Or is there any way I can define one? It gets repetitive retyping that <strong>over</strong> and <strong>over</strong>.</p>\n"
    },
    {
      "tags": [
        "java",
        "javascript",
        "json"
      ],
      "answer_count": 2,
      "accepted_answer_id": 6414173,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6414107/timeline",
      "question_comments_url": "/questions/6414107/comments",
      "question_answers_url": "/questions/6414107/answers",
      "question_id": 6414107,
      "owner": {
        "user_id": 745835,
        "user_type": "registered",
        "display_name": "Mrshll187",
        "reputation": 49,
        "email_hash": "9e16629a5e67bf6bed7b1b519bceafa1"
      },
      "creation_date": 1308585657,
      "last_edit_date": 1308586215,
      "last_activity_date": 1308586215,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 42,
      "score": 0,
      "community_owned": false,
      "title": "In Java, How do I represent multiple objects (of same type) in a single JSON object.",
      "body": "<p><strong>I need to pass the attribtutes of particular type, as apart of a restful service to a javascript which will then display them to a webpage</strong> </p>\n\n<pre><code>  @GET\n  @Produces(\"application/json\")\n  @Consumes(\"application/json\") \n  @Path(\"/getStatusAll\")\n\n  public void getStatusAll(\n      @Context HttpServletRequest request,\n      @Context HttpServletResponse response) throws ServletException,\n      IOException\n\n{\n\n JSONArray jArray = new JSONArray();\n\n Collection&lt;S&gt; s = Manager.getS().values();\n for (Server i : svr)\n {\n   JSONObject m = new JSONObject();\n\n   m.put(\"name\",i.getName());\n   m.put(\"status\",i.getStatus());\n\n   jArray.add(m);\n\n }\n\n return jArray.toString();\n\n\n    response.getOutputStream().print(jArray);\n     response.flushBuffer();\n}\n</code></pre>\n\n<p><strong>JAVASCRIPT will need to read ONE JSON object looking like:</strong> </p>\n\n<pre><code>[ {name:someName0, status: someStatus},\n {name:someName1, status: someStatus},\n {name:someName2, status: someStatus}...etc]\n</code></pre>\n"
    },
    {
      "tags": [
        "javascript",
        "attributes"
      ],
      "answer_count": 5,
      "accepted_answer_id": 6414229,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6414060/timeline",
      "question_comments_url": "/questions/6414060/comments",
      "question_answers_url": "/questions/6414060/answers",
      "question_id": 6414060,
      "owner": {
        "user_id": 805629,
        "user_type": "registered",
        "display_name": "joelson",
        "reputation": 6,
        "email_hash": "9d0f36cf7c4c77a62626ef9df43b79a7"
      },
      "creation_date": 1308585493,
      "last_edit_date": 1308585568,
      "last_activity_date": 1308586177,
      "up_vote_count": 0,
      "down_vote_count": 1,
      "view_count": 34,
      "score": -1,
      "community_owned": false,
      "title": "how get href all images in page using javascript?",
      "body": "<p>how get href all images in page using javascript\nthis code return src how retunr href?</p>\n\n<pre><code>function checkimages() {\n     var images = document.images;\n     for (var i=0; i&lt;images.length; i++){\n        var img =images[i].src;\n       alert(img);\n     }\n}\n</code></pre>\n"
    },
    {
      "tags": [
        "javascript",
        "jquery"
      ],
      "answer_count": 2,
      "accepted_answer_id": 6413339,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6413183/timeline",
      "question_comments_url": "/questions/6413183/comments",
      "question_answers_url": "/questions/6413183/answers",
      "question_id": 6413183,
      "owner": {
        "user_id": 111479,
        "user_type": "registered",
        "display_name": "tonsils",
        "reputation": 1260,
        "email_hash": "fdbc495cc9b5f7a789650b3ae4592bc4"
      },
      "creation_date": 1308581796,
      "last_edit_date": 1308582871,
      "last_activity_date": 1308586124,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 18,
      "score": 0,
      "community_owned": false,
      "title": "Manipulate Select Multiple List Setup On Page Load",
      "body": "<p>I have the following two select (multiple lists) which I'm trying to setup as a shuttle by where I provide the user an \"Available List\" on the left which they can select from, which then gets transported to the right select list, which is my \"Assigned List\".</p>\n\n<p>The HTML code is as follows:</p>\n\n<pre><code>&lt;select multiple=\"multiple\" name=\"avail_list\" size=\"7\" style=\"width:250px;\" id=\"AVAILABLE_LIST\"&gt;\n    &lt;option value=\"A\"&gt;A1&lt;/option&gt;\n    &lt;option value=\"B\"&gt;B1&lt;/option&gt;\n    &lt;option value=\"C\"&gt;C1&lt;/option&gt;\n    &lt;option value=\"D\"&gt;D1&lt;/option&gt;\n    &lt;option value=\"E\"&gt;E1&lt;/option&gt;\n    &lt;option value=\"F\"&gt;F1&lt;/option&gt;\n&lt;/select&gt;\n\n&lt;select multiple=\"multiple\" name=\"assign_list\" size=\"7\" style=\"width:250px;\" id=\"ASSIGNED_LIST\"&gt;\n    &lt;option value=\"D\"&gt;D1&lt;/option&gt;\n    &lt;option value=\"E\"&gt;E1&lt;/option&gt;\n    &lt;option value=\"F\"&gt;F1&lt;/option&gt;\n&lt;/select&gt;\n</code></pre>\n\n<p>Through the use of jQuery, how could I possibly remove from the AVAILABLE_LIST, the options that have been selected and are now in the ASSIGNED_LIST?</p>\n\n<p>I need to some how perform on the option values only (AVAILABLE_LIST minus ASSIGNED_LIST).</p>\n\n<p>So based on the above, the AVAILABLE_LIST would then look like this:</p>\n\n<pre><code>&lt;select multiple=\"multiple\" name=\"avail_list\" size=\"7\" style=\"width:250px;\" id=\"AVAILABLE_LIST\"&gt;\n    &lt;option value=\"A\"&gt;A1&lt;/option&gt;\n    &lt;option value=\"B\"&gt;B1&lt;/option&gt;\n    &lt;option value=\"C\"&gt;C1&lt;/option&gt;\n&lt;/select&gt;\n</code></pre>\n\n<p>**NOTE:Just to make myself clear, I already have the above data setup when entering my page, that is, there are already values in the \"Assigned List\" on the right. </p>\n\n<p>On entry when presenting this page with the two select lists to the user, I want to programmatically perform the minus between the two sets in the background. There is no human interaction required as the selection has already been made.</p>\n\n<p>Just wondering if this is possible?</p>\n\n<p>Thanks.</p>\n"
    },
    {
      "tags": [
        "javascript"
      ],
      "answer_count": 2,
      "accepted_answer_id": 6401725,
      "favorite_count": 0,
      "closed_date": 1308478690,
      "closed_reason": "not a real question",
      "question_timeline_url": "/questions/6401696/timeline",
      "question_comments_url": "/questions/6401696/comments",
      "question_answers_url": "/questions/6401696/answers",
      "question_id": 6401696,
      "owner": {
        "user_id": 533617,
        "user_type": "unregistered",
        "display_name": "David19801",
        "reputation": 822,
        "email_hash": "cba0529762ef11ebc58637b537a42acd"
      },
      "creation_date": 1308476786,
      "last_edit_date": 1308586104,
      "last_activity_date": 1308586104,
      "up_vote_count": 0,
      "down_vote_count": 2,
      "view_count": 70,
      "score": -2,
      "community_owned": false,
      "title": "javascript, what is this?",
      "body": "<p>I have found this javascript code from instapaper's bookmarklet.  </p>\n\n<p><strong>What exactly is this code doing?</strong></p>\n\n<pre><code>javascript:\nfunction%20iprl5(){\n  var%20d=document,z=d.createElement('scr'+'ipt'),b=d.body,l=d.location;\n  try{\n    if(!b)\n      throw(0);\n    d.title='(Saving...)%20'+d.title;\n    z.setAttribute('src',l.protocol+'//www.instapaper.com/j/deyNbbpjuSei?u='+encodeURIComponent(l.href)+'&amp;t='+(new%20Date().getTime()));\n    b.appendChild(z);\n  }\n  catch(e){\n    alert('Please%20wait%20until%20the%20page%20has%20loaded.');\n  }\n}\niprl5();\nvoid(0)\n</code></pre>\n\n<p>Thanks in advance!</p>\n"
    },
    {
      "tags": [
        "javascript",
        "python",
        "web-scraping",
        "hashbang",
        "phantomjs"
      ],
      "answer_count": 0,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6414152/timeline",
      "question_comments_url": "/questions/6414152/comments",
      "question_answers_url": "/questions/6414152/answers",
      "question_id": 6414152,
      "owner": {
        "user_id": 321838,
        "user_type": "registered",
        "display_name": "tchaymore",
        "reputation": 328,
        "email_hash": "e6f67177880fb558b629820b882b159b"
      },
      "creation_date": 1308585846,
      "last_activity_date": 1308585846,
      "up_vote_count": 1,
      "down_vote_count": 0,
      "view_count": 15,
      "score": 1,
      "community_owned": false,
      "title": "Navigating / scraping hashbang links with javascript (phantomjs)",
      "body": "<p>I'm trying to download the HTML of a website that is almost entirely generated by JavaScript.  So, I need to simulate browser access and have been playing around with <a href=\"http://code.google.com/p/phantomjs/\" rel=\"nofollow\">PhantomJS</a>.  Problem is, the site uses hashbang URLs and I can't seem to get PhantomJS to process the hashbang -- it just keeps calling up the homepage.</p>\n\n<p>The site is <a href=\"http://www.regulations.gov\" rel=\"nofollow\">http://www.regulations.gov</a>.  The default takes you to #!home.  I've tried using the following code (from <a href=\"http://stackoverflow.com/questions/5490438/phantomjs-and-getting-modified-dom\">here</a>) to try and process different hashbangs.</p>\n\n<pre><code>if (phantom.state.length === 0) {\n     if (phantom.args.length === 0) {\n        console.log('Usage: loadreg_1.js &lt;some URL&gt;');\n        phantom.exit();\n     }\n     var address = 'http://www.regulations.gov/';\n     var hash = phantom.args[0];\n     console.log(address);\n     phantom.state = Date.now().toString();\n     phantom.open(address);\n\n} else {\n     var hash = phantom.args[0];\n     document.location = hash;\n     console.log(document.location.hash);\n     var elapsed = Date.now() - new Date().setTime(phantom.state);\n     if (phantom.loadStatus === 'success') {\n             if (!first_time) {\n                     var first_time = true;\n                     if (!document.addEventListener) {\n                             console.log('Not SUPPORTED!');\n                     }\n                     phantom.render('result.png');\n                     var markup = document.documentElement.innerHTML;\n                     console.log(markup);\n                     phantom.exit();\n             }\n     } else {\n             console.log('FAIL to load the address');\n             phantom.exit();\n     }\n}\n</code></pre>\n\n<p>This code produces the correct hashbang (for instance, I can set the hash to '#!contactus') but it doesn't dynamically generate any different HTML--just the default page.</p>\n\n<p>I've also tried to set the initial address to the hashbang, but then the script just hangs and doesn't do anything.</p>\n\n<p>Thoughts?</p>\n"
    },
    {
      "tags": [
        "javascript",
        "facebook",
        "api",
        "like",
        "app-id"
      ],
      "answer_count": 0,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6414105/timeline",
      "question_comments_url": "/questions/6414105/comments",
      "question_answers_url": "/questions/6414105/answers",
      "question_id": 6414105,
      "owner": {
        "user_id": 806911,
        "user_type": "registered",
        "display_name": "anson",
        "reputation": 1,
        "email_hash": "26415c14e002ed031a23225efdebc7c7"
      },
      "creation_date": 1308585655,
      "last_activity_date": 1308585655,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 8,
      "score": 0,
      "community_owned": false,
      "title": "Facebook API FB.getLoginStatus returns undefined",
      "body": "<p>I have added a like button on my website, and want to know who clicked the like button.\nThese are my sample code:</p>\n\n<pre><code>    &lt;div id=\"fb-root\"&gt;&lt;/div&gt;\n    &lt;script&gt;\n      window.fbAsyncInit = function() {\n        FB.init({appId: '182722795115444', status: true, cookie: true,\n                 xfbml: true});\n\n        // To find who clicked the like button\n        FB.Event.subscribe('edge.create', function(response){\n            FB.getLoginStatus(function(response) {\n\n                if (response.session) {\n                    // logged in and connected user, someone you know\n                    alert(\"logged in and connected user\");\n                } else {\n                    // no user session available, someone you dont know\n                    alert(\"no user session available\");\n                }\n            });\n        });\n      };\n      (function() {\n        var e = document.createElement('script'); e.async = true;\n        e.src = document.location.protocol +\n          '//connect.facebook.net/en_US/all.js';\n        document.getElementById('fb-root').appendChild(e);\n      }());\n    &lt;/script&gt;\n    &lt;script src=\"http://connect.facebook.net/en_US/all.js#appId=182722795115444&amp;amp;xfbml=1\"&gt;&lt;/script&gt;\n    &lt;fb:like href=\"www.blogcountry.net\" send=\"true\" width=\"450\" show_faces=\"true\" font=\"\"&gt;&lt;/fb:like&gt;\n</code></pre>\n\n<p>When I clicked the Like button, and login facebook, do like successfully, but got \"no user session available\" alert. </p>\n\n<p>So I am confused:</p>\n\n<ol>\n<li>My appId in FB.init is the same as\nfb:like tag, is it right?</li>\n<li>Are there something wrong in my\nprogram ?</li>\n<li>How to get user name who click the\nLike button?</li>\n</ol>\n\n<p>Thanks in advance.</p>\n"
    },
    {
      "tags": [
        "javascript",
        "jquery",
        "xml",
        "firefox"
      ],
      "answer_count": 2,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6410184/timeline",
      "question_comments_url": "/questions/6410184/comments",
      "question_answers_url": "/questions/6410184/answers",
      "question_id": 6410184,
      "owner": {
        "user_id": 282887,
        "user_type": "registered",
        "display_name": "Bakhtiyor",
        "reputation": 663,
        "email_hash": "5422e34c270c77415bbcc6ed93544b3d"
      },
      "creation_date": 1308567697,
      "last_edit_date": 1308568088,
      "last_activity_date": 1308585449,
      "up_vote_count": 1,
      "down_vote_count": 0,
      "view_count": 52,
      "score": 1,
      "community_owned": false,
      "title": "jQuery.find().each(fn) is not working in Firefox",
      "body": "<p>I have AJAX call to one XML file and the source code is given below. It works perfectly in Chrome but is not working in Firefox. When doing debug I see that it doesn't enter to the cycle of $(response).find(\"simpleType\").each(function() in Firefox. </p>\n\n<p>Does anybody know what is the problem here in my code?</p>\n\n<pre><code>$.ajax({\n  type:\"GET\",\n  url:\"views/workspace/branching_forms/StudentModelDescription.xml\",\n  dataType:\"xml\",\n  error:function(XMLHttpRequest, textStatus, errorThrown){\n      alert(\"error=\"+XMLHttpRequest+\" error2=\"+textStatus+\" error3=\"+errorThrown);\n  },\n  success:function(response){   \n      var i=1;\n      console.log(\"response=\"+response);\n      $(response).find(\"simpleType\").each(function(){                        \n         adaptation_type_name[i]=$.trim($(this).find(\"documentation\").text());                                                              \n         var restriction = $(this).find(\"restriction[base=xs:string]\");\n         j=1;\n         var values=new Array();        \n         $(restriction).find(\"enumeration\").each(function(){\n            var tmp=$(this).attr(\"value\");                                      \n            values[j] = tmp;\n            j++;\n         });\n         adaptation_type_variables[i]=values;               \n         console.log(\"adaptation_type_name=\"+adaptation_type_name[i]+\", adaptation_type_variables=\"+adaptation_type_variables[i]);\n         i++;                        \n      });                   \n      for(var i=1;i&lt;=adaptation_type_name.length;i++)                                       \n        $('#adaptation_type_dialog #branching_adaptation_type').append($(\"&lt;option&gt;&lt;/option&gt;\").attr(\"value\",i).text(adaptation_type_name[i]));\n\n  }\n});\n</code></pre>\n\n<p>The content of StudentModelDescription.xml is given below:</p>\n\n<pre><code>&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;\n&lt;xs:schema xmlns:xs=\"http://www.w3.org/2001/XMLSchema\"&gt;\n  &lt;xs:simpleType name=\"browser\" id=\"context_browser\"&gt;\n      &lt;xs:annotation&gt;\n          &lt;xs:documentation xml:lang=\"en\"&gt;Web Browser&lt;/xs:documentation&gt;\n      &lt;/xs:annotation&gt;\n      &lt;xs:restriction base=\"xs:string\"&gt;\n          &lt;xs:enumeration value=\"Safari\" id=\"1\" /&gt;\n          &lt;xs:enumeration value=\"Google Chrome\" id=\"2\" /&gt;\n          &lt;xs:enumeration value=\"Opera\" id=\"3\" /&gt;\n          &lt;xs:enumeration value=\"Mozilla Firefox\" id=\"4\" /&gt;\n          &lt;xs:enumeration value=\"Internet Explorer\" id=\"5\" /&gt;\n      &lt;/xs:restriction&gt;\n  &lt;/xs:simpleType&gt;    \n  &lt;xs:simpleType name=\"networktype\" id=\"context_networktype\"&gt;\n      &lt;xs:annotation&gt;\n          &lt;xs:documentation xml:lang=\"en\"&gt;Network Type&lt;/xs:documentation&gt;\n      &lt;/xs:annotation&gt;\n      &lt;xs:restriction base=\"xs:string\"&gt;\n          &lt;xs:enumeration value=\"ADSL2+/Cable (High capacity)\" id=\"1\" /&gt;\n          &lt;xs:enumeration value=\"ADSL / HSPA (Moderate capacity)\" id=\"2\" /&gt;\n          &lt;xs:enumeration value=\"Dialup / GPRS (Low capacity)\" id=\"3\" /&gt;\n      &lt;/xs:restriction&gt;\n  &lt;/xs:simpleType&gt;\n&lt;/xs:schema&gt;\n</code></pre>\n"
    },
    {
      "tags": [
        "javascript",
        "ajax",
        "jquery-ajax"
      ],
      "answer_count": 2,
      "favorite_count": 1,
      "question_timeline_url": "/questions/6413944/timeline",
      "question_comments_url": "/questions/6413944/comments",
      "question_answers_url": "/questions/6413944/answers",
      "question_id": 6413944,
      "owner": {
        "user_id": 592435,
        "user_type": "registered",
        "display_name": "Ravi Teja",
        "reputation": 33,
        "email_hash": "4e774187456a5953a4cf97f60344ec26"
      },
      "creation_date": 1308584971,
      "last_activity_date": 1308585353,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 14,
      "score": 0,
      "community_owned": false,
      "title": "Changing content of a webpage using Ajax",
      "body": "<p>Is it possible to change the content of a webpage using ajax?\nMy need is to actually change the options of a selection. \nFor example my <code>x123.com/setting.html</code></p>\n\n<pre><code>&lt;html&gt;\n&lt;head&gt;\n    &lt;meta http-equiv=\"Content-type\" content=\"text/html; charset=utf-8\"&gt;\n    &lt;title&gt;Webpage&lt;/title&gt; \n    &lt;script&gt;\n    function save_changes() {\n        //save the selection\n    }\n    &lt;/script&gt;\n\n&lt;/head&gt;            \n&lt;body&gt;\n    &lt;select name=\"\" multiple&gt;\n        &lt;option value=\"123\"&gt;123&lt;/option&gt;\n        &lt;option value=\"456\"&gt;456&lt;/option&gt;\n    &lt;/select&gt;                           \n    &lt;input type=\"button\" name=\"Submit Dude\" onclick='save_changes()'&gt;\n&lt;/body&gt;                                 \n&lt;/html&gt;\n</code></pre>\n\n<p>I want to give a request from <code>x123.com/123.html</code> and reload the current page(<code>x123.com/123.html</code>) so that the changes in <code>x123.com/setting.html</code> are actually reflected in this one.</p>\n\n<p>Lemme know if my explanation is not clear.</p>\n"
    },
    {
      "tags": [
        "javascript",
        "forms",
        "user"
      ],
      "answer_count": 5,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6413889/timeline",
      "question_comments_url": "/questions/6413889/comments",
      "question_answers_url": "/questions/6413889/answers",
      "question_id": 6413889,
      "owner": {
        "user_id": 789918,
        "user_type": "registered",
        "display_name": "Mauricio",
        "reputation": 6,
        "email_hash": "29de018a3ee44a96503802c7516d7660"
      },
      "creation_date": 1308584750,
      "last_activity_date": 1308585305,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 18,
      "score": 0,
      "community_owned": false,
      "title": "Use JavaScript to store and return user info",
      "body": "<p>I'm looking for a way to have users fill out a form and then print their information through the entire site (Like when you sign in to StackOverflow, your name changes on the top and it retains the information as you navigate the rest of the site). I'm thinking it's something to do with placing \"onClick\" on the submit button, but I need the information to be carried throughout the pages.</p>\n\n<pre><code>&lt;form name=\"input\" action=\"html_form_action.asp\" method=\"get\"&gt;\nFirst name: &lt;input type=\"text\" name=\"FirstName\" value=\"Mickey\" /&gt;&lt;br /&gt;\nLast name: &lt;input type=\"text\" name=\"LastName\" value=\"Mouse\" /&gt;&lt;br /&gt;\n&lt;input type=\"submit\" value=\"Submit\" /&gt;\n&lt;/form&gt; \n</code></pre>\n\n<p>Thanks in advance.</p>\n"
    },
    {
      "tags": [
        "javascript",
        "xml",
        "xslt",
        "firefox-addon"
      ],
      "answer_count": 1,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6413778/timeline",
      "question_comments_url": "/questions/6413778/comments",
      "question_answers_url": "/questions/6413778/answers",
      "question_id": 6413778,
      "owner": {
        "user_id": 806920,
        "user_type": "registered",
        "display_name": "Lukas Ruge",
        "reputation": 1,
        "email_hash": "be5ae20541e29f445166885a87a81d35"
      },
      "creation_date": 1308584172,
      "last_edit_date": 1308584542,
      "last_activity_date": 1308585270,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 10,
      "score": 0,
      "community_owned": false,
      "title": "javascript: Problem with dynamically adding xsl-stylesheet to XML Data",
      "body": "<p>I'm trying to write my first Firefoy-Eytension. The extension is supposed to display FOAF-Files in a nice way using XSLT. Right now I just wan't to add the XSL Stylesheet to the rdf file when I press a button. The function is called but the presentation of the rdf-file does not change.</p>\n\n<pre><code>function loadXMLDoc(dname)\n{\n    if (window.XMLHttpRequest)\n    {\n            xhttp=new XMLHttpRequest();\n    }\n    else\n    {\n            xhttp=new ActiveXObject(\"Microsoft.XMLHTTP\");\n    }\n    xhttp.open(\"GET\",dname,false);\n    xhttp.send(\"\");\n    return xhttp.responseXML;\n}\n\nfunction displayMyResult()\n{\n    alert(\"test\")\n    xml=loadXMLDoc(\"http://www.example.com/me.rdf\");\n    xsl=loadXMLDoc(\"http://www.example.com/test.xsl\");\n    if (window.ActiveXObject)\n    {\n            ex=xml.transformNode(xsl);\n            content.document.location.replace(ex)\n    }\n    // code for Mozilla, Firefox, Opera, etc.\n    else if (document.implementation &amp;&amp; document.implementation.createDocument)\n    {\n            xsltProcessor=new XSLTProcessor();\n            xsltProcessor.importStylesheet(xsl);\n            resultDocument = xsltProcessor.transformToFragment(xml,document);\n            content.document.location.replace(ex)\n    }\n}\n</code></pre>\n\n<p>The first function loadXMLDoc is copied from another post here, and should probably work. The Probem is in the displayMyResult Method. The test-Alert confirms, that the function is called but the me.rdf file is not displayed any different.</p>\n\n<p>I belive that the line content.document.location.replace(ex) is wrong but have not found anything on the web that would explain to me what to use instead.</p>\n\n<p>Can anybody tell me how to load the XLST-Stylesheet to present the RDF File?</p>\n"
    },
    {
      "tags": [
        "java",
        "javascript",
        "html",
        "scala",
        "htmlunit"
      ],
      "answer_count": 2,
      "accepted_answer_id": 6365007,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6364675/timeline",
      "question_comments_url": "/questions/6364675/comments",
      "question_answers_url": "/questions/6364675/answers",
      "question_id": 6364675,
      "owner": {
        "user_id": 107877,
        "user_type": "registered",
        "display_name": "Mike Cialowicz",
        "reputation": 1905,
        "email_hash": "818df74dc3bb3fd1d8a1848e238b53d6"
      },
      "creation_date": 1308173653,
      "last_activity_date": 1308584950,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 35,
      "score": 0,
      "community_owned": false,
      "title": "HtmlUnit's HtmlPage.getElementById seems to reinitialize JavaScript after many calls.",
      "body": "<p>I have a simple HTML page (ratings.html) that I'm trying to test using HtmlUnit. The action that I'm testing works when I load it up in a browser and do it by hand. However, when I try to test it with HtmlUnit, it seems like too many calls to getElementById (or getInputByName) cause the JavaScript on the page to be reinitialized.</p>\n\n<p>In the AddRating.scala test, the first two calls to page.addRating work, but the third fails because it can't find the 'rating3' element on the page. After lots of debugging, I've discovered that the <code>ratingCount</code> gets reset back to 0 for some reason.</p>\n\n<p>See my comments below (between the <code>// ******</code> sections) to see where the problem areas are.</p>\n\n<p>Has anyone else experience this behavior or have any advice on how to deal with it? Thanks!</p>\n\n<p><strong>ratings.html (HTML Page to add \"ratings\"):</strong></p>\n\n<pre><code>&lt;html&gt;\n  &lt;head&gt;\n      &lt;script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js\"&gt;&lt;/script&gt;\n      &lt;script src=\"http://ajax.microsoft.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js\"&gt;&lt;/script&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;form name=\"new-rating\" method=\"post\" action=\"/add-rating\"&gt;\n      &lt;table&gt;\n        &lt;tr&gt;\n          &lt;td valign=\"top\"&gt;Ratings:&lt;/td&gt;\n          &lt;td&gt;\n            Should be ordered from best to worst.&lt;br&gt;\n            &lt;a id=\"add-rating\" href=\"#\"&gt;add rating&lt;/a&gt;&lt;/td&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n          &lt;td&gt;&lt;/td&gt;\n          &lt;td&gt;\n            &lt;button name=\"submit-button\" type=\"submit\"&gt;Add Rating&lt;/button&gt;\n          &lt;/td&gt;\n        &lt;/tr&gt;\n      &lt;/table&gt;\n    &lt;/form&gt;\n    &lt;h2&gt;All Ratings&lt;/h2&gt;\n\n    &lt;ul id=\"ratings\"&gt;\n    &lt;/ul&gt;\n\n    &lt;script&gt;\n      $(window).load(function(){   \n          // display ratings\n          $.getJSON(\"/ratings\", function(data)\n          {\n              var items = $.map(data, function(el) {\n                var ratingsTable = \"\";\n                if (el.ratings.length &gt; 0)\n                {\n                  $.tmpl(\"&lt;li&gt;&lt;table&gt;&lt;tr&gt;&lt;th&gt;Rating&lt;/th&gt;&lt;/tr&gt;{{each ratings }}&lt;tr&gt;&lt;td&gt;${$value.label}&lt;/td&gt;&lt;/tr&gt;{{/each}}&lt;/table&gt;&lt;/li&gt;\", el).appendTo(\"#ratings\");\n                }\n              });\n          });\n\n          // add rating action\n          // ***********\n          var ratingCount = 0; // THIS GETS RE-INITIALIZED TO 0 AFTER TOO MANY getElementById or getElementByName calls.\n          // ***********\n          $('#add-rating').click(function()\n          {\n              ratingCount += 1;\n              $('#remove-rating').show();\n              $.tmpl(\"&lt;span id='rating${ratingId}'&gt;&lt;input name='rating${ratingId}'&gt;&lt;br&gt;&lt;/span&gt;\",\n                     {ratingId: ratingCount}).insertBefore('#add-rating');\n              if(ratingCount &gt;= 5) { $('#add-rating').hide(); }\n          });\n      });\n    &lt;/script&gt;\n  &lt;/body&gt;\n&lt;/html&gt;\n</code></pre>\n\n<p><strong>RatingsPage.scala (Scala interface to HTML page):</strong></p>\n\n<pre><code>package portal\n\nimport com.gargoylesoftware.htmlunit.WebClient\nimport com.gargoylesoftware.htmlunit.html._\n\nimport infrastructure.SuperHtmlUnitConversions._\n\nimport infrastructure.WaitFor\n\nclass RatingsPage(page: HtmlPage)\n{\n    val newRatingForm: HtmlForm = page.getFormByName(\"new-rating\")\n\n    var ratingCount = 0\n\n    def submit(): RatingsPage =\n    {\n        val page = newRatingForm.getButtonByName(\"submit-button\").click[HtmlPage]()\n        ratingCount = 0\n        new RatingsPage(page)\n    }\n\n    def addRating(rating: String)\n    {\n        page.getElementById(\"add-rating\").click()\n        ratingCount += 1\n        newRatingForm.getInputByName(\"rating\" + ratingCount).asInstanceOf[HtmlInput].setValueAttribute(rating)\n    }\n\n    def asText(): String = page.asText\n    def asXml():  String = page.asXml\n}\n</code></pre>\n\n<p><strong>AddRating.scala (Scala HtmlUnit test that fails):</strong></p>\n\n<pre><code>package portal\n\nimport java.util.Date\nimport org.scalatest.FunSuite\nimport org.scalatest.junit.JUnitRunner\nimport org.junit.runner.RunWith\nimport org.scalatest.matchers.ShouldMatchers\nimport com.gargoylesoftware.htmlunit.WebClient\nimport com.gargoylesoftware.htmlunit.html._\nimport infrastructure.WaitFor\n\n@RunWith(classOf[JUnitRunner])\nclass AddRating extends FunSuite with ShouldMatchers\n{\n    test(\"add ratings\")\n    {\n        val client = new WebClient()\n        val index = new PortalIndexPage(client)\n        var page = index.goToRatingsPage()\n\n        page.addRating(\"Buy\") // WORKS\n        page.addRating(\"Sell\") // WORKS\n        // *********\n        page.addRating(\"Sell\") // FAILS! Can't find element with \"rating3\" name!\n        // *********\n        page = page.submit()\n        WaitFor(\"rating to show up\", ()=&gt;page.asXml.contains(\"Sell\"))\n\n        page.asText should include (\"Buy\")\n\n        client.closeAllWindows()\n    }\n}\n</code></pre>\n"
    },
    {
      "tags": [
        "javascript",
        "node.js",
        "express",
        "socket.io"
      ],
      "answer_count": 1,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6397574/timeline",
      "question_comments_url": "/questions/6397574/comments",
      "question_answers_url": "/questions/6397574/answers",
      "question_id": 6397574,
      "owner": {
        "user_id": 776796,
        "user_type": "registered",
        "display_name": "user776796",
        "reputation": 20,
        "email_hash": "9409cb9468f20f7b03a6515bdf5ff81c"
      },
      "creation_date": 1308417018,
      "last_edit_date": 1308444873,
      "last_activity_date": 1308584891,
      "up_vote_count": 3,
      "down_vote_count": 0,
      "view_count": 39,
      "score": 3,
      "community_owned": false,
      "title": "How to access session in express, outside of the req?",
      "body": "<p>I know that I can use </p>\n\n<pre><code>function(req, res) {\n    req.session\n}\n</code></pre>\n\n<p>using express.  However I need to access the session outside of the response function.  How would I go about doing that?</p>\n\n<p>I'm using socket.io to pass information for adding posts and comments.  So when I receive the socket.io message on the server-side, I need to verify the person posting the information by using the session.  However since this is being done via socket.io there is no req/res.</p>\n"
    },
    {
      "tags": [
        "javascript",
        "jquery",
        "html",
        "xml",
        "check"
      ],
      "answer_count": 3,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6405964/timeline",
      "question_comments_url": "/questions/6405964/comments",
      "question_answers_url": "/questions/6405964/answers",
      "question_id": 6405964,
      "owner": {
        "user_id": 672841,
        "user_type": "registered",
        "display_name": "Can't Tell",
        "reputation": 469,
        "email_hash": "031c656239e481086f37717b07b17522"
      },
      "creation_date": 1308530151,
      "last_edit_date": 1308534239,
      "last_activity_date": 1308584597,
      "up_vote_count": 1,
      "down_vote_count": 1,
      "view_count": 75,
      "score": 0,
      "community_owned": false,
      "title": "Check if a String is HTML or XML",
      "body": "<p>Is there a way to check if a String is HTML or XML in JavaScript? Preferably using jQuery rather than some other library?\nWhy I need to do this is because I need to know if it possible to have a function into which XML or HTML can be passed. If it is HTML we take one action and if it is XML we take another action.</p>\n"
    },
    {
      "tags": [
        "javascript",
        "settimeout",
        "autosuggest"
      ],
      "answer_count": 2,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6413523/timeline",
      "question_comments_url": "/questions/6413523/comments",
      "question_answers_url": "/questions/6413523/answers",
      "question_id": 6413523,
      "owner": {
        "user_id": 806915,
        "user_type": "unregistered",
        "display_name": "Scott Dykstra",
        "reputation": 6,
        "email_hash": "e58f134cbdd998fd90d6951043fbf274"
      },
      "creation_date": 1308583177,
      "last_activity_date": 1308584532,
      "up_vote_count": 1,
      "down_vote_count": 0,
      "view_count": 24,
      "score": 1,
      "community_owned": false,
      "title": "complex problem with setTimeout, clearTimeout, and javascript",
      "body": "<p>I am a bit of a noob at Javascript and am writing an \"autoresult\" script that automatically gets the results of an  as the user is typing. However, because the PHP backend is slow, I want the script to check and see if it has been 1 second since the last keyup. That way, the PHP backend won't be called unless the user is done typing. My idea was to use setTimeout and clearTimeout to handle this. However, my script doesn't work. Here is the input that calls the script:</p>\n\n<pre><code>&lt;input type=\"text\" id=\"inputbox\" onkeyup=\"lookup_input(this.value,0);\" /&gt;\n</code></pre>\n\n<p>\"0\" is a flag used to check whether a Timeout has been set. Here is the script:</p>\n\n<pre><code>var timeOut1;\n\nfunction showQuery(input_myinput2) {    \n    $.post(\"mybackendfile.php\", {queryString: input_myinput2}, function(data){\n        if(data.length &gt;0) {\n        $('#mydiv').html(data); //php backend stuff, don't worry about this\n        }\n    });\n}               \nfunction lookup_input(input_myinput,flag) {\n    if(input_myinput.length == 0) {\n        $('#mydiv').hide(); //check to see if there is an input, and if not, hide the div that displays autoresults\n    } \n    else {   \n              //the flag checks to see if the Timeout has been set\n\n        if(!flag) { \n            timeOut1 = setTimeout(function(){showQuery(input_myinput)}, 1000);\n            //change the flag to \"1\" so that if another key is pressed it will throw the else statement, and if the key is pressed soon enough, it will clear the Timeout\n            $('#inputbox').onkeyup('lookup_input(this.value,1)');       \n            $('#mydiv').show();\n            $('#mydiv').html('Searching... ');\n        }\n        else { //if timeout has been set then and next key has been pressed\n            clearTimeout(timeOut1);\n            $('#mydiv').html('Searching... ');\n            timeOut1 = setTimeout(function(){showQuery(input_myinput)}, 1000);  \n        }\n    }\n} \n</code></pre>\n\n<p>any suggestions on how to access the showQuery function correctly and how to get this script to work? also, any suggestions on another way to do the autoresult stall besides using setTimeout/clearTimeout? thanks!</p>\n"
    },
    {
      "tags": [
        "javascript",
        "facebook",
        "innerhtml",
        "getelementbyid"
      ],
      "answer_count": 0,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6413720/timeline",
      "question_comments_url": "/questions/6413720/comments",
      "question_answers_url": "/questions/6413720/answers",
      "question_id": 6413720,
      "owner": {
        "user_id": 193996,
        "user_type": "registered",
        "display_name": "Dasa",
        "reputation": 84,
        "email_hash": "3e365666b8b4473179ab1cdc05c0ec36"
      },
      "creation_date": 1308583956,
      "last_edit_date": 1308584446,
      "last_activity_date": 1308584446,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 18,
      "score": 0,
      "community_owned": false,
      "title": "facebook wall post message with js from innerhtml",
      "body": "<p>Three divs nested in one</p>\n\n<pre><code>&lt;div id=\"fulltxt\"&gt;\n&lt;div id='action'&gt;txt1 &lt;/div&gt;\n&lt;div id='reason'&gt; txt2 &lt;/div&gt;\n&lt;div id=\"party\"&gt; txt3 &lt;/div&gt;\n&lt;/div&gt;\n</code></pre>\n\n<p>using encodeURIComponent I want to use all the text as a message to send to users wall when they click my \"send to facebook\" link</p>\n\n<p>This is in my </p>\n\n<pre><code>&lt;script&gt;\n // A function to post on the users wall\n function wallPost() {\n  FB.ui(\n   {\n    method: 'feed',\n    name: 'example',\n    link: 'http://www.example.com',\n    picture: 'http://www.example.com/logo.png',\n    caption: 'funny example',\n    description: 'This was posted from example.com.',\n    message: ''\n   },\n   function(response) {\n    if (response &amp;&amp; response.post_id) {\n     document.getElementById('message').innerHTML = 'Thanks for sharing!';\n    } else {\n     document.getElementById('message').innerHTML = 'Hey, you didn\\'t share!';\n    }\n   }\n  );\n }\n&lt;/script&gt;\n</code></pre>\n\n<p>This is before my closing body tag</p>\n\n<pre><code>&lt;div id=\"fb-root\"&gt;&lt;/div&gt;\n&lt;script src=\"https://connect.facebook.net/he_IL/all.js\"&gt;&lt;/script&gt;\n&lt;script&gt;\n FB.init({\n  appId : 'number goes here',\n  status : true, // check login status\n  cookie : true, // enable cookies to allow the server to access the session\n  xfbml : true // parse XFBML\n });\n&lt;/script&gt;\n</code></pre>\n\n<p>This is the link</p>\n\n<pre><code>&lt;p id=\"message\"&gt;\n &lt;a href=\"#\" onclick=\"wallPost();\"&gt;Share Me!&lt;/a&gt;\n&lt;/p&gt;\n</code></pre>\n\n<p>So what I need is that when the link is clicked the message changes to the content of fulltxt and passes to facebook</p>\n\n<p>how do i change the message in the wallpost function to the dynamically created content in the fulltxt div</p>\n"
    },
    {
      "tags": [
        "javascript",
        "jquery",
        "jquery-ui",
        "droppable"
      ],
      "answer_count": 1,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6412334/timeline",
      "question_comments_url": "/questions/6412334/comments",
      "question_answers_url": "/questions/6412334/answers",
      "question_id": 6412334,
      "owner": {
        "user_id": 797743,
        "user_type": "registered",
        "display_name": "Jason S",
        "reputation": 1,
        "email_hash": "228384247e084ecfab05558229195aba"
      },
      "creation_date": 1308578149,
      "last_edit_date": 1308581741,
      "last_activity_date": 1308584195,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 37,
      "score": 0,
      "community_owned": false,
      "title": "jQuery \"drop\" and \"over\" are not firing on a droppable",
      "body": "<p>I was trying to improve my web-dev skills for work but got a bit carried away with jQuery's drag and drop feature. Unfortunately I can't get the \"drop\" or \"over\" events of the droppable to fire.</p>\n\n<p>I didn't want to use a jQuery table drag/drop plugin so i have multiple div in a div in a td structures (all generated in $(document).ready). The middle div is to be the droppable and the inner most div is to be the draggable. The generated HTML looks like this:</p>\n\n<pre><code>&lt;td class=\"vertical\"&gt;\n&lt;div id=\"droppable3\" class=\"droppable ui-droppable\" style=\"width: 100%; height: 100%;\"\nover=\"function () { alert(\"working!\"); }\" \ndrop=\"function (event, ui) { \n    debugger;\n    var firstDrag = ui.draggable;\n    var secondDrag = $(this).childNodes[0];\n    var destDrop = $(this);\n    var sourceDrop = firstDrag.parent;\n    $(\"#middle\").append(\"first drag:\" + firstDrag.id + \"\\nSecondDrag:\" + secondDrag.id\n     + \"\\ndest Drop:\" + destDrop.id + \"\\nsourceDrop:\" + sourceDrop.id); }\"&gt;\n        &lt;div id=\"draggable3\" class=\"draggable ui-draggable\" \n        style=\"width: 100%; height: 100%;\"&gt;\n        &lt;/div&gt;\n&lt;/div&gt;\n&lt;/td&gt;\n</code></pre>\n\n<p>and it is exactly the same in other TDs except for the ids.</p>\n\n<p>Now the dragging seems to work fine; i can drag that inner div out and it will revert back if i don't put it on an appropriate droppable or just stick there if i do but it never triggers the \"over\" or \"drop\" events. The debugger line in that code is never hit.</p>\n\n<p>Here is how i'm setting up the draggable/droppable:</p>\n\n<pre><code>function getTD(claz){\nvar td = jQuery(\"&lt;td/&gt;\",{'class': claz});\nvar droppable = jQuery(\"&lt;div/&gt;\",{\n    'class': 'droppable',\n    width: '100%',\n    height:'100%',\n    id: \"droppable\"+ids[index],\n    over: function() {\n        alert('working!');\n    },\n    drop: function(event,ui){\n        debugger;\n        var firstDrag = ui.draggable;\n        var secondDrag = $(this).childNodes[0];\n        var destDrop = $(this);\n        var sourceDrop = firstDrag.parent;\n        $(\"#middle\").append(\"first drag:\"+firstDrag.id +\"\\nSecondDrag:\"+secondDrag.id\n            +\"\\ndest Drop:\"+destDrop.id +\"\\nsourceDrop:\"+sourceDrop.id);\n\n        }\n    });\n    var draggable = jQuery(\"&lt;div/&gt;\",{\n        'class': 'draggable',\n        width: '100%',\n        height:'100%',\n        id: \"draggable\"+ids[index], \n    });\n\n    draggable.draggable({\n        revert: 'invalid'\n    });\n    droppable.droppable({\n        accept: \".draggable\"\n    });\n    index++;\n    droppable.append(draggable);\n    td.append(droppable);\n    return td;\n</code></pre>\n\n<p>}</p>\n\n<p>Basically what i am trying to achieve is swappable tiles in a table and i'm pretty sure the js in the event handler is rubbish but we'll deal with that once it's firing.</p>\n\n<p>Oh and im using:\n<a href=\"https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js\" rel=\"nofollow\">https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js</a>\nhttps://ajax.googleapis.com/ajax/libs/jqueryui/1.8.13/jquery-ui.min.js</p>\n\n<p>Any comments would be appreciated.\nThanks :)</p>\n\n<p>EDIT:</p>\n\n<p>I was being really stupid. I was putting the \"drop\" and \"over\" events in the attributes of the element, not the options of the droppable!</p>\n"
    },
    {
      "tags": [
        "javascript",
        "google-maps",
        "google"
      ],
      "answer_count": 2,
      "accepted_answer_id": 6413747,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6413541/timeline",
      "question_comments_url": "/questions/6413541/comments",
      "question_answers_url": "/questions/6413541/answers",
      "question_id": 6413541,
      "owner": {
        "user_id": 478489,
        "user_type": "registered",
        "display_name": "amix.pal",
        "reputation": 10,
        "email_hash": "18018fe3a71122bc0648943d6892ffb3"
      },
      "creation_date": 1308583220,
      "last_edit_date": 1308583832,
      "last_activity_date": 1308584113,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 21,
      "score": 0,
      "community_owned": false,
      "title": "Put an image on Google map",
      "body": "<p>I am creating a web page which shows the Google map using java script. I did this part now i have to pun an image on that map as a icon.Would you please tell me how will i able to do that?</p>\n\n<p>\n\n    </p>\n\n<pre><code>&lt;script language=\"javascript\"&gt;\n    var lat=1067;\n    var lon=-110;\n\n    function load() {\n      if (GBrowserIsCompatible()) {\n        var map = new GMap2(document.getElementById(\"map\"));\n        map.setCenter(new GLatLng(lat, lon), 13);\n      }\n    }\n    function map(position) {\n        lat = position.coords.latitude;\n        lon = position.coords.longitude;\n        load();\n    }\n    function get_location() {\n        navigator.geolocation.getCurrentPosition(map);\n    }\n    &lt;/script&gt;\n</code></pre>\n\n<p>\n\nSearch</p>\n\n\n\n<p>Thanks\nAmit Pal</p>\n"
    },
    {
      "tags": [
        "javascript",
        "image-processing",
        "webgl"
      ],
      "answer_count": 0,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6413744/timeline",
      "question_comments_url": "/questions/6413744/comments",
      "question_answers_url": "/questions/6413744/answers",
      "question_id": 6413744,
      "owner": {
        "user_id": 400327,
        "user_type": "registered",
        "display_name": "Trevor",
        "reputation": 8,
        "email_hash": "a26652004f1b6ed7f5764189ce722823"
      },
      "creation_date": 1308584078,
      "last_activity_date": 1308584078,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 6,
      "score": 0,
      "community_owned": false,
      "title": "Looking to access 16-bit image data in Javascript/WebGL",
      "body": "<p>I'm trying to download 16-bit image data from a server and push it into a WebGL texture without browser plug-ins. texImage2d will work with: ImageData, HTMLImageElement, HTMLCanvasElement, or HTMLVideoElement. I'm looking for some javascript (a library or code sample) which can decode 16-bit TIFF or similar (hdf5, etc.) image data into one of these object types.</p>\n\n<p>I have no problem doing this is 8-bit per channel RGB by using an  to load a PNG but this doesn't work with 16-bit per channel data since there aren't any \"standard\" browser supported image formats which are 16-bit.</p>\n"
    },
    {
      "tags": [
        "javascript",
        "jquery",
        "function",
        "variables",
        "passing"
      ],
      "answer_count": 3,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6413440/timeline",
      "question_comments_url": "/questions/6413440/comments",
      "question_answers_url": "/questions/6413440/answers",
      "question_id": 6413440,
      "owner": {
        "user_id": 389271,
        "user_type": "registered",
        "display_name": "android.nick",
        "reputation": 696,
        "email_hash": "7fb8e97ca4d0322cdad566c81437e38a"
      },
      "creation_date": 1308582821,
      "last_activity_date": 1308583854,
      "up_vote_count": 1,
      "down_vote_count": 0,
      "view_count": 22,
      "score": 1,
      "community_owned": false,
      "title": "Jquery: passing variable to the next chained function, is this the correct way?",
      "body": "<p>I want to know if this is correct.</p>\n\n<pre><code>$('.myfilter').focus(function(){\n    var length = $(this).val().length; \n    if (length == 0) {\n        dosomething\n    }\n}).blur(function(length){\n    if (length == 0) {\n        dowhatever\n            }\n})\n</code></pre>\n\n<p>Above i've simplified my code, im just checking if <code>length == 0</code> on focus and blur for my input. notice how I declared <code>length</code> in focus, but not in blur, but i added the variable name inside <code>.blur(function(length){</code>. Is this the better way to get <code>length</code> accessible in <code>.blur</code> without having to re-declare <code>var length = $(this).val().length;</code> in .blur?</p>\n\n<p>as opposed to this:</p>\n\n<pre><code>$('.myfilter').focus(function(){\n    var length = $(this).val().length; \n    if (length == 0) {\n        dosomething\n    }\n})\n\n$('.myfilter').blur(function(length){\n    var length = $(this).val().length;\n    if (length == 0) {\n        dowhatever\n            }\n})\n</code></pre>\n\n<p>the first code block is the better way to do this?</p>\n"
    },
    {
      "tags": [
        "javascript",
        "jquery",
        "safari",
        "google-chrome",
        "webkit"
      ],
      "answer_count": 14,
      "accepted_answer_id": 670433,
      "favorite_count": 24,
      "question_timeline_url": "/questions/318630/timeline",
      "question_comments_url": "/questions/318630/comments",
      "question_answers_url": "/questions/318630/answers",
      "question_id": 318630,
      "owner": {
        "user_id": 27623,
        "user_type": "registered",
        "display_name": "Frank Bannister",
        "reputation": 207,
        "email_hash": "9209ea2a036a546d315da5600f0025b9"
      },
      "creation_date": 1227642278,
      "last_activity_date": 1308583654,
      "up_vote_count": 26,
      "down_vote_count": 0,
      "view_count": 51874,
      "score": 26,
      "community_owned": false,
      "title": "Get real image width and height with Javascript in Safari/Chrome?",
      "body": "<p>I am creating a jQuery plugin.</p>\n\n<p>How do I get real image width and height with Javascript in Safari?</p>\n\n<p>Following works with Firefox 3, IE7 and Opera 9:</p>\n\n<pre><code>var pic = $(\"img\")\n\n// need to remove these in of case img-element has set width and height\npic.removeAttr(\"width\"); \npic.removeAttr(\"height\");\n\nvar pic_real_width = pic.width();\nvar pic_real_height = pic.height();\n</code></pre>\n\n<p>But in Webkit browsers like Safari and Google Chrome values are 0...</p>\n\n<p>Doing this on server side is not an option.</p>\n"
    },
    {
      "tags": [
        "php",
        "javascript",
        "web-development"
      ],
      "answer_count": 4,
      "favorite_count": 1,
      "question_timeline_url": "/questions/6411964/timeline",
      "question_comments_url": "/questions/6411964/comments",
      "question_answers_url": "/questions/6411964/answers",
      "question_id": 6411964,
      "owner": {
        "user_id": 213738,
        "user_type": "registered",
        "display_name": "Mattis",
        "reputation": 484,
        "email_hash": "80fe3a01e22a86fa6c652ee7d75d5b31"
      },
      "creation_date": 1308576818,
      "last_edit_date": 1308583543,
      "last_activity_date": 1308583543,
      "up_vote_count": 1,
      "down_vote_count": 1,
      "view_count": 54,
      "score": 0,
      "community_owned": false,
      "title": "Should I rely on externally-hosted services?",
      "body": "<p>I am wondering over the dangers / difficulties in using external services like <a href=\"http://code.google.com/apis/chart/\" rel=\"nofollow\">Google Chart</a> in my production state website.</p>\n\n<p>With external services I mean them that you can't download and host on your own server.</p>\n\n<p><strong>(-)</strong> Potentially the Google service can be down when my site is up.</p>\n\n<p><strong>(+)</strong> I don't have to develop those particular systems for new browser technologies, hopefully Google will do that for me.</p>\n\n<p><strong>(-)</strong> Extra latency while my site fetch the data from the google servers.</p>\n\n<p>What else? Is it worth spending time and money to develop my own systems to be more in control of things?</p>\n"
    },
    {
      "tags": [
        "javascript",
        "unit-testing",
        "visual-studio-2010"
      ],
      "answer_count": 3,
      "accepted_answer_id": 6413599,
      "favorite_count": 4,
      "question_timeline_url": "/questions/3827055/timeline",
      "question_comments_url": "/questions/3827055/comments",
      "question_answers_url": "/questions/3827055/answers",
      "question_id": 3827055,
      "owner": {
        "user_id": 50660,
        "user_type": "registered",
        "display_name": "Matthew Manela",
        "reputation": 3812,
        "email_hash": "288e49ea9ee1aa8516598465d9473033"
      },
      "creation_date": 1285809580,
      "last_activity_date": 1308583475,
      "up_vote_count": 11,
      "down_vote_count": 0,
      "view_count": 564,
      "score": 11,
      "community_owned": false,
      "title": "Run JavaScript unit tests inside of Visual Studio 2010",
      "body": "<p>I have been searching for a good way to run JavaScript unit tests inside of the Visual Studio 2010 IDE.  I currently use <a href=\"http://www.testdriven.net/\" rel=\"nofollow\">TestDriven.net</a> to run my C# units tests and it is very convenient to be able to quickly get the result of my tests in the output pane. I would love to find a similar experience for JavaScript (ideally working with TestDriven.net).</p>\n\n<p>I have read about different solutions that let you execute JavaScrpt unit tests.  Some have their own JS engine while others like <a href=\"http://code.google.com/p/js-test-driver/\" rel=\"nofollow\">JS-Test-Driver</a> are able to send the code to the browsers and fetch the results.  But I have yet to see something that is integrated into VS 2010.</p>\n\n<p>Does anyone know of an extension that might do this?</p>\n"
    },
    {
      "tags": [
        "javascript",
        "dojo",
        "include-path",
        "dojo.data"
      ],
      "answer_count": 1,
      "accepted_answer_id": 6413578,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6413327/timeline",
      "question_comments_url": "/questions/6413327/comments",
      "question_answers_url": "/questions/6413327/answers",
      "question_id": 6413327,
      "owner": {
        "user_id": 420613,
        "user_type": "registered",
        "display_name": "imran tariq",
        "reputation": 338,
        "email_hash": "67ebeef7b7b8d5533f5caf77074c62b8"
      },
      "creation_date": 1308582333,
      "last_activity_date": 1308583401,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 7,
      "score": 0,
      "community_owned": false,
      "title": "DOJO include files a directory back",
      "body": "<p>I have dojo files in <code>resources/js/dojo1.6/dojo/dojo.js</code></p>\n\n<p>I have another file here <code>resources/js/pages/file1.js</code></p>\n\n<p>This file requires another file which is located at <code>resources/js/folder/file2.js</code></p>\n\n<p>This is how I am including it <code>dojo.require('folder.file2');</code></p>\n\n<p>So these three folder are in hirarchy</p>\n\n<p><strong>dojo1.6</strong>, <strong>pages</strong> and <strong>folder</strong></p>\n\n<p>When I run application</p>\n\n<p>I got the following error </p>\n\n<pre><code>File not found: /resources/js/dojo1.6/folder/file2.js\n</code></pre>\n\n<p>How can I overcome this error.</p>\n"
    },
    {
      "tags": [
        "php",
        "javascript",
        "ajax",
        "undo-redo"
      ],
      "answer_count": 2,
      "accepted_answer_id": 6394284,
      "favorite_count": 1,
      "question_timeline_url": "/questions/4508230/timeline",
      "question_comments_url": "/questions/4508230/comments",
      "question_answers_url": "/questions/4508230/answers",
      "question_id": 4508230,
      "owner": {
        "user_id": 380403,
        "user_type": "registered",
        "display_name": "Bakaburg",
        "reputation": 112,
        "email_hash": "02c4213274d414cb8da4f34108f355db"
      },
      "creation_date": 1293013795,
      "last_activity_date": 1308583384,
      "up_vote_count": 1,
      "down_vote_count": 0,
      "view_count": 65,
      "score": 1,
      "community_owned": false,
      "title": "php/ajax user actions undo manager",
      "body": "<p>does exist a library that gives you undo/redo capability with history for a web app? An idea would be a php/javascript/ajax system in which you can register for every user action an opposite action and the variable state (like a normal undo manager!). and it should work both at client level and server level.</p>\n\n<p>Did i ask too much?</p>\n"
    },
    {
      "tags": [
        "javascript",
        "extjs",
        "grid",
        "columns",
        "extjs4"
      ],
      "answer_count": 1,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6409972/timeline",
      "question_comments_url": "/questions/6409972/comments",
      "question_answers_url": "/questions/6409972/answers",
      "question_id": 6409972,
      "owner": {
        "user_id": 322251,
        "user_type": "registered",
        "display_name": "shane87",
        "reputation": 469,
        "email_hash": "90611479ceffc2da2d62d5f6134a5565"
      },
      "creation_date": 1308566525,
      "last_activity_date": 1308583282,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 14,
      "score": 0,
      "community_owned": false,
      "title": "How to dynamically set the grids CheckBox Selection Model in ExtJs4?",
      "body": "<p>This leads on from <a href=\"http://stackoverflow.com/questions/6277991/reconfiguring-grid-columns-in-extjs4-selmodel-disappears\">my previous question</a>.<br>\nI initialize a grid with a CheckBox Selection Model, however when I reconfigure the grid the Check Box Selection Model visaully dissapears.<br>\nWhat I want to do is dynamically add a CheckBox Selection Model to a grid after reconfiguring the grids columns, and visually display it.</p>\n\n<p>I have tried something like this:</p>\n\n<pre><code>var sm = new Ext.selection.CheckboxModel();\ngrid.selModel = sm;\ngrid.doLayout();\n</code></pre>\n"
    },
    {
      "tags": [
        "javascript"
      ],
      "answer_count": 0,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6413549/timeline",
      "question_comments_url": "/questions/6413549/comments",
      "question_answers_url": "/questions/6413549/answers",
      "question_id": 6413549,
      "owner": {
        "user_id": 806914,
        "user_type": "registered",
        "display_name": "Anthony Burns",
        "reputation": 1,
        "email_hash": "e7334b63d88530e1cdcb1eac6fced20f"
      },
      "creation_date": 1308583263,
      "last_activity_date": 1308583263,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 6,
      "score": 0,
      "community_owned": false,
      "title": "Facebook uid scripts",
      "body": "<p>is there an existing java script to enable admins of trade pages to scan fb uids for know scammers, so we can ban known scammers id<code>s before they managed to join or scam on newer trade pages? im not a scripter in any way but do admin a trade page and as far as i know there is a script but only for sale from another trade page, i was hopeing to get it free, we are growing daily and there are larger sites with larger banned scammers we want to be able to check for these id</code>sd and ban nefore they can scam on our group page, thank you for any info you can give</p>\n"
    },
    {
      "tags": [
        "javascript",
        "getelementbyid"
      ],
      "answer_count": 2,
      "accepted_answer_id": 6413526,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6413512/timeline",
      "question_comments_url": "/questions/6413512/comments",
      "question_answers_url": "/questions/6413512/answers",
      "question_id": 6413512,
      "owner": {
        "user_id": 604843,
        "user_type": "registered",
        "display_name": "Ryan",
        "reputation": 432,
        "email_hash": "8d618d6102a868921c256b2d798aae45"
      },
      "creation_date": 1308583116,
      "last_activity_date": 1308583232,
      "up_vote_count": 1,
      "down_vote_count": 0,
      "view_count": 32,
      "score": 1,
      "community_owned": false,
      "title": "Javascript: Weird \"getElementById\"",
      "body": "<p>I have a function that populates a pages with something like this</p>\n\n<pre><code>&lt;span id=\"span_title_'+result_no+'\"&gt;'+title+'&lt;/span&gt;\n</code></pre>\n\n<p>and then I have another function that has this:</p>\n\n<pre><code>      document.getElementById(\"span_title_\"+which_table).innerHTML=\"asg\";\nalert(document.getElementById(\"span_title_\"+which_table).value);\n</code></pre>\n\n<p>The strange thing is the first (innerHTML) call works perfectly, the second one, the alert, gives me \"<code>undefined</code>\"</p>\n\n<p>Any idea why this is?</p>\n"
    },
    {
      "tags": [
        "javascript",
        "jquery"
      ],
      "answer_count": 8,
      "accepted_answer_id": 6413302,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6413265/timeline",
      "question_comments_url": "/questions/6413265/comments",
      "question_answers_url": "/questions/6413265/answers",
      "question_id": 6413265,
      "owner": {
        "user_id": 256439,
        "user_type": "registered",
        "display_name": "Sandra Schlichting",
        "reputation": 1327,
        "email_hash": "c4b17df9c9b2f33a96eb84f92054f708"
      },
      "creation_date": 1308582073,
      "last_activity_date": 1308583161,
      "up_vote_count": 1,
      "down_vote_count": 0,
      "view_count": 49,
      "score": 1,
      "community_owned": false,
      "title": "Appending to <td> instead of below <tr>. What's wrong?",
      "body": "<p>In this jsFiddle</p>\n\n<p><a href=\"http://jsfiddle.net/littlesandra88/tZqYX/\" rel=\"nofollow\">http://jsfiddle.net/littlesandra88/tZqYX/</a></p>\n\n<p>would I like that a new <code>&lt;tr&gt;</code> is inserted below the one where \"Details\" is clicked.</p>\n\n<p>I do</p>\n\n<pre><code>$('.row').append(\"&lt;tr&gt;&lt;td&gt;It worked&lt;/td&gt;&lt;/tr&gt;\");\n</code></pre>\n\n<p>but this results in</p>\n\n<pre><code>&lt;tr class=\"row\"&gt;\n  &lt;td class=\"edit-column\"&gt;&lt;a href=\"javascript:addRemove('7249');\"&gt;Details&lt;/a&gt; &lt;input value=\"Save\" type=\"submit\"&gt;&lt;/td&gt;\n&lt;tr&gt;&lt;td&gt;It worked&lt;/td&gt;&lt;/tr&gt;&lt;/tr&gt;\n</code></pre>\n\n<p>where I was hoping for</p>\n\n<pre><code>&lt;tr class=\"row\"&gt;\n  &lt;td class=\"edit-column\"&gt;&lt;a href=\"javascript:addRemove('7249');\"&gt;Details&lt;/a&gt; &lt;input value=\"Save\" type=\"submit\"&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;&lt;td&gt;It worked&lt;/td&gt;&lt;/tr&gt;\n</code></pre>\n\n<p>Any idea how to fix this?</p>\n"
    },
    {
      "tags": [
        "javascript",
        "jquery",
        "plugins"
      ],
      "answer_count": 1,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6411194/timeline",
      "question_comments_url": "/questions/6411194/comments",
      "question_answers_url": "/questions/6411194/answers",
      "question_id": 6411194,
      "owner": {
        "user_id": 42636,
        "user_type": "registered",
        "display_name": "pistacchio",
        "reputation": 2686,
        "email_hash": "1cf6e58dae064fc449e6840ffdb90306"
      },
      "creation_date": 1308573193,
      "last_edit_date": 1308580136,
      "last_activity_date": 1308582994,
      "up_vote_count": 2,
      "down_vote_count": 0,
      "view_count": 25,
      "score": 2,
      "community_owned": false,
      "title": "Jquery plugin - Tree Context menu",
      "body": "<p>Can you suggest a context-menu plugin that supports nesting menu items? When clicking on an item, if the item has sub-items, it should open a secondary menu.</p>\n\n<p><strong>EDIT</strong></p>\n\n<p>Like <a href=\"http://www.contextmenu.net/screenshot/screenshot_windows_explorer_shell_context_menu.jpg\" rel=\"nofollow\">this</a> but for jquery</p>\n"
    },
    {
      "tags": [
        "javascript",
        "jquery",
        "css",
        "internet-explorer"
      ],
      "answer_count": 3,
      "accepted_answer_id": 6413060,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6413018/timeline",
      "question_comments_url": "/questions/6413018/comments",
      "question_answers_url": "/questions/6413018/answers",
      "question_id": 6413018,
      "owner": {
        "user_id": 749288,
        "user_type": "registered",
        "display_name": "sergzach",
        "reputation": 169,
        "email_hash": "50ff6dd1fd1fb4c7fd0a2cee3be9ff0a"
      },
      "creation_date": 1308581059,
      "last_activity_date": 1308582876,
      "up_vote_count": 2,
      "down_vote_count": 0,
      "view_count": 23,
      "score": 2,
      "community_owned": false,
      "title": "Internet Explorer: how to escape extra carriage return after editing Textarea?",
      "body": "<p>We have a <em>multiline textarea</em> in Internet Explorer. </p>\n\n<p>If we check it's content after the next then everything is correct (there are no extra carriage returns in textarea):</p>\n\n<pre><code>document.getElementById( 'text-area' ).value = \"Hello,\\nWorld!\";\n</code></pre>\n\n<p>But if we set caret in the beginning position of the second line (<em>in Internet Explorer, not in the code</em>) and press <em>tab</em> key there is <em>extra carriage character</em> (there is a string dump on <em>keydown</em> below):</p>\n\n<pre><code>value[0]='H'\nvalue[1]='e'\nvalue[2]='l'\nvalue[3]='l'\nvalue[4]='o'\nvalue[5]=','\nvalue[6]='\\r'\nvalue[7]='\\n'\nvalue[8]='W'\nvalue[9]='o'\nvalue[10]='r'\nvalue[11]='l'\nvalue[12]='d'\nvalue[13]='!'\n</code></pre>\n\n<p>It's a problem because other browsers don't insert <em>extra carriage return</em>.</p>\n\n<p>Do you know how to prevent this in Internet Explorer? With help of <em>CSS</em> or <em>Javascript</em>.</p>\n"
    },
    {
      "tags": [
        "javascript",
        "mysql",
        "php5"
      ],
      "answer_count": 2,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6410224/timeline",
      "question_comments_url": "/questions/6410224/comments",
      "question_answers_url": "/questions/6410224/answers",
      "question_id": 6410224,
      "owner": {
        "user_id": 786591,
        "user_type": "registered",
        "display_name": "Rignesh Tambakuwala",
        "reputation": 1,
        "email_hash": "5faba9a6598ed24d2f1ff4eaaac0cfe8"
      },
      "creation_date": 1308567882,
      "last_activity_date": 1308582858,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 39,
      "score": 0,
      "community_owned": false,
      "title": "to get value from database table into select box",
      "body": "<p>i m creating a combo box which gets value from mysql database table.\n  here is a sample code which i m implementing but it will not populates selectbox values.</p>\n\n<pre><code> mydata +='&lt;div class=\"content  nodisplay\"&gt;&lt;div class=\"row\"&gt;&lt;div class=\"label\" style=\"font-size:22px;\"&gt;Subject&lt;/div&gt;&lt;div class=\"data\"&gt;\n&lt;select id=\"fillsubject\" name=\"fillsubject\"&gt;';\n$.post(document.URL,qstring,function(data){\n\n        var subjects =  $(data).filter('.subjects');\n\n        $.each(subjects,function(index,value){\n            var subid = $(this).attr('id');\n            var subname = $(this).text();\n            mydata += \"&lt;option value='\"+subid+\"'&gt;\"+subname+\"&lt;/option&gt;\";\n            //mydata += \"&lt;option value='english'&gt;english&lt;/option&gt;\";\n        });\n\n});\nmydata +='&lt;/select&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;';     \n</code></pre>\n"
    },
    {
      "tags": [
        "javascript"
      ],
      "answer_count": 2,
      "accepted_answer_id": 4186100,
      "favorite_count": 5,
      "question_timeline_url": "/questions/4185821/timeline",
      "question_comments_url": "/questions/4185821/comments",
      "question_answers_url": "/questions/4185821/answers",
      "question_id": 4185821,
      "owner": {
        "user_id": 425275,
        "user_type": "registered",
        "display_name": "Šime Vidas",
        "reputation": 14281,
        "email_hash": "a9db2cbc6d4e589aec2d25f67771b85e"
      },
      "creation_date": 1289834520,
      "last_edit_date": 1308582811,
      "last_activity_date": 1308582811,
      "up_vote_count": 1,
      "down_vote_count": 0,
      "view_count": 213,
      "score": 1,
      "community_owned": false,
      "title": "Is it possible to programmatically detect the caret position within a <input type=text> element?",
      "body": "<p>Assuming a regular <code>&lt;input type=text&gt;</code> text-box with data in it.  </p>\n\n<p>Is it possible to detect (via JavaScript) the position of the text-coursor inside that text-box?  </p>\n\n<p>I am able to detect an ARROW LEFT or ARROW RIGHT keydown event - but how to detect the cursor location?  </p>\n\n<p><em><strong>Why I need this:</em></strong>  </p>\n\n<p>I have a dynamic text-box here: <a href=\"http://vidasp.net/tinydemos/dynamic-textbox.html\" rel=\"nofollow\">http://vidasp.net/tinydemos/dynamic-textbox.html</a><br>\nIt works great, however there are two scenarios that I would like to fix:  </p>\n\n<ol>\n<li>when the cursor is at the beginning of the text-box and the user presses BACKSPACE </li>\n<li>when the cursor is at the end of the text-box and the user presses DELETE </li>\n</ol>\n\n<p>(In both cases, the text-box must contain data for the effect to be observable.)</p>\n"
    },
    {
      "tags": [
        "javascript",
        "jquery",
        "this"
      ],
      "answer_count": 4,
      "accepted_answer_id": 6413378,
      "favorite_count": 1,
      "question_timeline_url": "/questions/6413356/timeline",
      "question_comments_url": "/questions/6413356/comments",
      "question_answers_url": "/questions/6413356/answers",
      "question_id": 6413356,
      "owner": {
        "user_id": 653897,
        "user_type": "registered",
        "display_name": "Briz",
        "reputation": 161,
        "email_hash": "1f396684d672cf556c9e1532c1e0af0a"
      },
      "creation_date": 1308582435,
      "last_activity_date": 1308582807,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 62,
      "score": 0,
      "community_owned": false,
      "title": "What is the \"this\" in an example JS function?",
      "body": "<p>Below is the entire contents of a JS/JQuery file. I didn't write it, but I'm trying to add on to it. I am having trouble understanding what <code>this</code> is referring to. I haven't seen functions set up in this style before (<code>SmartPhone = function() {}</code>)</p>\n\n<pre><code>SmartPhone = function()\n{\n    this.miniMap = new GameModeMap();\n\n    this.init = function()\n    {\n        var self=this;\n        var $PhoneContainer = $(\"#PhoneContainer\");\n        $PhoneContainer.append(\"&lt;div id='PhoneScreen'&gt;&lt;/div&gt;\");\n        $PhoneContainer.append(\"&lt;div class='PhoneButton'&gt;&lt;/div&gt;\");\n        $('.PhoneButton').click(function(){self.toggleClicked()});\n\n        this.miniMap.init(\"#PhoneScreen\");\n\n        //append the appMenu\n        $(\"#PhoneScreen\").append(\"&lt;div id='AppMenu'&gt;&lt;/div&gt;\");\n        $(\"#AppMenu\").hide();\n        initMenu();\n        //toggleClicked();\n    }\n\n    this.toggleClicked = function() \n    {\n        console.log(this);\n        $('#PhoneContainer').toggleClass ('clicked');\n        $('#PhoneScreen').toggleClass ('vertical');\n        this.miniMap.toggle();\n        $('#AppMenu').toggle();\n    }\n\n    this.init();\n}\n</code></pre>\n"
    },
    {
      "tags": [
        "javascript",
        "jquery",
        "visual-studio-2008"
      ],
      "answer_count": 0,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6413416/timeline",
      "question_comments_url": "/questions/6413416/comments",
      "question_answers_url": "/questions/6413416/answers",
      "question_id": 6413416,
      "owner": {
        "user_id": 783175,
        "user_type": "registered",
        "display_name": "FishBasketGordo",
        "reputation": 206,
        "email_hash": "1a033f15f829f9d5b590a40dccc66559"
      },
      "creation_date": 1308582722,
      "last_activity_date": 1308582722,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 11,
      "score": 0,
      "community_owned": false,
      "title": "How to sort page elements by z-index while debugging?",
      "body": "<p>I'm debugging a JavaScript method on an ASP.NET 3.5 web site using jQuery in Visual Studio 2008. As a sanity check, I would like to look at a list of the page elements sorted by z-index. What's a good/easy way to do this? I would prefer an expression that I can input into the Watch window, but I'm open to other suggestions.</p>\n"
    },
    {
      "tags": [
        "javascript",
        "html",
        "html5",
        "geolocation"
      ],
      "answer_count": 0,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6412566/timeline",
      "question_comments_url": "/questions/6412566/comments",
      "question_answers_url": "/questions/6412566/answers",
      "question_id": 6412566,
      "owner": {
        "user_id": 635784,
        "user_type": "registered",
        "display_name": "Codecraft",
        "reputation": 861,
        "email_hash": "e4a1f83ad5fb19e0cfef8d818c4a02c6"
      },
      "creation_date": 1308579152,
      "last_edit_date": 1308582704,
      "last_activity_date": 1308582704,
      "up_vote_count": 2,
      "down_vote_count": 0,
      "view_count": 16,
      "score": 2,
      "community_owned": false,
      "title": "Determining whether html5 geolocation function is available AND whether it knows where you are?",
      "body": "<p>I'm experimenting with HTML5 geolocation, and embedded a small test script into a page to return my present co-ordinates.</p>\n\n<p>The current application I have in mind for using this is as a 'nice to have' feature on site i'm working on - it includes a 'find my nearest' lookup on some locations, and I figured that if you had a location aware device, I could easily include 'to my current location' alongside the normal 'to my postal/zip code'.  I'm not interested in loading a bunch of extra libraries and fallbacks for such a small and non-essential feature.  If you have a capable device, great, if not, you won't ever see the option.</p>\n\n<p>So I tried the script on an iPad, and as expected - I was prompted for permission to use my present location, to which I agreed, and my test script returned my present location.  Total win.</p>\n\n<p>I tried the same on my desktop, since i'm using Firefox 4 and its a HTML5 compliant browser.  It asked me if I wanted to share my location, and then promptly returned the error that it didn't know my location (because its a desktop computer and has no GPS).  I thought this rendered the original question of 'do you want to share your location' somewhat pointless - it could needlessly annoy people who might have thought they could use a feature that they in fact can't.</p>\n\n<p>So, what is a reliable technique to detect if:</p>\n\n<blockquote>\n  <p>a) The browser can access HTML5 geolocation </p>\n  \n  <p><strong>AND</strong> </p>\n  \n  <p>b) The browser knows or can find out what the users location is.</p>\n</blockquote>\n\n<p>Without actually calling the geolocation function beforehand, and asking the user an annoying, and unnecessary question?</p>\n\n<p>For a) i'm simply using:</p>\n\n<pre><code>if (navigator.geolocation) {\n     navigator.geolocation.getCurrentPosition(showCoords,handleGeoErrors);    \n}\n</code></pre>\n\n<p>But for b) the only answer I have involves having called getCurrentPosition, which triggers the question to the user.</p>\n\n<p>Any thoughts on this, anyone?</p>\n"
    },
    {
      "tags": [
        "javascript",
        "arrays",
        "json",
        "parsing"
      ],
      "answer_count": 1,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6403354/timeline",
      "question_comments_url": "/questions/6403354/comments",
      "question_answers_url": "/questions/6403354/answers",
      "question_id": 6403354,
      "owner": {
        "user_id": 773110,
        "user_type": "registered",
        "display_name": "zalath",
        "reputation": 1,
        "email_hash": "7cc5677dd2e2f4d1cc7b86c52d053ae8"
      },
      "creation_date": 1308497730,
      "last_edit_date": 1308498024,
      "last_activity_date": 1308582656,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 59,
      "score": 0,
      "community_owned": false,
      "title": "javascript : parsing multi-level json array",
      "body": "<p>I have a asp.net web service that returns a multi-level array.</p>\n\n<p>the json string is parse using the json2.js lib :</p>\n\n<pre><code>var donnee = JSON.parse(msg.d);\n</code></pre>\n\n<p>the 1st level parsing is ok but the 2nd level array (data) remains as an array of objects</p>\n\n<blockquote>\n  <p>? donnee[0]</p>\n</blockquote>\n\n<pre><code>{...}\ncolor: \"#0000CD\"\ndata: [[object Object],[object Object]]\nlabel: \"formol\"\ntype: \"traitement\"\n</code></pre>\n\n<blockquote>\n  <p>? donnee[0].data</p>\n</blockquote>\n\n<pre><code>[[object Object],[object Object]]\n[0]: {...}\n[1]: {...}\n</code></pre>\n\n<blockquote>\n  <p>? donnee[0].data[0]</p>\n</blockquote>\n\n<pre><code>{...}\n_l: \"\"\n_x: 7\n_y: 25\n</code></pre>\n\n<p>whereas I need an array of data e.g.</p>\n\n<blockquote>\n  <p>? donnee[0]</p>\n</blockquote>\n\n<pre><code>{...}\nlabel: \"traitement formol 2\"\ntype: \"traitement\"\ncolor: \"#0000CD\"\ndata: [7,25,,7,40,formol]\n</code></pre>\n\n<blockquote>\n  <p>? donnee[0].data</p>\n</blockquote>\n\n<pre><code>[7,25,,7,40,formol]\n[0]: [7,25,]\n[1]: [7,40,formol]\n</code></pre>\n\n<blockquote>\n  <p>? donnee[0].data[0] </p>\n</blockquote>\n\n<pre><code>[7,25,]\n[0]: 7\n[1]: 25\n[2]: \"\"\n</code></pre>\n\n<p>what is the best way to decode/parse all the levels of the json string at once ?</p>\n\n<p>best regards</p>\n"
    },
    {
      "tags": [
        "javascript",
        "jquery",
        "ajax",
        "post"
      ],
      "answer_count": 1,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6174688/timeline",
      "question_comments_url": "/questions/6174688/comments",
      "question_answers_url": "/questions/6174688/answers",
      "question_id": 6174688,
      "owner": {
        "user_id": 755464,
        "user_type": "registered",
        "display_name": "user755464",
        "reputation": 11,
        "email_hash": "31cbea1bc9ec690e95a60826eb6328a5"
      },
      "creation_date": 1306748840,
      "last_edit_date": 1308582527,
      "last_activity_date": 1308582527,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 35,
      "score": 0,
      "community_owned": false,
      "title": "jquery ajax post call issue with special chracters [solved]",
      "body": "<p>Solution: i guess the problem was related to firefox as a browser. I solved making the ajax call pass through a php proxy..</p>\n\n<p>i have a form with two data fields (a checkbox and a textarea) sent via an ajax call. \nThe tomcat server response is an html page with some javascript code in it. I must use the POST method given the amount of data to be sent (if i could use GET i woud not have this issue!).\nThe problem arises if i send accented characters (èàòù) throught the textarea, for which i get weird question marks in place of them.\nFrom the firebug console i can see that both sent and received data are utf-8 encoded:</p>\n\n<p>SENT DATA: Content-Type application/x-www-form-urlencoded; charset=UTF-8 \nRECEIVED DATA: text/html;charset=UTF-8</p>\n\n<p>The problem does not show in chrome or IE, but only in firefox and on all browsers on mac. HAve anybody any suggestione about this?</p>\n\n<p>Thanks\nVitto</p>\n"
    },
    {
      "tags": [
        "javascript",
        "jquery"
      ],
      "answer_count": 2,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6413240/timeline",
      "question_comments_url": "/questions/6413240/comments",
      "question_answers_url": "/questions/6413240/answers",
      "question_id": 6413240,
      "owner": {
        "user_id": 414847,
        "user_type": "registered",
        "display_name": "Rene Zammit",
        "reputation": 45,
        "email_hash": "07647a7ad89294eb2527e03afb5e450a"
      },
      "creation_date": 1308581976,
      "last_activity_date": 1308582489,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 11,
      "score": 0,
      "community_owned": false,
      "title": "seperate validation of two forms with jquery",
      "body": "<p>I have two forms in one page and i would like to validate each form seperatly DEPENDING on what the user fills. So basically the user must fill only ONE form and NOT both of them...SO basically if the user fills up form number 1, the validation will be on form 1 ONLY..</p>\n\n<p>Below please find the code of both forms:</p>\n\n<pre><code>    &lt;form action=\"/registration.flow\" method=\"post\"  id=\"formElem1\"  name=\"formElem1\" autocomplete='off'&gt;\n  &lt;label for=\"Name_First\"&gt;First Name:&lt;/label&gt;\n  &lt;input type=\"text\" name=\"Name_First\" id=\"Name_First\" value=\"\" class=\"required\" maxlength=\"128\"  /&gt;\n  &lt;label for=\"Name_Last\"&gt;Last Name:&lt;/label&gt;\n  &lt;input type=\"text\" name=\"Name_Last\" id=\"Name_Last\" value=\"\" class=\"required\" maxlength=\"128\" /&gt;\n\n  &lt;button id=\"registerButton\" type=\"submit\"&gt;Register&lt;/button&gt;\n&lt;/form&gt;\n\n\n&lt;form action=\"/registration.flow\" method=\"post\"  id=\"formElem2\"  name=\"formElem2\" autocomplete='off'&gt;\n  &lt;label for=\"Name_First\"&gt;First Name:&lt;/label&gt;\n  &lt;input type=\"text\" name=\"Name_First\" id=\"Name_First\" value=\"\" class=\"required\" maxlength=\"128\"  /&gt;\n  &lt;label for=\"Name_Last\"&gt;Last Name:&lt;/label&gt;\n  &lt;input type=\"text\" name=\"Name_Last\" id=\"Name_Last\" value=\"\" class=\"required\" maxlength=\"128\" /&gt;\n\n   &lt;button id=\"registerButton\" type=\"submit\"&gt;Register&lt;/button&gt;\n&lt;/form&gt;\n</code></pre>\n\n<p>Can someone help me please?? THANKS</p>\n"
    },
    {
      "tags": [
        "javascript",
        "coffeescript"
      ],
      "answer_count": 1,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6412151/timeline",
      "question_comments_url": "/questions/6412151/comments",
      "question_answers_url": "/questions/6412151/answers",
      "question_id": 6412151,
      "owner": {
        "user_id": 353998,
        "user_type": "registered",
        "display_name": "magicshui",
        "reputation": 53,
        "email_hash": "61848af6a10034cf09426b843e01efc3"
      },
      "creation_date": 1308577423,
      "last_activity_date": 1308582484,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 26,
      "score": 0,
      "community_owned": false,
      "title": "why does the bracket works in coffeescript when bugs came",
      "body": "<p>If i want to get a js code like this which compiles from coffeescript:</p>\n\n<pre><code>  var sortableTodos = new Sortables(\"todo-list\", {\nconstrain: true,\nclone: true,\nhandle: \".todo-content\",\nonComplete: function(ele){\n  sortableTodos.serialize(false, function(element, index){\n    todo = Todos.get(element.getProperty(\"id\").replace(\"todo-\", \"\"));\n    todo.save({\"order\": index});\n  });\n}\n});\n</code></pre>\n\n<p>I can't write coffee code like below:</p>\n\n<pre><code>sortableTodos = new Sortables(\n\"todo-list\"\n(\n    constrain: true\n    handle: '.todo-content'\n    onComplete:(ele)-&gt;\n        sortableTodos.serialize false, (element,index)-&gt;\n                todo = Todos.get(element.getProperty(\"id\")).replace(\"todo-\",\"\")\n                todo.save(\"order\":index)\n\n)   \n   )\n</code></pre>\n\n<p>but the following works(it got brackets after <strong>onComplete</strong>)</p>\n\n<pre><code>sortableTodos = new Sortables(\n\"todo-list\"\n(\n    constrain: true\n    handle: '.todo-content'\n    onComplete:((ele)-&gt;\n        sortableTodos.serialize false, (element,index)-&gt;\n                todo = Todos.get(element.getProperty(\"id\")).replace(\"todo-\",\"\")\n                todo.save(\"order\":index)\n               )\n)   \n  )  \n</code></pre>\n\n<p>I don't know why?Is it a bug? </p>\n"
    },
    {
      "tags": [
        "javascript",
        "flash",
        "hash",
        "webgl",
        "sha256"
      ],
      "answer_count": 1,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6395651/timeline",
      "question_comments_url": "/questions/6395651/comments",
      "question_answers_url": "/questions/6395651/answers",
      "question_id": 6395651,
      "owner": {
        "user_id": 45974,
        "user_type": "registered",
        "display_name": "Tom",
        "reputation": 1068,
        "email_hash": "04361eba6e039eecdd3458e2545f03e6"
      },
      "creation_date": 1308396487,
      "last_activity_date": 1308582417,
      "up_vote_count": 3,
      "down_vote_count": 0,
      "view_count": 46,
      "score": 3,
      "community_owned": false,
      "title": "Is it possible to calculate sha256 hashes in the browser using the user's video card, eg. by using WebGL or Flash?",
      "body": "<p>Is it possible to calculate sha256 hashes in the browser using the user's video card, eg. by using WebGL or Flash?</p>\n\n<p>I'm afraid this is all there is to ask, but if more elaboration is needed please do not hesitate to tell me in a comment.</p>\n\n<p>Thanks.</p>\n"
    },
    {
      "tags": [
        "java",
        "javascript",
        "web-services",
        "redirect",
        "login"
      ],
      "answer_count": 2,
      "accepted_answer_id": 6412531,
      "favorite_count": 1,
      "question_timeline_url": "/questions/6412428/timeline",
      "question_comments_url": "/questions/6412428/comments",
      "question_answers_url": "/questions/6412428/answers",
      "question_id": 6412428,
      "owner": {
        "user_id": 769655,
        "user_type": "registered",
        "display_name": "ZKSteffel",
        "reputation": 172,
        "email_hash": "3939a271af7fae22f6400b61c0d14c73"
      },
      "creation_date": 1308578567,
      "last_activity_date": 1308582340,
      "up_vote_count": 3,
      "down_vote_count": 0,
      "view_count": 44,
      "score": 3,
      "community_owned": false,
      "title": "Login page redirection in Java and Javascript",
      "body": "<p>Ok, so I've got an interesting case of login page redirection going on.<br>\nMy webservice has a login page (login.html) with some javascript to handle logging in and redirecting to a hardcoded 'default' page. The webservice is written in Java with a servlet filter handling redirection if a user is unauthenticated (so if a user tries to access <code>domain/statistics</code> without being logged in, they are directed to <code>domain/login.html</code>). The redirection from the protected services works: I can redirect to the login page and once a user is authenticated, redirect them to a default page.  I am having issues, however, redirecting to the previous page.<br>\nI know this is usually handled with the argument <code>document.referrer</code> in the Javascript, which I have tried, but due to the Java's redirection with <code>response.sendRedirect</code>, the Referer header is not sent.  </p>\n\n<p>How can I get these two aspects to redirect to the previously called page?  Is it something I need to add on the Javascript side, the Java side, or both?</p>\n"
    },
    {
      "tags": [
        "javascript",
        "jquery",
        "html",
        "css",
        "menu"
      ],
      "answer_count": 2,
      "accepted_answer_id": 6412674,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6294393/timeline",
      "question_comments_url": "/questions/6294393/comments",
      "question_answers_url": "/questions/6294393/answers",
      "question_id": 6294393,
      "owner": {
        "user_id": 658809,
        "user_type": "registered",
        "display_name": "Ryan Sammut",
        "reputation": 91,
        "email_hash": "72bfcaf32b3480f5cecb438684cabb92"
      },
      "creation_date": 1307629500,
      "last_edit_date": 1308141521,
      "last_activity_date": 1308582283,
      "up_vote_count": 0,
      "down_vote_count": 1,
      "view_count": 56,
      "score": -1,
      "community_owned": false,
      "title": "Navigation Menu Hover Effect only on a Particular Occasion",
      "body": "<p>I need the exact effect of this website's navigation menu <a href=\"http://recruitmentmalta.com/ptowers/\" rel=\"nofollow\">http://recruitmentmalta.com/ptowers/</a> but in neater code. This code was generated with a tool which converts from PSD to HTML/CSS and basically created a bunch of useless code. I know how to make that menu, except for the part where the Shop Now effect should turn off only if the contact is hovered over.</p>\n\n<p>Any ideas of how I can recreate that hovering off effect when I hover over the contact button (when Shop Now gets turned off)? </p>\n\n<p>This is what I have done so far to give you an idea</p>\n\n<pre><code>    &lt;ul&gt;\n        &lt;li id=\"homeButton\"&gt; &lt;img src=\"images/home.png\" onmouseout=\"this.src='images/home.png'\" onmouseover=\"this.src='images/homeHover.png'\" width=\"115\" height=\"55\" alt=\"home\" /&gt;&lt;/li&gt;\n        &lt;li id=\"aboutButton\"&gt; &lt;img src=\"images/about.png\" onmouseout=\"this.src='images/about.png'\" onmouseover=\"this.src='images/aboutHover.png'\" width=\"115\" height=\"55\" alt=\"about\" /&gt;&lt;/li&gt;\n        &lt;li id=\"newsButton\"&gt; &lt;img src=\"images/news.png\" onmouseout=\"this.src='images/news.png'\" onmouseover=\"this.src='images/newsHover.png'\" width=\"115\" height=\"55\" alt=\"news\" /&gt;&lt;/li&gt;\n        &lt;li id=\"brandsButton\"&gt; &lt;img src=\"images/brands.png\" onmouseout=\"this.src='images/brands.png'\" onmouseover=\"this.src='images/brandsHover.png'\" width=\"115\" height=\"55\" alt=\"brands\" /&gt;&lt;/li&gt;\n        &lt;li id=\"storesButton\"&gt; &lt;img src=\"images/stores.png\" onmouseout=\"this.src='images/stores.png'\" onmouseover=\"this.src='images/storesHover.png'\" width=\"115\" height=\"55\" alt=\"stores\" /&gt;&lt;/li&gt;\n        &lt;li id=\"careersButton\"&gt; &lt;img src=\"images/careers.png\" onmouseout=\"this.src='images/careers.png'\" onmouseover=\"this.src='images/careersHover.png'\" width=\"115\" height=\"55\" alt=\"careers\" /&gt;&lt;/li&gt;\n        &lt;li id=\"contactButtonMenu\"&gt; &lt;img src=\"images/contactButton.png\" onmouseout=\"this.src='images/contactButton.png'\" onmouseover=\"this.src='images/contactButtonHover.png'\"  width=\"115\" height=\"55\" alt=\"contact\" /&gt;&lt;/li&gt;\n        &lt;li id=\"shopNowButton\"&gt; &lt;img src=\"images/shopNowHover.png\" width=\"114\" height=\"53\" alt=\"Shop Now\" /&gt; &lt;/li&gt;\n    &lt;/ul&gt;\n</code></pre>\n\n<p>This is my JS Fiddle Link: <a href=\"http://jsfiddle.net/GHHJM/\" rel=\"nofollow\">http://jsfiddle.net/GHHJM/</a></p>\n"
    },
    {
      "tags": [
        "javascript",
        "html",
        "replace",
        "body"
      ],
      "answer_count": 2,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6411169/timeline",
      "question_comments_url": "/questions/6411169/comments",
      "question_answers_url": "/questions/6411169/answers",
      "question_id": 6411169,
      "owner": {
        "user_id": 806325,
        "user_type": "registered",
        "display_name": "Mohummad Abdullah",
        "reputation": 1,
        "email_hash": "be926689bf46ab9f3b0331cc985c469b"
      },
      "creation_date": 1308573088,
      "last_edit_date": 1308582247,
      "last_activity_date": 1308582247,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 35,
      "score": 0,
      "community_owned": false,
      "title": "Javascript replace undefined error ends but not replace continues",
      "body": "<p>Friends i got success with this piece of code:</p>\n\n<pre><code>var avidno = '800.123.1234';\nvar bodytext = document.body.innerHTML;\nvar newbodytext;\nfunction validate () {\nvar regex = /^\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;\n\nif (regex.test(avidno)) {\n    alert('bingo');\n    var avidno_new = '&lt;span&gt;'+avidno+'&lt;/span&gt;';\n    var newbodytext = bodytext.replace(new RegExp(avidno, \"g\"), avidno_new);\n    document.body.innerHTML = newbodytext;\n    // Valid international phone number\n} else {\n    alert('uupss');\n    // Invalid international phone number\n}\n}\nvalidate();\n</code></pre>\n"
    },
    {
      "tags": [
        "javascript",
        "android"
      ],
      "answer_count": 1,
      "favorite_count": 0,
      "question_timeline_url": "/questions/3802824/timeline",
      "question_comments_url": "/questions/3802824/comments",
      "question_answers_url": "/questions/3802824/answers",
      "question_id": 3802824,
      "owner": {
        "user_id": 459357,
        "user_type": "unregistered",
        "display_name": "Krishnakumar",
        "reputation": 1,
        "email_hash": "cb35faaf6bb76341164d7568101e394c"
      },
      "creation_date": 1285582330,
      "last_edit_date": 1285592315,
      "last_activity_date": 1308582222,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 164,
      "score": 0,
      "community_owned": false,
      "title": "Problem opening page with javascript pop ups in android webview",
      "body": "<p>I am very new to both Android WebKit and JavaScript. I have a web page with 3 links (say A,B,C). When I open that page on my PC browser(Chrome) and click on the links, A opens in the same browser window, whereas B and C pops up a new window. In my android application I am \nloading the original URL in a WebView. I have implemented my WebViewClient and overridden the <code>shouldOverrideUrlLoading</code>. I am getting the call to <code>shouldOverrideUrlLoading</code> whenever I click on A, but not getting it when I click on B or C? </p>\n\n<p>I went through the page source and it looks like the 2 links that are \nnot supported are opened as IFRAMEs. are IFRAMEs supported by WebView? </p>\n\n<p>Thanks </p>\n\n<p>KK</p>\n"
    },
    {
      "tags": [
        "javascript",
        "string-manipulation"
      ],
      "answer_count": 2,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6412993/timeline",
      "question_comments_url": "/questions/6412993/comments",
      "question_answers_url": "/questions/6412993/answers",
      "question_id": 6412993,
      "owner": {
        "user_id": 806849,
        "user_type": "unregistered",
        "display_name": "Dom",
        "reputation": 1,
        "email_hash": "8d7165905cf94796ea496370004f8520"
      },
      "creation_date": 1308580967,
      "last_activity_date": 1308581830,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 36,
      "score": 0,
      "community_owned": false,
      "title": "How do I remove the hyphens in this string (more complex than it sounds!)",
      "body": "<p>I must first confess that I understand very little JS and this is a bastardised version of some code I picked up elsewhere. Essentially it runs through a collection of list-items and extracts their class names (which are being populated by a CMS to reflect for example \"Brand\" or \"Manufacturer\") builds them into a string, splits the string into arrays and dedupes them. It then creates a list of unique check boxes based on the class name which, when selected or deselected, filters the list-items on the page using jquery.</p>\n\n<p>My problem is, that because the string of class names is being split by a 'space' if the value of the class consists of multiple-words the values populating the class must be hyphenated. </p>\n\n<p>BUT... when the label for the checkbox is generated on the page by the script I wonder if it is possible to remove the hyphen without upsetting the logic generating it.</p>\n\n<p>Here is the code I have so far, if you drop this into an HTML file you will see how it works (the jquery file is hosted elsewhere).</p>\n\n<p>Any help would be highly appreciated!</p>\n\n<pre><code>&lt;!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\"&gt; \n&lt;html&gt;\n&lt;head&gt;\n\n&lt;script type=\"text/javascript\" src=\"http://www.chewbz.com/jquery-1.4.3.min.js\"&gt;&lt;/script&gt;\n&lt;script type=\"text/javascript\"&gt; \n/**\n * Removes duplicates in the array 'a'\n */\nfunction unique(a) {\n    tmp = new Array(0);\n    for(i=0;i&lt;a.length;i++){\n        if(!contains(tmp, a[i])){\n            tmp.length+=1;\n            tmp[tmp.length-1]=a[i];\n        }\n    }\n    return tmp;\n}\n\n/**\n * Returns true if 's' is contained in the array 'a'\n */\n\nfunction contains(a, e) {\n    for(j=0;j&lt;a.length;j++)if(a[j]==e)return true;\n    return false;\n}\n\n$(document).ready(function () {\n    // create a string of class names, \n    var stringOfClassNames = '';\n\n    // grab the class name of each list item to build that string\n    $('.filterThis &gt; li').each( function (i) {\n        var thisClassString = $(this).attr('class');\n        stringOfClassNames = stringOfClassNames +' '+ thisClassString\n    });\n\n    // Trim spaces from the ends of that string:\n    stringOfClassNames = jQuery.trim(stringOfClassNames);\n\n    // convert the string to an array.\n    var arrayClasses = stringOfClassNames.split(' ');\n\n    // pull out only unique values from that array\n    arrayUniqueClasses = (unique(arrayClasses));\n\n    // we only want to create filters if there are multiple classes\n    if (arrayUniqueClasses.length &gt; 1) {\n\n        // create box for filters\n        $('&lt;div class=\"filters\" id=\"filters\"&gt;&lt;\\/div&gt;').insertBefore('.filterThis');\n\n        // create the filter checkboxes based on all the class names\n        $.each(arrayUniqueClasses, function() {\n            $('&lt;div class=\"filter-options\"&gt;&lt;input type=\"checkbox\" checked=\"checked\" value=\"'+this+'\" class=\"filter-checkbox\" id=\"filterID'+this+'\" /&gt;'+this+'&lt;\\/div&gt;').appendTo('.filters');\n        });\n\n        // create a 'show all' checkbox\n        $('&lt;div class=\"filter-options-all\"&gt;&lt;input type=\"checkbox\" checked=\"checked\" value=\"filterAll\" class=\"filter-checkbox\" id=\"filterIDall\" /&gt;Show All&lt;\\/div&gt;').appendTo('.filters');\n\n        // create a close button\n        $('&lt;img src=\"\" id=\"filter-close\" onClick=\"document.getElementById(\\'filters\\').style.display = \\'none\\'\"&gt;&lt;\\/div&gt;').appendTo('.filters');\n\n        // the filter part\n        $('.filters input').click( function() {\n            var value= $(this).val();\n            if (value == 'filterAll') {\n                if ($(this).is(':checked')) {\n                    $('.filters input').attr('checked','checked');\n                    $('.filterThis li').fadeIn();\n                } else {\n                    var one=1;\n                }\n            } else {\n                stringValue = '.filterThis &gt; li.'+value;\n                if ($(this).is(':checked')) {\n                    $(stringValue).fadeIn();\n                } else {\n                    $(stringValue).fadeOut();\n                    $('.filters #filterIDall').removeAttr('checked');\n                }\n            }\n        });\n    }\n});\n&lt;/script&gt; \n\n&lt;/head&gt;\n&lt;body&gt;\n\n&lt;style&gt;\n&lt;!-- \nul.filterThis {\nlist-style-type:none;\n}\nul.filterThis li {\nwidth:200px;height:200px;background:#eee;border:solid 1px #ccc;float:left;margin:10px;\n}\n--&gt;\n&lt;/style&gt;\n\n&lt;ul class=\"filterThis\"&gt;\n\n    &lt;li class=\"Medium-Jars\"&gt;\n        &lt;div class=\"product-container\"&gt;\n        Medium Jars\n        &lt;/div&gt;\n    &lt;/li&gt;\n\n    &lt;li class=\"Large-Jars\"&gt;\n        &lt;div class=\"product-container\"&gt;\n        Large Jars\n        &lt;/div&gt;\n    &lt;/li&gt;\n\n    &lt;li class=\"Sweets\"&gt;\n        &lt;div class=\"product-container\"&gt;\n        Sweets\n        &lt;/div&gt;\n    &lt;/li&gt;\n\n    &lt;li class=\"Medium-Jars\"&gt;\n        &lt;div class=\"product-container\"&gt;\n        Medium Jars\n        &lt;/div&gt;\n    &lt;/li&gt;\n\n    &lt;li class=\"Sweets\"&gt;\n        &lt;div class=\"product-container\"&gt;\n        Sweets\n        &lt;/div&gt;\n    &lt;/li&gt;\n\n&lt;/ul&gt;\n\n\n&lt;/body&gt;\n\n&lt;/html&gt;\n</code></pre>\n"
    },
    {
      "tags": [
        "javascript",
        "jquery"
      ],
      "answer_count": 1,
      "favorite_count": 1,
      "question_timeline_url": "/questions/6403728/timeline",
      "question_comments_url": "/questions/6403728/comments",
      "question_answers_url": "/questions/6403728/answers",
      "question_id": 6403728,
      "owner": {
        "user_id": 484082,
        "user_type": "registered",
        "display_name": "blasteralfred",
        "reputation": 505,
        "email_hash": "cd867e89325fe74445707fb6b4364be8"
      },
      "creation_date": 1308502054,
      "last_edit_date": 1308581714,
      "last_activity_date": 1308581714,
      "up_vote_count": 0,
      "down_vote_count": 1,
      "view_count": 50,
      "score": -1,
      "community_owned": false,
      "title": "Set table cell width using Javascript - jQuery",
      "body": "<p>I have a table as below;</p>\n\n<pre><code>&lt;table style=\"width: 100%\"&gt;\n&lt;tr&gt;\n&lt;td style=\"width: 30px\"&gt;cell&lt;/td&gt;\n&lt;td class=\"cell\"&gt;cell&lt;/td&gt;\n&lt;td class=\"cell\"&gt;cellcell&lt;/td&gt;\n&lt;td class=\"cell\"&gt;cellcellcell&lt;/td&gt;\n&lt;td class=\"cell\"&gt;cellcellcellcell&lt;/td&gt;\n&lt;td class=\"cell\"&gt;cellcellcellcellcell&lt;/td&gt;\n&lt;td class=\"cell\"&gt;cellcellcellcellcellcell&lt;/td&gt;\n&lt;td style=\"width: 30px\"&gt;cell&lt;/td&gt;\n&lt;/tr&gt;\n&lt;/table&gt;\n</code></pre>\n\n<p>The table is designed to stretch to screen (or a div having specific width). I want equal width for all cells having <code>class=\"cell\"</code> and this works well when the character length of text in all cells having <code>class=\"cell\"</code> are equal. But, I want to fix the cell width even if the character lengths of contents in <code>class=\"cell\"</code> are different. </p>\n\n<p>Also you can see that the first and last cells have fixed width, in <strong>pixels</strong> and others cell widths are to be calculated on the basis of percentage .. I want equal width for all cells (except first and last with fixed width in pixels).</p>\n\n<p>I think this can be done using <code>javascript</code> with the help of <code>jQuery</code>, by calculating the table cell widths on document ready, and then adding some function using <code>on window resize</code> and thereby calculating cell widths. The cell widths will be <code>(tablewidth in px - 60px)/6</code> I am a beginner and I don't know much.. How can i do this using jQuery and (or) javascript.</p>\n\n<p>It will be very helpful if someone make me a fiddle..</p>\n\n<p>Thanks in advance..</p>\n"
    },
    {
      "tags": [
        "javascript"
      ],
      "answer_count": 5,
      "favorite_count": 2,
      "question_timeline_url": "/questions/6412589/timeline",
      "question_comments_url": "/questions/6412589/comments",
      "question_answers_url": "/questions/6412589/answers",
      "question_id": 6412589,
      "owner": {
        "user_id": 206403,
        "user_type": "registered",
        "display_name": "Rocket",
        "reputation": 9270,
        "email_hash": "31975d063f893b2551f6f7d5ed6bfa8e"
      },
      "creation_date": 1308579273,
      "last_activity_date": 1308581680,
      "up_vote_count": 4,
      "down_vote_count": 0,
      "view_count": 46,
      "score": 4,
      "community_owned": false,
      "title": "Set length property of JavaScript object",
      "body": "<p>Let's say I have a JavaScript object:</p>\n\n<pre><code>function a(){\n    var A = [];\n    this.length = function(){\n        return A.length;\n    };\n    this.add = function(x){\n        A.push(x);\n    };\n    this.remove = function(){\n        return A.pop();\n    };\n};\n</code></pre>\n\n<p>I can use it like so:</p>\n\n<pre><code>var x = new a();\nx.add(3);\nx.add(4);\nalert(x.length()); // 2\nalert(x.remove()); // 4\nalert(x.length()); // 1\n</code></pre>\n\n<p>I was trying to make <code>.length</code> not a function, so I could access it like this: <code>x.length</code>, but I've had no luck in getting this to work.</p>\n\n<p>I tried this, but it outputs <code>0</code>, because that's the length of <code>A</code> at the time:</p>\n\n<pre><code>function a(){\n    var A = [];\n    this.length = A.length;\n    //rest of the function...\n};\n</code></pre>\n\n<p>I also tried this, and it also outputs <code>0</code>:</p>\n\n<pre><code>function a(){\n    var A = [];\n    this.length = function(){\n        return A.length;\n    }();\n    //rest of the function...\n};\n</code></pre>\n\n<p>How do I get <code>x.length</code> to output the correct length of the array inside in the object?</p>\n"
    },
    {
      "tags": [
        "javascript",
        "prototypejs"
      ],
      "answer_count": 0,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6412259/timeline",
      "question_comments_url": "/questions/6412259/comments",
      "question_answers_url": "/questions/6412259/answers",
      "question_id": 6412259,
      "owner": {
        "user_id": 789241,
        "user_type": "unregistered",
        "display_name": "ken",
        "reputation": 16,
        "email_hash": "e4a035242c5843420c0c1bf20daddb97"
      },
      "creation_date": 1308577835,
      "last_edit_date": 1308581548,
      "last_activity_date": 1308581548,
      "up_vote_count": 1,
      "down_vote_count": 0,
      "view_count": 42,
      "score": 1,
      "community_owned": false,
      "title": "Prototype.js error - 'undefined' is null or not an object",
      "body": "<p>I am getting following error in Prototype.js</p>\n\n<pre><code>'undefined' is null or not an object line 5557 char 5\n</code></pre>\n\n<p>which is this:</p>\n\n<pre><code>var respondersForEvent = registry.get(eventName);\n    if (Object.isUndefined(respondersForEvent)) {\n      respondersForEvent = [];\n      registry.set(eventName, respondersForEvent);\n    }\n</code></pre>\n\n<p>How can i fix this?</p>\n"
    },
    {
      "tags": [
        "javascript",
        "content",
        "clipboard",
        "paste"
      ],
      "answer_count": 3,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6413036/timeline",
      "question_comments_url": "/questions/6413036/comments",
      "question_answers_url": "/questions/6413036/answers",
      "question_id": 6413036,
      "owner": {
        "user_id": 151377,
        "user_type": "registered",
        "display_name": "Gabriele Cirulli",
        "reputation": 305,
        "email_hash": "76706ad194800ea2645a109190baa5a4"
      },
      "creation_date": 1308581144,
      "last_activity_date": 1308581461,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 13,
      "score": 0,
      "community_owned": false,
      "title": "Get current clipboard content?",
      "body": "<p>I'd like to know a way to make my script detect the content of the clipboard and paste it into a text field when the page is opened, with no input from the user. How can it be done?</p>\n"
    },
    {
      "tags": [
        "javascript",
        "jquery",
        "jquery-plugins"
      ],
      "answer_count": 5,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6412997/timeline",
      "question_comments_url": "/questions/6412997/comments",
      "question_answers_url": "/questions/6412997/answers",
      "question_id": 6412997,
      "owner": {
        "user_id": 806850,
        "user_type": "unregistered",
        "display_name": "Rob",
        "reputation": 1,
        "email_hash": "d4f2c42b9bf234c7c5e5c6af0fb373a3"
      },
      "creation_date": 1308580980,
      "last_activity_date": 1308581418,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 33,
      "score": 0,
      "community_owned": false,
      "title": "Add divs between divs in jQuery",
      "body": "<p>I'm working with a great jQuery plugin <a href=\"http://builtbywill.com/code/booklet/\" rel=\"nofollow\">(booklet)</a>, and pages of the booklet are defined as so:</p>\n\n<pre><code>&lt;div id=\"mybook2\"&gt;\n    &lt;div class=\"b-load\"&gt;\n        &lt;div&gt; \n            &lt;h3&gt;Yay, Page 1!&lt;/h3&gt;\n        &lt;/div&gt;\n        &lt;div&gt; \n            &lt;h3&gt;Yay, Page 2!&lt;/h3&gt;\n        &lt;/div&gt;\n        &lt;div&gt; \n            &lt;h3&gt;Yay, Page 3!&lt;/h3&gt;\n        &lt;/div&gt;\n        &lt;div&gt; \n            &lt;h3&gt;Yay, Page 4!&lt;/h3&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n</code></pre>\n\n<p>I want to add a div before each one of the pages (all the divs in div class=\"b-load\").</p>\n\n<p>How would I add it? .prepend? I'm not sure what to do here, I've never worked with jQuery or javascript at all, really.</p>\n"
    },
    {
      "tags": [
        "javascript",
        "count",
        "script"
      ],
      "answer_count": 4,
      "accepted_answer_id": 6411767,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6411637/timeline",
      "question_comments_url": "/questions/6411637/comments",
      "question_answers_url": "/questions/6411637/answers",
      "question_id": 6411637,
      "owner": {
        "user_id": 581345,
        "user_type": "registered",
        "display_name": "Tobias",
        "reputation": 37,
        "email_hash": "56ad21e0912e6810378c035c51dcc46e"
      },
      "creation_date": 1308575424,
      "last_edit_date": 1308581410,
      "last_activity_date": 1308581410,
      "up_vote_count": 1,
      "down_vote_count": 0,
      "view_count": 56,
      "score": 1,
      "community_owned": false,
      "title": "Javascript count number of steps",
      "body": "<p>How can I count number of steps between different numbers.</p>\n\n<p>I have a method that takes a number and runs a code snippet with the number. I need to see if the number is the number right next to the other or two steps, three steps, four steps over or below etc.</p>\n\n<p>Ex. I send a number of 1 to the method. The next number sent is 4. I then need to find out how many steps over one it is etc in this case 3 steps over 1 should be the result.</p>\n\n<p>Any clues?  </p>\n"
    },
    {
      "tags": [
        "javascript",
        "jquery",
        "ajax",
        "rss"
      ],
      "answer_count": 1,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6412753/timeline",
      "question_comments_url": "/questions/6412753/comments",
      "question_answers_url": "/questions/6412753/answers",
      "question_id": 6412753,
      "owner": {
        "user_id": 797954,
        "user_type": "registered",
        "display_name": "Jack Sharpe",
        "reputation": 1,
        "email_hash": "3dadeb26ed5bb578fc0385a8def93699"
      },
      "creation_date": 1308579981,
      "last_edit_date": 1308580880,
      "last_activity_date": 1308581345,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 22,
      "score": 0,
      "community_owned": false,
      "title": "Ajax RSS reader",
      "body": "<p>I am wanting to write a small application that can pull RSS feeds from any RSS feed url. if anyone could give me very basic help on how to achieve this?</p>\n\n<p>im only really starting out in the world on AJAX and this kinda stuff so any help would be appreciated. </p>\n\n<p>Thanks </p>\n\n<p>EDIT :- I am only trying to do this with Jquery and Ajax, I dont want to use PHP or any other server side code. </p>\n"
    },
    {
      "tags": [
        "javascript",
        "ipad",
        "ios",
        "webview"
      ],
      "answer_count": 4,
      "accepted_answer_id": 4462361,
      "favorite_count": 0,
      "question_timeline_url": "/questions/4460205/timeline",
      "question_comments_url": "/questions/4460205/comments",
      "question_answers_url": "/questions/4460205/answers",
      "question_id": 4460205,
      "owner": {
        "user_id": 435413,
        "user_type": "registered",
        "display_name": "sod",
        "reputation": 852,
        "email_hash": "9239a13c2e8049a26f32fe3d4367b58c"
      },
      "creation_date": 1292498400,
      "last_activity_date": 1308581270,
      "up_vote_count": 2,
      "down_vote_count": 0,
      "view_count": 522,
      "score": 2,
      "community_owned": false,
      "title": "detect ipad/iphone webview via javascript",
      "body": "<p>Is there a way to differ via javascript if the website runs inside the ipad safari or inside an application WebView?</p>\n"
    },
    {
      "tags": [
        "javascript",
        "html",
        "dom"
      ],
      "answer_count": 11,
      "accepted_answer_id": 78945,
      "favorite_count": 1,
      "question_timeline_url": "/questions/78932/timeline",
      "question_comments_url": "/questions/78932/comments",
      "question_answers_url": "/questions/78932/answers",
      "question_id": 78932,
      "owner": {
        "user_id": 6340,
        "user_type": "registered",
        "display_name": "brass-kazoo",
        "reputation": 1337,
        "email_hash": "aeca5f30afc60a8429e24b9b42f8c9df"
      },
      "creation_date": 1221614884,
      "last_edit_date": 1308581167,
      "last_activity_date": 1308581167,
      "up_vote_count": 3,
      "down_vote_count": 0,
      "view_count": 13743,
      "score": 3,
      "community_owned": false,
      "title": "How do I programatically set the value of a select box element using javascript?",
      "body": "<p>I have the following HTML select element:</p>\n\n<pre><code>&lt;select id=\"leaveCode\" name=\"leaveCode\"&gt;\n  &lt;option value=\"10\"&gt;Annual Leave&lt;/option&gt;\n  &lt;option value=\"11\"&gt;Medical Leave&lt;/option&gt;\n  &lt;option value=\"14\"&gt;Long Service&lt;/option&gt;\n  &lt;option value=\"17\"&gt;Leave Without Pay&lt;/option&gt;\n&lt;/select&gt;\n</code></pre>\n\n<p>Using a javascript function with the leave code number as a parameter, how do I select the appropriate option in the list?</p>\n"
    },
    {
      "tags": [
        "javascript",
        "jquery",
        "events",
        "javascript-events"
      ],
      "answer_count": 5,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6412863/timeline",
      "question_comments_url": "/questions/6412863/comments",
      "question_answers_url": "/questions/6412863/answers",
      "question_id": 6412863,
      "owner": {
        "user_id": 516629,
        "user_type": "registered",
        "display_name": "pagewil",
        "reputation": 950,
        "email_hash": "cdee7bd13ac26fdbb617a4b74170c53c"
      },
      "creation_date": 1308580401,
      "last_activity_date": 1308581131,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 27,
      "score": 0,
      "community_owned": false,
      "title": "jQuery: Two elements using the same event function.",
      "body": "<p>What is the best way to share one function between two different event handlers? I want the same outcome but some situation dependent variables will need to be defined within the function depending on which element was clicked.</p>\n\n<p>I could hack a solution but want to know the best practice for such a scenario. Simple problem must have a simple answer...</p>\n\n<p><strong>EXAMPLE</strong></p>\n\n<pre><code>var onMyEvent = function(e){\n    if(click triggered from 'a'){\n        //do that \n    }  \n    if(click triggered from 'div'){\n        //do that\n    } \n}\n\n\n$('a').click(onMyEvent);\n$('div').click(onMyEvent);\n</code></pre>\n\n<p><strong>FIDDLE:</strong> <a href=\"http://jsfiddle.net/f6C92/\" rel=\"nofollow\">http://jsfiddle.net/f6C92/</a></p>\n"
    },
    {
      "tags": [
        "javascript",
        "autocomplete",
        "dojo",
        "jquery-autocomplete"
      ],
      "answer_count": 0,
      "favorite_count": 1,
      "question_timeline_url": "/questions/6396782/timeline",
      "question_comments_url": "/questions/6396782/comments",
      "question_answers_url": "/questions/6396782/answers",
      "question_id": 6396782,
      "owner": {
        "user_id": 556124,
        "user_type": "registered",
        "display_name": "Boopathi Rajaa",
        "reputation": 149,
        "email_hash": "2596022781bb27a84583b7454954ee96"
      },
      "creation_date": 1308408565,
      "last_edit_date": 1308580936,
      "last_activity_date": 1308580936,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 14,
      "score": 0,
      "community_owned": false,
      "title": "Facebook style autocomplete using dojo needed.",
      "body": "<p>I found facebook style autocomplete using jQuery. But im using dojo framework for my web app. Can you suggest how to implement or any open source code available for autocomplete using dojo framework. ?</p>\n\n<p>Using jquery :</p>\n\n<p><a href=\"http://devthought.com/wp-content/articles/autocompletelist/test.html\" rel=\"nofollow\">http://devthought.com/wp-content/articles/autocompletelist/test.html</a></p>\n"
    },
    {
      "tags": [
        "javascript",
        "css",
        "nan",
        "parseint"
      ],
      "answer_count": 3,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6411636/timeline",
      "question_comments_url": "/questions/6411636/comments",
      "question_answers_url": "/questions/6411636/answers",
      "question_id": 6411636,
      "owner": {
        "user_id": 334460,
        "user_type": "registered",
        "display_name": "robf92",
        "reputation": 28,
        "email_hash": "db83131e229b650a3a474923cb163211"
      },
      "creation_date": 1308575417,
      "last_edit_date": 1308575997,
      "last_activity_date": 1308580918,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 45,
      "score": 0,
      "community_owned": false,
      "title": "Javascript slider problem",
      "body": "<p>Hi I am currently working on a script given to me by my boss and it is not working in all browsers except IE.</p>\n\n<p>Now he is using the CSS property left to animate it so he has a variable which gets the current value of left. For example lets say left is equal to <code>-100px</code>.</p>\n\n<p>Now once it has this value it adds <code>10px</code> onto the value to make it move in from the left.</p>\n\n<p>Now my issue lies with <code>parseInt()</code> and the <code>\"px\"</code> prefix at the end of the number. it keeps returning <code>NaN</code> instead of the value of left.</p>\n\n<p>Does anyone know how to fix this problem?</p>\n\n<p>Thanks in advance</p>\n"
    },
    {
      "tags": [
        "javascript",
        "forms"
      ],
      "answer_count": 4,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6412913/timeline",
      "question_comments_url": "/questions/6412913/comments",
      "question_answers_url": "/questions/6412913/answers",
      "question_id": 6412913,
      "owner": {
        "user_id": 779189,
        "user_type": "unregistered",
        "display_name": "Bifterss",
        "reputation": 29,
        "email_hash": "59ee510a7de8f4c199ff6c44c02274bb"
      },
      "creation_date": 1308580600,
      "last_edit_date": 1308580690,
      "last_activity_date": 1308580894,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 46,
      "score": 0,
      "community_owned": false,
      "title": "Javascript return false, still submits form",
      "body": "<p>I have a form with JS validation, upon there being an error, the submit button should 'grey-out' and the form should not be submitted, however the last couple of functions seem to submit the form even though they pop the alert box!?!?!</p>\n\n<p>Button code:</p>\n\n<pre><code>&lt;input type=\"submit\" name=\"button\" id=\"button\" \n  onclick='return formvalidation();' value=\"Next\" /&gt;\n</code></pre>\n\n<p>Non Working Function Example:</p>\n\n<pre><code>function BlankSite() {\n    var SiteNum= document.getElementsByName(\"sitesinput\")[0].value;\n        if ((SiteNum == \"\") || (SiteNum == 0))\n            {\n        alert(\"You have not selected an amount of sites.\")\n        document.forms[0].button.disabled=true;\n        return false;\n            }\n    }\n</code></pre>\n\n<p>Function initiator:</p>\n\n<pre><code>function formvalidation()\n{\n    ZeroPhones();\n    BlankPC();\n    BlankSite();\n    BlankSeats();\n    phone_change();\n}// End of formvalidation\n</code></pre>\n\n<p>This is very strange and I have tried various work arounds all to no avail!</p>\n\n<p>Thanks,\nB.</p>\n"
    },
    {
      "tags": [
        "javascript"
      ],
      "answer_count": 4,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6411574/timeline",
      "question_comments_url": "/questions/6411574/comments",
      "question_answers_url": "/questions/6411574/answers",
      "question_id": 6411574,
      "owner": {
        "user_id": 231957,
        "user_type": "registered",
        "display_name": "Luc",
        "reputation": 734,
        "email_hash": "67db701d6a4e067c6aeeca5dec7a82ef"
      },
      "creation_date": 1308575128,
      "last_edit_date": 1308575197,
      "last_activity_date": 1308580813,
      "up_vote_count": 3,
      "down_vote_count": 1,
      "view_count": 63,
      "score": 2,
      "community_owned": false,
      "title": "Resources that turns a javascript developer into a great javascript developer ?",
      "body": "<p>I am more and more working with javascript, especially with JQuery for web site and node.js for server side (really like node.js though) and I quite often struggle to understand the inner structure of the language (such as prototypes, asynchronous function, ...).  </p>\n\n<p>What are the best articles, or so, that could help a developer to leverage his competency in this language (that is really worth learning IMHO).</p>\n"
    },
    {
      "tags": [
        "javascript",
        "node.js",
        "prototype"
      ],
      "answer_count": 3,
      "accepted_answer_id": 6402016,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6401946/timeline",
      "question_comments_url": "/questions/6401946/comments",
      "question_answers_url": "/questions/6401946/answers",
      "question_id": 6401946,
      "owner": {
        "user_id": 568785,
        "user_type": "registered",
        "display_name": "PhpMyCoder",
        "reputation": 672,
        "email_hash": "88c6371f6a47841abde4c60dd8a2f964"
      },
      "creation_date": 1308480840,
      "last_edit_date": 1308580791,
      "last_activity_date": 1308580791,
      "up_vote_count": 1,
      "down_vote_count": 0,
      "view_count": 28,
      "score": 1,
      "community_owned": false,
      "title": "Prototyping Built-In Modules in NodeJS",
      "body": "<p>I've been trying to add some convenience functions to Node's file system module (mainly because it lacks some common sense things), but every time I begin <code>fs.prototype.myfunc =</code> in the repl, Node complains that I am trying to set a property of an undefined variable. Is it really true that you cannot access Node's built-in module prototypes from the outside? If so, does anyone know a feasible workaround to extend Node's built-in modules?</p>\n\n<p>--Thanks! </p>\n\n<hr>\n\n<p>Just to note: I did require fs before trying to prototype it!</p>\n\n<pre><code>var fs = require('fs');\nfs.prototype.myfunc = function() {}; //TypeError thrown here\n</code></pre>\n"
    },
    {
      "tags": [
        "javascript",
        "html"
      ],
      "answer_count": 3,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6411282/timeline",
      "question_comments_url": "/questions/6411282/comments",
      "question_answers_url": "/questions/6411282/answers",
      "question_id": 6411282,
      "owner": {
        "user_id": 578523,
        "user_type": "registered",
        "display_name": "Marcos ",
        "reputation": 660,
        "email_hash": "00c4b6dae0d342a11e70e4982440f9e6"
      },
      "creation_date": 1308573611,
      "last_edit_date": 1308574791,
      "last_activity_date": 1308580646,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 50,
      "score": 0,
      "community_owned": false,
      "title": "How to lock scrolling of a web page temporarily?",
      "body": "<p>How can I lock scrolling of a webpage temporarily when a dialog box is displayed ?  I have a dialog box within which I want to enable scrolling <strong>after deactivating scrolling from the overlayed webpage</strong>. </p>\n\n<p><strong>Is there a js command to <em>temporarily</em> disable scrolling ?</strong></p>\n"
    },
    {
      "tags": [
        "javascript",
        "ruby-on-rails",
        "nested-forms"
      ],
      "answer_count": 1,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6411778/timeline",
      "question_comments_url": "/questions/6411778/comments",
      "question_answers_url": "/questions/6411778/answers",
      "question_id": 6411778,
      "owner": {
        "user_id": 806695,
        "user_type": "unregistered",
        "display_name": "bla12",
        "reputation": 1,
        "email_hash": "2d4efce7fbf59cedc35242a018b4bb59"
      },
      "creation_date": 1308575987,
      "last_activity_date": 1308580316,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 7,
      "score": 0,
      "community_owned": false,
      "title": "Rails 3 plugin nested_form versus JavaScript appraoch for adding form fields dynamically in a nested form",
      "body": "<p>I am researching ways on how to dynamically add form fields for nested models and stumbled accross the <a href=\"https://github.com/ryanb/nested_form\" rel=\"nofollow\">nested_form</a> plugin by ryanb. No doubt this is a a great piece of code, but I wondered why does it have to be so sophisticated?</p>\n\n<p>Example: A form for creating / adding a project has one or more tasks assigned. The user can dynamically add more tasks by clicking on a add-task button. A project must have at least one task. Each task has a name and a description.</p>\n\n<p>So why not just:\n- When generating the html, sourround each set of task fields with a div given an ID such as \"dynamic_fields\"\n- When the user clicks the add-task button, call a JavaScript function via link_to_function to clone the dynamic_fields subtree. Insert the new set of fields at the bottom of the task list.\n- Via JavaScript, remove the values of the newly added fields and replace the child ID with something unique (Ryan suggests using a value based on the current time)</p>\n\n<p>I am aware that the nested_forms plugin also works for deeper nesting structures, but given my simple use case with only one level of hierarchy, is the approach outlined above practical? Or am I missing something important? Any guidance on this topic is appreciated. </p>\n"
    },
    {
      "tags": [
        "javascript",
        "jquery",
        "jquery-ui",
        "animation",
        "jquery-animation"
      ],
      "answer_count": 7,
      "favorite_count": 1,
      "question_timeline_url": "/questions/814910/timeline",
      "question_comments_url": "/questions/814910/comments",
      "question_answers_url": "/questions/814910/answers",
      "question_id": 814910,
      "creation_date": 1241273025,
      "last_activity_date": 1308580310,
      "up_vote_count": 2,
      "down_vote_count": 0,
      "view_count": 812,
      "score": 2,
      "community_owned": false,
      "title": "Animating Background Image",
      "body": "<p>I Like using Jquery and its companion Jquery Ui but can not find a way to animate background image over a certain period of time like 5 seconds.\nI can not do something like:</p>\n\n<pre><code>$('sampleelement').animate({'background-image':'url(hello.jpg)'},5000);\n</code></pre>\n\n<p>Any ideas??</p>\n"
    },
    {
      "tags": [
        "javascript",
        "html5",
        "jquery-mobile"
      ],
      "answer_count": 3,
      "accepted_answer_id": 5554294,
      "favorite_count": 1,
      "question_timeline_url": "/questions/5549729/timeline",
      "question_comments_url": "/questions/5549729/comments",
      "question_answers_url": "/questions/5549729/answers",
      "question_id": 5549729,
      "owner": {
        "user_id": 683553,
        "user_type": "registered",
        "display_name": "Satch3000",
        "reputation": 557,
        "email_hash": "9d848d8392fc5291a0c77f4064b7e67a"
      },
      "creation_date": 1301995299,
      "last_activity_date": 1308580238,
      "up_vote_count": 2,
      "down_vote_count": 0,
      "view_count": 391,
      "score": 2,
      "community_owned": false,
      "title": "JQuery Mobile Calendar ?",
      "body": "<p>Does anyone know of any Calendar that I could use on JQuery Mobile? </p>\n\n<p>Needs to be able to save dates locally etc.</p>\n\n<p>Thanks</p>\n"
    },
    {
      "tags": [
        "javascript",
        "google-chrome-extension"
      ],
      "answer_count": 0,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6404725/timeline",
      "question_comments_url": "/questions/6404725/comments",
      "question_answers_url": "/questions/6404725/answers",
      "question_id": 6404725,
      "owner": {
        "user_id": 771790,
        "user_type": "registered",
        "display_name": "jbills",
        "reputation": 10,
        "email_hash": "925ead45ca60d8569512e6c4ff34c841"
      },
      "creation_date": 1308512617,
      "last_edit_date": 1308580065,
      "last_activity_date": 1308580065,
      "up_vote_count": 1,
      "down_vote_count": 0,
      "view_count": 19,
      "score": 1,
      "community_owned": false,
      "title": "Google tasks update error",
      "body": "<p>I am attempting to update a task with the following code:\n<br>\n<br></p>\n\n<pre><code>function updtsk(task,id)\n{\n  var url = 'https://www.googleapis.com/tasks/v1/lists/@default/tasks/'+id;\n  var req = {\n    'method': 'PUT',\n    'headers': {\n      'Content-type': 'application/json'\n    },\n    'body': JSON.stringify(task)\n  };\n  var addDone = function(resp, xhr) {\n    if (xhr.status != 200) {\n      notifyFailure('Couldn\\'t update task.', xhr.status);\n      return;\n    }\n\n    //notifySuccess(task['title']);\n  }\n\n  oauth.sendSignedRequest(url, addDone, req);\n}\n</code></pre>\n\n<p>I get the following error however:</p>\n\n<pre><code>\"{\n \"error\": {\n  \"errors\": [\n   {\n    \"domain\": \"global\",\n    \"reason\": \"invalid\",\n    \"message\": \"Invalid Value\"\n   }\n  ],\n  \"code\": 400,\n  \"message\": \"Invalid Value\"\n }\n}\n\"\n</code></pre>\n\n<p>The update body is this:</p>\n\n<pre><code>{\n 'title': $(this).val()\n};\n</code></pre>\n\n<p>I am using the chrome_ex_oauth api and could use some help.</p>\n"
    },
    {
      "tags": [
        "javascript",
        "css"
      ],
      "answer_count": 3,
      "accepted_answer_id": 6412241,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6412119/timeline",
      "question_comments_url": "/questions/6412119/comments",
      "question_answers_url": "/questions/6412119/answers",
      "question_id": 6412119,
      "owner": {
        "user_id": 649737,
        "user_type": "registered",
        "display_name": "Leron",
        "reputation": 78,
        "email_hash": "c7720840fc9817ef936cf82e8cdb848d"
      },
      "creation_date": 1308577298,
      "last_edit_date": 1308579073,
      "last_activity_date": 1308580037,
      "up_vote_count": 0,
      "down_vote_count": 0,
      "view_count": 33,
      "score": 0,
      "community_owned": false,
      "title": "show larger Image with CSS and onMouseOver",
      "body": "<p>I use this simple script :</p>\n\n<pre><code>&lt;body&gt;\n &lt;script type=\"text/javascript\"&gt;\nfunction mouseOver()\n{\ndocument.getElementById(\"img1\").src =\"images/p2.jpg\";\n}\nfunction mouseOut()\n{\ndocument.getElementById(\"img1\").src =\"images/p1.jpg\";\n}\n&lt;/script&gt;\n&lt;div class=\"img\"&gt;\n &lt;a target=\"_blank\" href=\"images/p1.jpg\"&gt;&lt;img src=\"images/p1.jpg\" alt=\"Klematis\" width=\"110\" height=\"90\" id=\"img1\" onMouseOver= \"mouseOver()\" onMouseOut=\"mouseOut()\"/&gt;&lt;/a&gt;\n &lt;div class=\"desc\"&gt;Add a description of the image here&lt;/div&gt;\n&lt;/div&gt;\n</code></pre>\n\n<p>The images are pretty big so I adjust them with width and height properties, I thought that if I just call the function I'll see the bigger image but it dosen't happen.So what can I do to see an enlarged image with onMouseOver?\n  I'll add the style sheet in case it matters:</p>\n\n<pre><code>&lt;style type=\"text/css\"&gt;\ndiv.img\n{\n  margin: 2px;\n  border: 1px solid #0000ff;\n  height: auto;\n  width: auto;\n  float: left;\n  text-align: center;\n}\ndiv.img img\n{\n  display: inline;\n  margin: 3px;\n  border: 1px solid #ffffff;\n}\ndiv.img a:hover img {border: 1px solid #0000ff;}\ndiv.desc\n{\n  text-align: center;\n  font-weight: normal;\n  width: 120px;\n  margin: 2px;\n}\n&lt;/style&gt;\n</code></pre>\n\n<p>P.S</p>\n\n<p>Don't mind the <code>&lt;a href</code> thing I just use the raw code from w3 schools...</p>\n\n<p>P.S Maybe I'll ask another question for this, the problem with the enlarged images is solved but now I want them to show in some kind of block cause now if I have even 4 iamges when i hover the last one the enlarged image goes far away from the starting location, and I want to make it just like gallery block and all images ot be shown there, wthout going outside the borders of the gallery.Any help or maybe another Qs better....</p>\n"
    },
    {
      "tags": [
        "javascript",
        "map"
      ],
      "answer_count": 1,
      "favorite_count": 0,
      "question_timeline_url": "/questions/6412720/timeline",
      "question_comments_url": "/questions/6412720/comments",
      "question_answers_url": "/questions/6412720/answers",
      "question_id": 6412720,
      "owner": {
        "user_id": 804279,
        "user_type": "registered",
        "display_name": "Jatinder Thind",
        "reputation": 6,
        "email_hash": "d91f8193ab33d05022a8ac02b86c833d"
      },
      "creation_date": 1308579832,
      "last_activity_date": 1308580008,
      "up_vote_count": 1,
      "down_vote_count": 0,
      "view_count": 20,
      "score": 1,
      "community_owned": false,
      "title": "Need suggestions on interactive Javascript based map",
      "body": "<p>can anyone help identify the Javascript library used for interactive maps on <a href=\"http://www.africatravelresource.com/\" rel=\"nofollow\">http://www.africatravelresource.com/</a></p>\n\n<p>Or is it a custom solution? Any suggestions for something similar?</p>\n"
    },
    {
      "tags": [
        "javascript",
        "obfuscation",
        "decode",
        "encode",
        "ext"
      ],
      "answer_count": 1,
      "accepted_answer_id": 6410094,
      "favorite_count": 1,
      "question_timeline_url": "/questions/6406161/timeline",
      "question_comments_url": "/questions/6406161/comments",
      "question_answers_url": "/questions/6406161/answers",
      "question_id": 6406161,
      "owner": {
        "user_id": 509789,
        "user_type": "registered",
        "display_name": "richardhell",
        "reputation": 18,
        "email_hash": "9e4f23b0072f4f7d3e2649e3e1a2816b"
      },
      "creation_date": 1308533799,
      "last_edit_date": 1308535618,
      "last_activity_date": 1308579900,
      "up_vote_count": 1,
      "down_vote_count": 0,
      "view_count": 54,
      "score": 1,
      "community_owned": false,
      "title": "JavaScript Encode",
      "body": "<p>Surfing on web i find Ext.Gantt plugin for ExtJS, that extension have a special encode. Anybody know how to encode like that or another complicated form. </p>\n\n<p><a href=\"http://www.ext-scheduler.com/js/sch-gantt-all-debug.js\" rel=\"nofollow\">Encoded Gantt Chart</a></p>\n"
    }
  ]
}
);
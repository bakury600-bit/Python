
"use strict";

// ======================================
// أدوات مساعدة
// ======================================

const $ = selector => document.querySelector(selector);

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[char]);
}

$("#year").textContent = new Date().getFullYear();

$("#themeBtn").addEventListener("click", () => {
    document.body.classList.toggle("light");
});


// ======================================
// 1. المحاضرات
// ======================================

const lessons = [
{
    title: "Variables & Data Types",
    description: "المتغيرات وأنواع البيانات والعمليات.",
    topics: [
        ["Variables", "المتغير هو اسم نخزن داخله قيمة حتى نستخدمها لاحقاً."],
        ["int", "نوع البيانات الخاص بالأعداد الصحيحة مثل 10 و25."],
        ["float", "نوع البيانات الخاص بالأعداد العشرية مثل 3.5."],
        ["str", "يستخدم لتخزين النصوص مثل Python."],
        ["bool", "يحتوي على True أو False."],
        ["type()", "تستخدم لمعرفة نوع القيمة."],
        ["input()", "تستقبل البيانات من المستخدم وتعيدها كنص."],
        ["Type Casting", "تحويل نوع البيانات مثل int() وfloat() وstr()."],
        ["Arithmetic Operators", "العمليات الحسابية مثل + و- و* و/ و// و% و**."],
        ["Comparison Operators", "المقارنة مثل == و!= و> و< و>= و<=."],
        ["Logical Operators", "العوامل المنطقية and وor وnot."]
    ],
    code: `name = input("Enter your name: ")
age = int(input("Enter your age: "))

print("Name:", name)
print("Age next year:", age + 1)`,
    explanation: [
        "السطر الأول يستقبل اسم المستخدم ويخزنه في name.",
        "السطر الثاني يستقبل العمر ويحول النص إلى عدد صحيح باستخدام int().",
        "السطر الثالث يطبع الاسم.",
        "السطر الرابع يجمع سنة واحدة مع العمر ثم يعرض النتيجة."
    ]
},
{
    title: "Conditional Statements",
    description: "اتخاذ القرارات باستخدام الشروط.",
    topics: [
        ["if", "تنفذ الأوامر عندما يكون الشرط صحيحاً."],
        ["else", "تنفذ عندما لا يتحقق شرط if."],
        ["elif", "تستخدم لفحص شرط إضافي."],
        ["and", "يشترط تحقق الشرطين."],
        ["or", "يكفي تحقق شرط واحد."],
        ["not", "تعكس القيمة المنطقية."],
        ["Nested if", "شرط داخل شرط آخر."],
        ["Indentation", "المسافات البادئة تحدد الأوامر التابعة للشرط."]
    ],
    code: `mark = int(input("Enter mark: "))

if mark >= 90:
    print("Excellent")
elif mark >= 50:
    print("Pass")
else:
    print("Fail")`,
    explanation: [
        "نستقبل الدرجة ونحولها إلى عدد صحيح.",
        "نفحص أولاً هل الدرجة 90 أو أكثر.",
        "إذا لم يتحقق الشرط الأول، ننتقل إلى elif.",
        "نفحص هل الدرجة 50 أو أكثر.",
        "إذا لم يتحقق أي شرط، تنفذ else."
    ]
},
{
    title: "Loops: for and while",
    description: "التكرار والتحكم في الحلقات.",
    topics: [
        ["for", "تكرر الأوامر على عناصر أو نطاق محدد."],
        ["while", "تكرر الأوامر طالما الشرط صحيح."],
        ["range()", "تولد تسلسلاً من الأعداد."],
        ["break", "تنهي الحلقة مباشرة."],
        ["continue", "تتخطى التكرار الحالي."],
        ["Nested Loops", "حلقة داخل حلقة أخرى."],
        ["Counter", "متغير يستخدم لحساب مرات التكرار."],
        ["Sentinel Value", "قيمة خاصة تستخدم لإنهاء الإدخال."]
    ],
    code: `for i in range(1, 4):
    print(i)

count = 1

while count <= 3:
    print(count)
    count += 1`,
    explanation: [
        "حلقة for تبدأ بالقيمة 1.",
        "range(1, 4) تنتج 1 و2 و3 لأن 4 غير مشمولة.",
        "تطبع الحلقة الأعداد الثلاثة.",
        "بعدها نعرف count بقيمة 1.",
        "تستمر while طالما count أصغر من أو يساوي 3.",
        "في كل دورة نزيد count بمقدار واحد."
    ]
}
];

$("#lessonContainer").innerHTML = lessons.map((lesson, index) => `
    <article class="card">
        <h3>${index + 1}. ${lesson.title}</h3>
        <p>${lesson.description}</p>
        <button onclick="showLesson(${index})">افتح المحاضرة ←</button>
    </article>
`).join("");

window.showLesson = function(index) {
    const lesson = lessons[index];

    $("#lessonDetails").innerHTML = `
        <article class="lesson-detail">
            <h2>${lesson.title}</h2>
            <p>${lesson.description}</p>

            <h3>المفاهيم الأساسية</h3>
            ${lesson.topics.map(topic => `
                <div class="step">
                    <strong>${escapeHTML(topic[0])}</strong>
                    <p>${escapeHTML(topic[1])}</p>
                </div>
            `).join("")}

            <h3>مثال تطبيقي</h3>
            <pre class="code">${escapeHTML(lesson.code)}</pre>

            <h3>شرح كل خطوة</h3>
            ${lesson.explanation.map((item, i) => `
                <div class="step">
                    <strong>الخطوة ${i + 1}</strong>
                    <p>${escapeHTML(item)}</p>
                </div>
            `).join("")}
        </article>
    `;

    $("#lessonDetails").scrollIntoView({behavior: "smooth"});
};


// ======================================
// 2. بنك MCQ
// كل سؤال: السؤال، الخيارات، الصحيح، الشرح
// ======================================

const mcq = [
["ما نوع البيانات للقيمة 15؟",["str","int","float","bool"],1,"القيمة 15 عدد صحيح، لذلك نوعها int.","str مخصص للنصوص، وfloat للأعداد العشرية، وbool للقيم المنطقية."],
["ما نوع القيمة 'Python'؟",["int","float","str","bool"],2,"وجود علامات الاقتباس يعني أن القيمة نصية.","int عدد صحيح، وfloat عشري، وbool منطقي."],
["ما وظيفة input()؟",["طباعة النص","استقبال إدخال المستخدم","إنشاء حلقة","مقارنة قيمتين"],1,"تسمح للمستخدم بإدخال قيمة أثناء تشغيل البرنامج.","الطباعة تتم باستخدام print()، أما input() فتستقبل الإدخال."],
["ما ناتج 7 // 2؟",["3.5","3","1","4"],1,"العامل // ينفذ القسمة الصحيحة ويحذف الجزء العشري.","3.5 ناتج القسمة العادية، و1 هو باقي القسمة باستخدام %."],
["ما ناتج 7 % 2؟",["3","2","1","0"],2,"العامل % يعيد باقي القسمة. عند قسمة 7 على 2 يكون الباقي 1.","3 هو خارج القسمة الصحيحة، و0 ليس الباقي هنا."],
["أي عامل يستخدم للمقارنة بالمساواة؟",["=","==","!=","<"],1,"العامل == يقارن بين قيمتين.","= للإسناد، و!= لعدم المساواة، و< للمقارنة الأصغر."],
["ما نوع True؟",["int","str","bool","float"],2,"True قيمة منطقية ونوعها bool.","الأنواع الأخرى تستخدم للأعداد أو النصوص."],
["ما ناتج 2 ** 3؟",["5","6","8","9"],2,"العامل ** للأس. أي 2 × 2 × 2 = 8.","+ للجمع و* للضرب العادي."],
["ما العامل الذي يشترط تحقق شرطين؟",["or","and","not","%"],1,"and تكون True عندما يكون الشرطان صحيحين.","or يكفيه شرط واحد، وnot يعكس القيمة."],
["ما ناتج not True؟",["True","False","None","1"],1,"not تعكس القيمة المنطقية، لذلك تتحول True إلى False.","True هي القيمة قبل تطبيق not."],
["متى تنفذ if؟",["دائماً","عندما يتحقق الشرط","عندما يفشل الشرط","بعد انتهاء البرنامج"],1,"تنفذ الأوامر داخل if عندما تكون نتيجة الشرط True.","إذا كان الشرط False فلن تنفذ أوامر if."],
["ما وظيفة else؟",["شرط إضافي","الحالة البديلة","تعريف متغير","إنشاء حلقة"],1,"else تنفذ عندما لا يتحقق شرط if.","elif هي التي تفحص شرطاً إضافياً."],
["ما وظيفة elif؟",["فحص شرط آخر","طباعة قيمة","إنهاء البرنامج","تحويل البيانات"],0,"تستخدم لفحص حالة إضافية بعد if.","ليست أمراً للطباعة أو التحويل."],
["ما ناتج 5 > 3؟",["5","3","True","False"],2,"العدد 5 أكبر من 3، لذلك نتيجة المقارنة True.","المقارنة لا تعيد العدد نفسه، بل قيمة منطقية."],
["ما وظيفة range(4)؟",["1 إلى 4","0 إلى 3","0 إلى 4","4 فقط"],1,"range(4) تبدأ من 0 وتتوقف قبل 4.","نهاية range غير مشمولة."],
["كم مرة تعمل range(1,5)؟",["4 مرات","5 مرات","3 مرات","6 مرات"],0,"القيم هي 1 و2 و3 و4، أي أربع مرات.","العدد 5 لا يدخل في التسلسل."],
["ما وظيفة while؟",["التكرار بشرط","تحويل النص","المقارنة","تعريف متغير"],0,"تستمر الحلقة طالما الشرط True.","إذا أصبح الشرط False تتوقف الحلقة."],
["ما وظيفة break؟",["تخطي الدورة","إنهاء الحلقة","إعادة تشغيلها","طباعة الناتج"],1,"break يخرج مباشرة من الحلقة الحالية.","continue يتخطى الدورة الحالية فقط."],
["ما وظيفة continue؟",["إنهاء البرنامج","تخطي الدورة الحالية","إنهاء الحلقة","تعريف متغير"],1,"continue يتجاوز بقية أوامر الدورة الحالية وينتقل للتالية.","break هو الذي ينهي الحلقة."],
["ما خطر عدم تحديث عداد while؟",["حلقة لانهائية","تحويل البيانات","طباعة فارغة","لا يوجد خطر"],0,"إذا بقي الشرط True ولم تتغير قيمة العداد فقد تستمر الحلقة بلا توقف.","يجب تحديث العداد أو تغيير الشرط بطريقة مناسبة."],
["ما معنى x += 1؟",["x = 1","x = x + 1","x == 1","x = x - 1"],1,"تضيف واحداً إلى القيمة الحالية للمتغير x.","ليست مقارنة، بل عملية إسناد مختصرة."],
["ما ناتج len('cat')؟",["2","3","4","5"],1,"len تحسب عدد الأحرف، وكلمة cat تتكون من ثلاثة أحرف.","لا تحسب قيمة الأحرف بل عددها."],
["ما وظيفة print()؟",["استقبال إدخال","عرض المعلومات","إنشاء حلقة","تحويل النوع"],1,"print تعرض النصوص والقيم والنواتج على الشاشة.","input هي المسؤولة عن استقبال إدخال المستخدم."],
["ما ناتج bool(0)؟",["True","False","0","None"],1,"الصفر يعد قيمة False عند تحويله إلى bool.","الأعداد غير الصفرية تعد True."],
["ما ناتج bool('Hi')؟",["False","True","0","خطأ"],1,"أي نص غير فارغ يعتبر True عند تحويله إلى bool.","النص الفارغ فقط يعتبر False."],
["أي عامل يعني أو؟",["and","or","not","in"],1,"or تكون True إذا تحقق شرط واحد على الأقل.","and تحتاج تحقق الشرطين."],
["ما ناتج 10 / 2؟",["5","5.0","2","10"],1,"القسمة العادية / تعيد عدداً عشرياً من نوع float.","القسمة الصحيحة // هي التي تعيد 5 كعدد صحيح."],
["ما ناتج 10 - 3 * 2؟",["14","4","7","20"],1,"الضرب ينفذ قبل الطرح، لذلك 10 - 6 = 4.","لا ننفذ الطرح قبل الضرب."],
["كيف نكتب تعليقاً في Python؟",["//","<!--","#","**"],2,"يبدأ التعليق باستخدام الرمز #.","الرموز الأخرى ليست صيغة التعليق المعتادة في Python."],
["ما فائدة f-string؟",["إدراج المتغيرات داخل النص","إنشاء حلقة","إنشاء شرط","قراءة ملف"],0,"تسمح بإدراج قيمة متغير داخل نص باستخدام الأقواس المعقوفة.","هي طريقة تنسيق نصوص وليست حلقة."],
["ما ناتج '2' + '3'؟",["5","23","خطأ","1"],1,"القيمتان نصيتان، لذلك + يدمجهما لتصبح النتيجة 23.","للحصول على 5 يجب تحويلهما إلى أعداد."],
["بماذا نحول input إلى عدد صحيح؟",["str()","int()","print()","break"],1,"int تحول النص الرقمي إلى عدد صحيح.","str تحول القيمة إلى نص."],
["أي حلقة تستخدم غالباً عندما نعرف عدد التكرارات؟",["for","while فقط","if","else"],0,"for مع range مناسبة لتكرار عدد معروف من المرات.","while تعتمد على استمرار تحقق الشرط."],
["ما المقصود بـ Sentinel Value؟",["قيمة إنهاء الإدخال","نوع بيانات","عامل حسابي","حلقة متداخلة"],0,"هي قيمة خاصة يحددها البرنامج لإنهاء عملية إدخال متكررة.","ليست نوع بيانات بحد ذاتها."],
["ما ناتج range(2,10,2)؟",["2,4,6,8","2,4,6,8,10","0,2,4,6","2,10"],0,"تبدأ من 2 وتزيد بمقدار 2 وتتوقف قبل 10.","العدد 10 غير مشمول."],
["ما معنى Nested Loops؟",["حلقة داخل حلقة","شرط داخل شرط","متغيران","دالتان"],0,"تعني وجود حلقة تكرار داخل حلقة تكرار أخرى.","تستخدم مثلاً لطباعة الجداول والأشكال."],
["أي عامل يعكس الشرط؟",["and","or","not","=="],2,"not تعكس True إلى False والعكس.","and وor تربطان شروطاً ولا تعكسانها."],
["نسيان النقطتين بعد if يؤدي غالباً إلى؟",["SyntaxError","حلقة لانهائية","نتيجة صفر","تحويل النوع"],0,"Python تتطلب النقطتين : بعد رأس جملة if.","المشكلة تتعلق بصياغة الكود."],
["أي اسم متغير صحيح؟",["2name","user_name","user-name","class"],1,"يمكن أن يحتوي الاسم على أحرف وأرقام وشرطة سفلية، بشرط ألا يبدأ برقم وألا يكون كلمة محجوزة.","الشرطة - ليست جزءاً صالحاً من اسم المتغير، وclass كلمة محجوزة."],
["ما ناتج 3 == 3؟",["3","True","False","None"],1,"القيمتان متساويتان، لذلك المقارنة True.","== يعيد قيمة منطقية وليس العدد نفسه."],
["ما ناتج 4 != 4؟",["True","False","4","None"],1,"!= تعني لا يساوي، لكن العددين متساويان، فالنتيجة False.","لو كانت القيمتان مختلفتين لكانت True."],
["ما ناتج range(3,0,-1)؟",["3,2,1","3,2,1,0","0,1,2","2,1,0"],0,"تبدأ من 3 وتنقص واحداً وتتوقف قبل 0.","الصفر غير مشمول."],
["ما ناتج 2 * 3 + 1؟",["7","9","8","6"],0,"الضرب أولاً: 2 × 3 = 6، ثم الجمع: 6 + 1 = 7.","ترتيب العمليات الحسابية مهم."],
["ما ناتج int('8') + 2؟",["82","10","8","خطأ"],1,"int يحول النص '8' إلى العدد 8 ثم نجمع 2.","بدون التحويل قد يحدث خطأ عند جمع نص وعدد."],
["ما وظيفة type(x)؟",["معرفة نوع البيانات","طباعة","تكرار","تحويل"],0,"تعيد نوع القيمة المخزنة في x.","لا تغير نوع المتغير."],
["ما ناتج 6 >= 6؟",["True","False","6","None"],0,">= تعني أكبر من أو يساوي، والمساواة متحققة.","لو استخدمنا > فقط لكانت النتيجة False."],
["أي أمر يخرج من الحلقة؟",["continue","break","input","print"],1,"break ينهي الحلقة مباشرة.","continue يتخطى الدورة الحالية فقط."],
["ما ناتج 5 == 5 and 2 < 4؟",["True","False","5","2"],0,"الشرط الأول True والثاني True، لذلك and تعيد True.","يجب تحقق الشرطين معاً."],
["ما ناتج 5 == 3 or 2 < 4؟",["True","False","None","خطأ"],0,"الشرط الأول False والثاني True، وباستخدام or تكون النتيجة True.","or تحتاج شرطاً صحيحاً واحداً على الأقل."],
["أي قيمة تمثل نصاً فارغاً؟",["0","False","''","None"],2,"علامتا الاقتباس دون محتوى تمثلان نصاً فارغاً.","الصفر وFalse وNone ليست نصوصاً فارغة."]
];

let questionIndex = 0;
let score = 0;
let answered = false;

function renderQuestion() {
    const q = mcq[questionIndex];

    $("#quizNumber").textContent =
        `السؤال ${questionIndex + 1} من ${mcq.length}`;

    $("#quizScore").textContent = `النتيجة: ${score}`;

    $("#progressBar").style.width =
        ((questionIndex + 1) / mcq.length * 100) + "%";

    $("#question").textContent = q[0];
    $("#feedback").innerHTML = "";
    $("#feedback").classList.remove("show");

    $("#nextBtn").disabled = true;
    answered = false;

    $("#answers").innerHTML = q[1].map((answer, i) => `
        <button class="answer" data-index="${i}">
            <strong>${"ABCD"[i]}.</strong>
            ${escapeHTML(answer)}
        </button>
    `).join("");

    document.querySelectorAll(".answer").forEach(button => {
        button.addEventListener("click", () => chooseAnswer(button, q));
    });
}

function chooseAnswer(button, q) {
    if (answered) return;

    answered = true;

    const selected = Number(button.dataset.index);
    const correct = q[2];
    const isCorrect = selected === correct;

    if (isCorrect) score++;

    document.querySelectorAll(".answer").forEach((item, index) => {
        item.disabled = true;

        if (index === correct) item.classList.add("correct");
        if (index === selected && !isCorrect) {
            item.classList.add("wrong");
        }
    });

    const letters = ["A", "B", "C", "D"];

    $("#feedback").innerHTML = `
        <div class="explanation-title">
            ${isCorrect ? "✓ إجابة صحيحة" : "✕ إجابة غير صحيحة"}
        </div>

        <div class="explanation-item">
            <strong>إجابتك:</strong>
            ${letters[selected]}. ${escapeHTML(q[1][selected])}
        </div>

        <div class="explanation-item">
            <strong>الإجابة الصحيحة:</strong>
            ${letters[correct]}. ${escapeHTML(q[1][correct])}
        </div>

        <div class="explanation-item">
            <strong>لماذا هذه الإجابة صحيحة؟</strong>
            <p>${escapeHTML(q[3])}</p>
        </div>

        <div class="explanation-item">
            <strong>لماذا الخيارات الأخرى غير صحيحة؟</strong>
            <p>${escapeHTML(q[4])}</p>
        </div>
    `;

    $("#feedback").classList.add("show");
    $("#quizScore").textContent = `النتيجة: ${score}`;
    $("#nextBtn").disabled = false;
}

$("#nextBtn").addEventListener("click", () => {
    if (questionIndex < mcq.length - 1) {
        questionIndex++;
        renderQuestion();
    } else {
        $("#question").textContent = "انتهى الاختبار!";
        $("#answers").innerHTML = "";

        $("#feedback").innerHTML = `
            <div class="explanation-title">نتيجتك النهائية</div>
            <h2>${score} / ${mcq.length}</h2>
            <p>راجع الأسئلة التي أخطأت فيها، ثم أعد الاختبار.</p>
        `;

        $("#feedback").classList.add("show");
        $("#nextBtn").disabled = true;
    }
});

$("#restartBtn").addEventListener("click", () => {
    questionIndex = 0;
    score = 0;
    renderQuestion();
});

renderQuestion();


// ======================================
// 3. البرامج التطبيقية
// ======================================

const programs = [
{
    title: "جمع عددين",
    category: "variables",
    code: `a = 5
b = 7
result = a + b
print(result)`,
    steps: [
        "السطر الأول ينشئ المتغير a ويخزن العدد 5.",
        "السطر الثاني ينشئ المتغير b ويخزن العدد 7.",
        "السطر الثالث يجمع قيمة a مع قيمة b ويخزن الناتج في result.",
        "السطر الرابع يعرض قيمة result."
    ],
    output: "12"
},
{
    title: "إدخال اسم المستخدم",
    category: "variables",
    code: `name = input("Enter name: ")
print("Welcome", name)`,
    steps: [
        "input تعرض رسالة تطلب من المستخدم إدخال اسمه.",
        "الاسم الذي يدخله المستخدم يخزن في المتغير name.",
        "print تعرض كلمة Welcome ثم الاسم."
    ],
    output: "Welcome Ali"
},
{
    title: "حساب العمر في السنة القادمة",
    category: "variables",
    code: `age = int(input("Enter age: "))
next_year = age + 1
print(next_year)`,
    steps: [
        "نستقبل العمر باستخدام input.",
        "نستخدم int لتحويل النص إلى عدد صحيح.",
        "نضيف واحداً إلى العمر.",
        "نطبع العمر الجديد."
    ],
    output: "إذا كان العمر 20 فالناتج 21."
},
{
    title: "حساب مساحة المستطيل",
    category: "variables",
    code: `length = 10
width = 5
area = length * width
print(area)`,
    steps: [
        "length يمثل طول المستطيل ويساوي 10.",
        "width يمثل العرض ويساوي 5.",
        "المساحة تساوي الطول مضروباً في العرض.",
        "10 × 5 = 50."
    ],
    output: "50"
},
{
    title: "تحويل درجة الحرارة",
    category: "variables",
    code: `celsius = 25
fahrenheit = (celsius * 9/5) + 32
print(fahrenheit)`,
    steps: [
        "نخزن درجة الحرارة المئوية في celsius.",
        "نضرب القيمة في 9.",
        "نقسم الناتج على 5.",
        "نضيف 32 للحصول على Fahrenheit."
    ],
    output: "77.0"
},
{
    title: "زوجي أم فردي",
    category: "conditions",
    code: `number = 8

if number % 2 == 0:
    print("Even")
else:
    print("Odd")`,
    steps: [
        "نخزن العدد 8 في number.",
        "نحسب باقي قسمة العدد على 2.",
        "إذا كان الباقي صفر فالعدد زوجي.",
        "إذا لم يكن الباقي صفراً فالعدد فردي.",
        "بما أن 8 % 2 يساوي صفر، تظهر Even."
    ],
    output: "Even"
},
{
    title: "نجاح أو رسوب",
    category: "conditions",
    code: `mark = 75

if mark >= 50:
    print("Pass")
else:
    print("Fail")`,
    steps: [
        "المتغير mark يحتوي على الدرجة 75.",
        "نفحص هل 75 أكبر من أو يساوي 50.",
        "الشرط صحيح، لذلك تنفذ أوامر if.",
        "تظهر كلمة Pass."
    ],
    output: "Pass"
},
{
    title: "تقدير الطالب",
    category: "conditions",
    code: `mark = 85

if mark >= 90:
    print("A")
elif mark >= 80:
    print("B")
elif mark >= 70:
    print("C")
else:
    print("Other")`,
    steps: [
        "نفحص هل الدرجة 85 أكبر من أو تساوي 90: لا.",
        "ننتقل إلى elif ونفحص هل 85 أكبر من أو تساوي 80: نعم.",
        "تنفذ أوامر elif الثانية وتظهر B.",
        "لا يتم تنفيذ الشروط التالية."
    ],
    output: "B"
},
{
    title: "أكبر عدد بين عددين",
    category: "conditions",
    code: `a = 15
b = 10

if a > b:
    print(a)
else:
    print(b)`,
    steps: [
        "المتغير a يحتوي على 15.",
        "المتغير b يحتوي على 10.",
        "نفحص هل 15 أكبر من 10.",
        "الشرط صحيح، لذلك تتم طباعة a."
    ],
    output: "15"
},
{
    title: "آلة حاسبة بسيطة",
    category: "conditions",
    code: `a = 10
b = 5
operator = "+"

if operator == "+":
    print(a + b)
elif operator == "-":
    print(a - b)
elif operator == "*":
    print(a * b)
elif operator == "/" and b != 0:
    print(a / b)
else:
    print("Invalid")`,
    steps: [
        "نخزن العدد الأول والثاني.",
        "نخزن رمز العملية الحسابية.",
        "نفحص هل الرمز يساوي +.",
        "بما أنه يساوي + نجمع العددين.",
        "تظهر النتيجة 15."
    ],
    output: "15"
},
{
    title: "طباعة الأعداد من 1 إلى 5",
    category: "loops",
    code: `for i in range(1, 6):
    print(i)`,
    steps: [
        "range(1, 6) ينشئ الأعداد 1 و2 و3 و4 و5.",
        "المتغير i يأخذ أولاً القيمة 1.",
        "تنفذ print وتعرض 1.",
        "تتكرر العملية مع 2 ثم 3 ثم 4 ثم 5.",
        "تتوقف الحلقة قبل الوصول إلى 6."
    ],
    output: "1\n2\n3\n4\n5"
},
{
    title: "مجموع الأعداد من 1 إلى 5",
    category: "loops",
    code: `total = 0

for i in range(1, 6):
    total += i

print(total)`,
    steps: [
        "نبدأ total بقيمة صفر.",
        "الدورة الأولى: total = 0 + 1 = 1.",
        "الدورة الثانية: total = 1 + 2 = 3.",
        "الدورة الثالثة: total = 3 + 3 = 6.",
        "الدورة الرابعة: total = 6 + 4 = 10.",
        "الدورة الخامسة: total = 10 + 5 = 15.",
        "نطبع المجموع النهائي."
    ],
    output: "15"
},
{
    title: "جدول الضرب",
    category: "loops",
    code: `number = 3

for i in range(1, 11):
    print(number, "x", i, "=", number * i)`,
    steps: [
        "نحدد العدد الذي نريد جدول ضربه، وهو 3.",
        "range(1, 11) يولد الأعداد من 1 إلى 10.",
        "في كل دورة نضرب العدد 3 في قيمة i.",
        "تطبع الحلقة عشر نتائج."
    ],
    output: "3 x 1 = 3\n3 x 2 = 6\n...\n3 x 10 = 30"
},
{
    title: "العد التنازلي",
    category: "loops",
    code: `for i in range(5, 0, -1):
    print(i)`,
    steps: [
        "نبدأ من 5.",
        "الخطوة -1 تعني إنقاص العدد بمقدار واحد.",
        "القيم هي 5 ثم 4 ثم 3 ثم 2 ثم 1.",
        "تتوقف الحلقة قبل الصفر."
    ],
    output: "5\n4\n3\n2\n1"
},
{
    title: "حلقة while",
    category: "loops",
    code: `count = 1

while count <= 3:
    print(count)
    count += 1`,
    steps: [
        "نبدأ count بقيمة 1.",
        "نفحص الشرط 1 <= 3، وهو صحيح.",
        "تطبع الحلقة 1.",
        "count += 1 تجعل القيمة 2.",
        "تتكرر العملية عند 2 ثم 3.",
        "عندما تصبح القيمة 4 يصبح الشرط خطأ وتتوقف الحلقة."
    ],
    output: "1\n2\n3"
},
{
    title: "تخطي الأعداد الزوجية",
    category: "loops",
    code: `for i in range(1, 6):
    if i % 2 == 0:
        continue
    print(i)`,
    steps: [
        "تبدأ الحلقة من 1 إلى 5.",
        "نفحص هل العدد زوجي باستخدام باقي القسمة.",
        "إذا كان زوجياً تنفذ continue وتتخطى الطباعة.",
        "الأعداد الفردية فقط تصل إلى print."
    ],
    output: "1\n3\n5"
},
{
    title: "إيقاف الحلقة باستخدام break",
    category: "loops",
    code: `for i in range(1, 8):
    if i == 4:
        break
    print(i)`,
    steps: [
        "تبدأ الحلقة من 1.",
        "تطبع 1 ثم 2 ثم 3.",
        "عندما تصبح i مساوية 4 يتحقق الشرط.",
        "تنفذ break وتنتهي الحلقة فوراً.",
        "لا تتم طباعة 4."
    ],
    output: "1\n2\n3"
},
{
    title: "حساب المضروب Factorial",
    category: "loops",
    code: `n = 4
fact = 1

for i in range(1, n + 1):
    fact *= i

print(fact)`,
    steps: [
        "نحدد العدد n ويساوي 4.",
        "نبدأ fact بقيمة 1.",
        "الدورة الأولى: 1 × 1 = 1.",
        "الدورة الثانية: 1 × 2 = 2.",
        "الدورة الثالثة: 2 × 3 = 6.",
        "الدورة الرابعة: 6 × 4 = 24."
    ],
    output: "24"
},
{
    title: "حلقات متداخلة",
    category: "loops",
    code: `for i in range(2):
    for j in range(2):
        print(i, j)`,
    steps: [
        "الحلقة الخارجية تبدأ بقيمة i = 0.",
        "الحلقة الداخلية تعمل بقيم j = 0 ثم 1.",
        "بعد انتهاء الداخلية تزيد i إلى 1.",
        "تعمل الداخلية مرة أخرى عند j = 0 ثم 1.",
        "لذلك نحصل على أربع عمليات طباعة."
    ],
    output: "0 0\n0 1\n1 0\n1 1"
}
];

function renderPrograms() {
    const search = $("#programSearch").value.toLowerCase();
    const category = $("#programCategory").value;

    const filtered = programs.filter(program => {
        const matchesSearch = program.title.toLowerCase().includes(search);
        const matchesCategory =
            category === "all" || category === program.category;

        return matchesSearch && matchesCategory;
    });

    $("#programContainer").innerHTML = filtered.map((program, index) => `
        <article class="card">
            <h3>${escapeHTML(program.title)}</h3>
            <p>${escapeHTML(program.category)}</p>
            <button onclick="showProgram(${programs.indexOf(program)})">
                عرض البرنامج والشرح
            </button>
        </article>
    `).join("");
}

window.showProgram = function(index) {
    const program = programs[index];

    $("#programContainer").innerHTML += `
        <article class="lesson-detail">
            <h2>${escapeHTML(program.title)}</h2>

            <h3>الكود الكامل</h3>
            <pre class="code">${escapeHTML(program.code)}</pre>

            <h3>شرح البرنامج خطوة بخطوة</h3>

            ${program.steps.map((step, i) => `
                <div class="step">
                    <strong>الخطوة ${i + 1}</strong>
                    <p>${escapeHTML(step)}</p>
                </div>
            `).join("")}

            <h3>الناتج النهائي</h3>
            <pre class="final-output">${escapeHTML(program.output)}</pre>
        </article>
    `;

    $("#programContainer").lastElementChild.scrollIntoView({
        behavior: "smooth"
    });
};

$("#programSearch").addEventListener("input", renderPrograms);
$("#programCategory").addEventListener("change", renderPrograms);

renderPrograms();


// ======================================
// 4. توقع ناتج البرنامج
// ======================================

const outputs = [
{
    code: `x = 5
y = 3
print(x + y)`,
    answer: "8",
    steps: [
        "المتغير x يحتوي على 5.",
        "المتغير y يحتوي على 3.",
        "العملية x + y تعني 5 + 3.",
        "الناتج 8."
    ]
},
{
    code: `x = 10
print(x // 3)`,
    answer: "3",
    steps: [
        "x تساوي 10.",
        "العامل // ينفذ القسمة الصحيحة.",
        "10 تقسيم 3 يساوي 3 والباقي 1.",
        "الناتج المعروض هو 3."
    ]
},
{
    code: `x = 10
print(x % 3)`,
    answer: "1",
    steps: [
        "نقسم 10 على 3.",
        "3 × 3 = 9.",
        "يتبقى من 10 العدد 1.",
        "العامل % يعرض الباقي."
    ]
},
{
    code: `for i in range(3):
    print(i)`,
    answer: "0\n1\n2",
    steps: [
        "range(3) تنتج 0 و1 و2.",
        "في الدورة الأولى تطبع 0.",
        "في الدورة الثانية تطبع 1.",
        "في الدورة الثالثة تطبع 2.",
        "لا تطبع 3 لأن نهاية range غير مشمولة."
    ]
},
{
    code: `x = 2
x += 3
print(x)`,
    answer: "5",
    steps: [
        "القيمة الأولى لـ x هي 2.",
        "x += 3 تعني x = x + 3.",
        "نحسب 2 + 3.",
        "تصبح قيمة x تساوي 5."
    ]
},
{
    code: `print(2 ** 3)`,
    answer: "8",
    steps: [
        "العامل ** يعني الأس.",
        "نرفع العدد 2 للقوة 3.",
        "2 × 2 × 2 = 8."
    ]
},
{
    code: `print(7 / 2)`,
    answer: "3.5",
    steps: [
        "العامل / هو القسمة العادية.",
        "نقسم 7 على 2.",
        "الناتج 3.5."
    ]
},
{
    code: `print(7 // 2)`,
    answer: "3",
    steps: [
        "العامل // هو القسمة الصحيحة.",
        "نقسم 7 على 2.",
        "يتم حذف الجزء العشري.",
        "الناتج 3."
    ]
},
{
    code: `print(3 > 5)`,
    answer: "False",
    steps: [
        "نفحص هل 3 أكبر من 5.",
        "العبارة غير صحيحة.",
        "لذلك الناتج False."
    ]
},
{
    code: `print(not False)`,
    answer: "True",
    steps: [
        "القيمة الأصلية False.",
        "not تعكس القيمة المنطقية.",
        "تصبح النتيجة True."
    ]
},
{
    code: `for i in range(1, 4):
    print(i)`,
    answer: "1\n2\n3",
    steps: [
        "بداية النطاق 1.",
        "النهاية 4 وغير مشمولة.",
        "القيم التي تطبع هي 1 و2 و3."
    ]
},
{
    code: `x = 1
while x <= 3:
    print(x)
    x += 1`,
    answer: "1\n2\n3",
    steps: [
        "تبدأ x بقيمة 1.",
        "الشرط 1 <= 3 صحيح، فتطبع 1.",
        "تزيد x إلى 2 ثم تطبع 2.",
        "تزيد x إلى 3 ثم تطبع 3.",
        "تزيد x إلى 4 فيصبح الشرط خطأ."
    ]
},
{
    code: `for i in range(1, 6, 2):
    print(i)`,
    answer: "1\n3\n5",
    steps: [
        "بداية النطاق 1.",
        "الخطوة 2 تعني زيادة العدد بمقدار اثنين.",
        "القيم 1 ثم 3 ثم 5.",
        "يتوقف قبل الوصول إلى 6."
    ]
},
{
    code: `for i in range(5):
    if i == 3:
        break
    print(i)`,
    answer: "0\n1\n2",
    steps: [
        "تبدأ الحلقة من صفر.",
        "تطبع 0 ثم 1 ثم 2.",
        "عندما تصل إلى 3 يتحقق الشرط.",
        "break تنهي الحلقة قبل الطباعة."
    ]
},
{
    code: `for i in range(5):
    if i == 2:
        continue
    print(i)`,
    answer: "0\n1\n3\n4",
    steps: [
        "القيم من 0 إلى 4.",
        "تطبع 0 و1.",
        "عند 2 تنفذ continue وتتخطى الطباعة.",
        "تستمر الحلقة وتطبع 3 و4."
    ]
},
{
    code: `x = 10
if x > 5:
    print("A")
else:
    print("B")`,
    answer: "A",
    steps: [
        "x تساوي 10.",
        "نفحص هل 10 أكبر من 5.",
        "الشرط صحيح.",
        "تنفذ if وتطبع A."
    ]
},
{
    code: `mark = 40
if mark >= 50:
    print("Pass")
else:
    print("Fail")`,
    answer: "Fail",
    steps: [
        "الدرجة تساوي 40.",
        "نفحص هل 40 أكبر من أو تساوي 50.",
        "الشرط غير صحيح.",
        "تنفذ else وتطبع Fail."
    ]
},
{
    code: `print("2" + "3")`,
    answer: "23",
    steps: [
        "القيمة الأولى نص.",
        "القيمة الثانية نص أيضاً.",
        "العامل + يدمج النصين.",
        "الناتج هو النص 23."
    ]
},
{
    code: `print(int("8") + 2)`,
    answer: "10",
    steps: [
        "int تحول النص 8 إلى عدد صحيح.",
        "نضيف العدد 2.",
        "8 + 2 = 10."
    ]
},
{
    code: `total = 0
for n in [1, 2, 3]:
    total += n
print(total)`,
    answer: "6",
    steps: [
        "total تبدأ بصفر.",
        "بعد إضافة 1 تصبح 1.",
        "بعد إضافة 2 تصبح 3.",
        "بعد إضافة 3 تصبح 6.",
        "تتم طباعة 6."
    ]
},
{
    code: `print(bool(""))`,
    answer: "False",
    steps: [
        "القيمة بين علامتي الاقتباس فارغة.",
        "النص الفارغ يعتبر False في السياق المنطقي.",
        "الناتج False."
    ]
},
{
    code: `print(bool("Hello"))`,
    answer: "True",
    steps: [
        "Hello نص يحتوي على أحرف.",
        "النص غير الفارغ يعتبر True.",
        "الناتج True."
    ]
},
{
    code: `for i in range(3, 0, -1):
    print(i)`,
    answer: "3\n2\n1",
    steps: [
        "نبدأ من 3.",
        "الخطوة -1 تنقص واحداً في كل دورة.",
        "القيم 3 ثم 2 ثم 1.",
        "يتوقف قبل الصفر."
    ]
},
{
    code: `x = 2
while x <= 6:
    print(x)
    x += 2`,
    answer: "2\n4\n6",
    steps: [
        "تبدأ x بقيمة 2.",
        "تطبع 2 ثم تزيد بمقدار 2.",
        "تطبع 4 ثم تزيد إلى 6.",
        "تطبع 6 ثم تصبح 8.",
        "8 لا تحقق الشرط."
    ]
},
{
    code: `for i in range(2):
    for j in range(2):
        print(i, j)`,
    answer: "0 0\n0 1\n1 0\n1 1",
    steps: [
        "تبدأ الحلقة الخارجية عند i = 0.",
        "الحلقة الداخلية تنفذ j = 0 ثم j = 1.",
        "تتغير i إلى 1.",
        "تعمل الحلقة الداخلية من جديد عند j = 0 ثم 1.",
        "عدد مرات الطباعة أربع."
    ]
},
{
    code: `x = 5
print(x == 5)`,
    answer: "True",
    steps: [
        "x تساوي 5.",
        "العامل == يقارن القيمتين.",
        "5 تساوي 5، لذلك النتيجة True."
    ]
},
{
    code: `x = 5
print(x != 5)`,
    answer: "False",
    steps: [
        "x تساوي 5.",
        "العامل != يعني لا يساوي.",
        "القيمتان متساويتان.",
        "لذلك النتيجة False."
    ]
},
{
    code: `print(10 - 3 * 2)`,
    answer: "4",
    steps: [
        "ننفذ الضرب قبل الطرح.",
        "3 × 2 = 6.",
        "10 - 6 = 4."
    ]
},
{
    code: `x = 1
for i in range(3):
    x *= 2
print(x)`,
    answer: "8",
    steps: [
        "تبدأ x بقيمة 1.",
        "الدورة الأولى: 1 × 2 = 2.",
        "الدورة الثانية: 2 × 2 = 4.",
        "الدورة الثالثة: 4 × 2 = 8.",
        "الناتج النهائي 8."
    ]
},
{
    code: `a = 4
b = 2
print(a ** b)`,
    answer: "16",
    steps: [
        "a تساوي 4 وb تساوي 2.",
        "العامل ** يعني رفع العدد للأس.",
        "4 أس 2 = 4 × 4.",
        "الناتج 16."
    ]
}
];

function renderExercises(data, container, type) {
    $(container).innerHTML = data.map((item, index) => `
        <article class="exercise-card">
            <h3>${type} ${index + 1}</h3>

            <pre class="code">${escapeHTML(item.code)}</pre>

            <button class="reveal-btn" data-index="${index}">
                إظهار الحل والشرح
            </button>

            <div class="exercise-content" id="${type}-${index}">
                <div class="solution-title">الشرح خطوة بخطوة</div>

                ${item.steps.map((step, i) => `
                    <div class="step">
                        <strong>الخطوة ${i + 1}</strong>
                        <p>${escapeHTML(step)}</p>
                    </div>
                `).join("")}

                <h3>الناتج النهائي</h3>
                <pre class="final-output">${escapeHTML(item.answer)}</pre>
            </div>
        </article>
    `).join("");

    $(container).querySelectorAll(".reveal-btn").forEach(button => {
        button.addEventListener("click", () => {
            const index = Number(button.dataset.index);
            const content = document.getElementById(`${type}-${index}`);

            content.classList.toggle("show");

            button.textContent = content.classList.contains("show")
                ? "إخفاء الحل"
                : "إظهار الحل والشرح";
        });
    });
}

renderExercises(outputs, "#outputContainer", "توقع الناتج");


// ======================================
// 5. تصحيح الأخطاء
// ======================================

const debugExercises = [
{
    wrong: `if age >= 18
    print("Adult")`,
    correct: `if age >= 18:
    print("Adult")`,
    error: "نسينا النقطتين بعد شرط if.",
    explanation: "Python تحتاج الرمز : في نهاية رأس الشرط حتى تعرف أن الأوامر التالية تتبع هذا الشرط."
},
{
    wrong: `age = input("Age: ")
print(age + 1)`,
    correct: `age = int(input("Age: "))
print(age + 1)`,
    error: "input تعيد نصاً، ولا يمكن جمع النص مباشرة مع عدد.",
    explanation: "نستخدم int لتحويل الإدخال إلى عدد صحيح قبل إجراء العملية الحسابية."
},
{
    wrong: `if x = 10:
    print("Ten")`,
    correct: `if x == 10:
    print("Ten")`,
    error: "استخدمنا = بدلاً من ==.",
    explanation: "= للإسناد، أما == فتستخدم لمقارنة قيمتين."
},
{
    wrong: `if x > 0:
print("Positive")`,
    correct: `if x > 0:
    print("Positive")`,
    error: "المسافة البادئة مفقودة.",
    explanation: "يجب إزاحة أمر print لأنه تابع لجملة if."
},
{
    wrong: `for i in range(1, 5):
    print(i)
# المطلوب 1 إلى 5`,
    correct: `for i in range(1, 6):
    print(i)`,
    error: "العدد 5 غير مشمول في range(1, 5).",
    explanation: "نضيف واحداً إلى قيمة النهاية حتى يشمل النطاق العدد 5."
},
{
    wrong: `2name = "Ali"
print(2name)`,
    correct: `name2 = "Ali"
print(name2)`,
    error: "اسم المتغير يبدأ برقم.",
    explanation: "اسم المتغير في Python لا يمكن أن يبدأ برقم."
},
{
    wrong: `price = "12.5"
print(price * 2)`,
    correct: `price = float("12.5")
print(price * 2)`,
    error: "القيمة نص وليست عدداً عشرياً.",
    explanation: "نستخدم float لتحويل النص الرقمي إلى عدد عشري."
},
{
    wrong: `print(Hello)`,
    correct: `print("Hello")`,
    error: "النص غير موضوع بين علامات اقتباس.",
    explanation: "يجب وضع النصوص بين علامات اقتباس حتى تميزها Python عن أسماء المتغيرات."
},
{
    wrong: `i = 1
while i <= 5:
    print(i)`,
    correct: `i = 1
while i <= 5:
    print(i)
    i += 1`,
    error: "لم يتم تحديث العداد.",
    explanation: "تبقى قيمة i تساوي 1، لذلك يبقى الشرط صحيحاً. نضيف i += 1 لتحديث العداد."
},
{
    wrong: `a = 10
b = 0
print(a / b)`,
    correct: `a = 10
b = 0

if b != 0:
    print(a / b)
else:
    print("Cannot divide by zero")`,
    error: "محاولة القسمة على صفر.",
    explanation: "يجب فحص المقسوم عليه قبل تنفيذ عملية القسمة."
},
{
    wrong: `print(2 ^ 3)`,
    correct: `print(2 ** 3)`,
    error: "استخدمنا العامل ^ بدلاً من **.",
    explanation: "العامل ** هو عامل الأس في Python."
},
{
    wrong: `answer = input()
if answer = "yes":
    print("OK")`,
    correct: `answer = input()
if answer == "yes":
    print("OK")`,
    error: "استخدمنا عامل الإسناد داخل المقارنة.",
    explanation: "يجب استخدام == لمقارنة قيمة answer بالنص yes."
},
{
    wrong: `a = input()
b = input()
print(a + b)`,
    correct: `a = int(input())
b = int(input())
print(a + b)`,
    error: "القيمتان نصيتان.",
    explanation: "إذا أردنا جمع أعداد حسابياً نحول الإدخال إلى int."
},
{
    wrong: `print("Welcome"`,
    correct: `print("Welcome")`,
    error: "قوس الإغلاق مفقود.",
    explanation: "يجب إغلاق القوس الذي بدأ مع print."
},
{
    wrong: `if mark >= 50
    print("Pass")`,
    correct: `if mark >= 50:
    print("Pass")`,
    error: "النقطتان مفقودتان.",
    explanation: "كل جملة if تحتاج : بعد الشرط."
},
{
    wrong: `x = 5
if x > 3:
print("Big")`,
    correct: `x = 5
if x > 3:
    print("Big")`,
    error: "أمر الطباعة ليس مزاحاً إلى الداخل.",
    explanation: "الأوامر التابعة للشرط يجب أن تكون مزاحة."
},
{
    wrong: `n = 5
for i in range(1, n):
    print(i)`,
    correct: `n = 5
for i in range(1, n + 1):
    print(i)`,
    error: "النطاق لا يشمل العدد الأخير.",
    explanation: "range تتوقف قبل قيمة النهاية، لذلك نستخدم n + 1 عندما نريد شمول n."
},
{
    wrong: `x = "5"
print(x - 1)`,
    correct: `x = int("5")
print(x - 1)`,
    error: "لا يمكن طرح عدد من نص.",
    explanation: "يجب تحويل النص إلى عدد صحيح باستخدام int."
},
{
    wrong: `for i in range(5):
    if i == 2:
    print(i)`,
    correct: `for i in range(5):
    if i == 2:
        print(i)`,
    error: "المسافة البادئة بعد if غير صحيحة.",
    explanation: "يجب أن يكون print داخل if بإزاحة إضافية."
},
{
    wrong: `x = 10
while x > 0:
    print(x)
    x += 1`,
    correct: `x = 10
while x > 0:
    print(x)
    x -= 1`,
    error: "العداد يزيد بدلاً من أن ينقص.",
    explanation: "الشرط x > 0 يحتاج أن تنخفض قيمة x حتى تصل إلى الصفر وتتوقف الحلقة."
}
];

function renderDebug() {
    const container = $("#debugContainer");

    container.innerHTML = debugExercises.map((item, index) => `
        <article class="exercise-card">
            <h3>التمرين ${index + 1}: اكتشف الخطأ</h3>

            <p>ما المشكلة في هذا الكود؟</p>

            <pre class="code">${escapeHTML(item.wrong)}</pre>

            <button class="reveal-btn" data-index="${index}">
                عرض التصحيح والشرح
            </button>

            <div class="exercise-content" id="debug-${index}">
                <div class="solution-title">تحديد الخطأ</div>

                <div class="step">
                    ${escapeHTML(item.error)}
                </div>

                <div class="solution-title">الكود الصحيح</div>

                <pre class="code">${escapeHTML(item.correct)}</pre>

                <div class="solution-title">لماذا حدث الخطأ؟</div>

                <div class="step">
                    ${escapeHTML(item.explanation)}
                </div>
            </div>
        </article>
    `).join("");

    container.querySelectorAll(".reveal-btn").forEach(button => {
        button.addEventListener("click", () => {
            const index = Number(button.dataset.index);
            const content = document.getElementById(`debug-${index}`);

            content.classList.toggle("show");

            button.textContent = content.classList.contains("show")
                ? "إخفاء التصحيح"
                : "عرض التصحيح والشرح";
        });
    });
}

renderDebug();

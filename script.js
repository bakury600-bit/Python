
const $ = selector => document.querySelector(selector);

// ===============================
// 1. المحاضرات
// ===============================

const lessons = [
{
    title: "Variables, Data Types & Operators",

    description: "المتغيرات وأنواع البيانات والعمليات.",

    points: [
        "int: عدد صحيح مثل 10",
        "float: عدد عشري مثل 3.5",
        "str: نص مثل Python",
        "bool: True أو False",
        "type(): معرفة نوع البيانات",
        "input(): استقبال إدخال المستخدم",
        "int() و float() لتحويل الأنواع",
        "العمليات الحسابية + - * / // % **",
        "المقارنة == != > < >= <=",
        "العمليات المنطقية and و or و not"
    ],

    code:
`name = input("Enter name: ")
age = int(input("Enter age: "))

print(name)
print(age + 1)`
},

{
    title: "Conditional Statements",

    description: "الجمل الشرطية واتخاذ القرارات.",

    points: [
        "if: فحص الشرط",
        "else: الحالة البديلة",
        "elif: فحص شرط إضافي",
        "and: تحقق الشرطين",
        "or: تحقق أحد الشرطين",
        "not: عكس القيمة",
        "Nested if: شرط داخل شرط",
        "الانتباه إلى المسافات البادئة"
    ],

    code:
`mark = int(input("Enter mark: "))

if mark >= 90:
    print("Excellent")
elif mark >= 50:
    print("Pass")
else:
    print("Fail")`
},

{
    title: "Loops: while and for",

    description: "التكرار باستخدام while و for.",

    points: [
        "for: تكرار المرور على العناصر",
        "while: تكرار ما دام الشرط صحيحاً",
        "range(): إنشاء نطاق من الأعداد",
        "break: إنهاء الحلقة",
        "continue: تخطي التكرار الحالي",
        "Nested loops: حلقات متداخلة",
        "تحديث العداد داخل while",
        "Sentinel value: قيمة إنهاء الإدخال"
    ],

    code:
`for i in range(1, 6):
    print(i)

count = 1

while count <= 3:
    print(count)
    count += 1`
}
];

$("#lessonContainer").innerHTML = lessons.map((lesson, index) => `
    <article class="card">
        <h3>${lesson.title}</h3>
        <p>${lesson.description}</p>
        <button onclick="showLesson(${index})">
            عرض الشرح
        </button>
    </article>
`).join("");

window.showLesson = function(index) {
    const lesson = lessons[index];

    $("#lessonDetails").innerHTML = `
        <article class="card">
            <h3>${lesson.title}</h3>
            <p>${lesson.description}</p>

            <ul>
                ${lesson.points.map(p => `<li>${p}</li>`).join("")}
            </ul>

            <h4>مثال تطبيقي</h4>
            <pre class="code">${lesson.code}</pre>
        </article>
    `;

    $("#lessonDetails").scrollIntoView({
        behavior: "smooth"
    });
};


// ===============================
// 2. أسئلة MCQ
// ===============================

const mcq = [
["ما نوع القيمة 15؟", ["str","int","float","bool"], 1, "15 عدد صحيح."],
["ما نوع القيمة 'Python'؟", ["int","float","str","bool"], 2, "النص نوعه str."],
["ما وظيفة input()؟", ["طباعة","استقبال إدخال","حلقة","مقارنة"], 1, "تستقبل إدخال المستخدم."],
["ما ناتج 7 // 2؟", ["3.5","3","1","4"], 1, "قسمة صحيحة."],
["ما ناتج 7 % 2؟", ["3","2","1","0"], 2, "باقي القسمة هو 1."],
["أي عامل للمقارنة بالمساواة؟", ["=","==","!=","<"], 1, "== للمقارنة."],
["أي نوع للقيم True و False؟", ["int","str","bool","float"], 2, "bool نوع منطقي."],
["ما ناتج 2 ** 3؟", ["5","6","8","9"], 2, "2 أس 3 يساوي 8."],
["أي عامل يتطلب تحقق الشرطين؟", ["or","and","not","%"], 1, "and يتطلب الشرطين."],
["ما ناتج not True؟", ["True","False","None","1"], 1, "not تعكس القيمة."],
["متى تنفذ if؟", ["دائماً","إذا تحقق الشرط","إذا فشل","بعد الحلقة"], 1, "عندما يكون الشرط True."],
["ما وظيفة else؟", ["شرط إضافي","الحالة البديلة","حلقة","تحويل"], 1, "تنفذ عند عدم تحقق الشرط."],
["ما وظيفة elif؟", ["فحص شرط إضافي","تعريف متغير","طباعة","إنهاء"], 0, "تفحص حالة أخرى."],
["ما ناتج 5 > 3؟", ["5","3","True","False"], 2, "خمسة أكبر من ثلاثة."],
["كيف نفحص العمر 18 أو أكثر؟", ["age=18","age>=18","age<18","age!=18"], 1, ">= تعني أكبر من أو يساوي."],
["ما المقصود بـ nested if؟", ["if داخل if","حلقة داخل حلقة","نص","دالة"], 0, "شرط داخل شرط."],
["أي قيمة falsy؟", ["'Hi'","10","0","[1]"], 2, "الصفر falsy."],
["ما وظيفة for؟", ["تحويل","التكرار","المقارنة","الإسناد"], 1, "تكرر على العناصر أو النطاق."],
["range(4) ينتج؟", ["1,2,3,4","0,1,2,3","0,1,2,3,4","4"], 1, "النهاية غير مشمولة."],
["كم مرة تتكرر range(1,5)؟", ["4","5","3","6"], 0, "القيم 1 إلى 4."],
["ما وظيفة while؟", ["التكرار بشرط","تعريف نص","إيقاف","تحويل"], 0, "تستمر ما دام الشرط True."],
["ما وظيفة break؟", ["تخطي دورة","إنهاء الحلقة","إعادة تشغيل","طباعة"], 1, "يخرج من الحلقة."],
["ما وظيفة continue؟", ["إنهاء البرنامج","تخطي التكرار الحالي","إنهاء الحلقة","تعريف"], 1, "ينتقل للتكرار التالي."],
["ما خطر عدم تحديث عداد while؟", ["حلقة لانهائية","تحويل نوع","لا شيء","طباعة"], 0, "قد يستمر الشرط صحيحاً."],
["أي صيغة تزيد x واحداً؟", ["x=1","x+=1","x==1","x%1"], 1, "تعادل x=x+1."],
["ما ناتج len('cat')؟", ["2","3","4","خطأ"], 1, "ثلاثة أحرف."],
["ما وظيفة print()؟", ["إدخال","عرض الناتج","تحويل","تكرار"], 1, "تعرض المعلومات."],
["ما ناتج bool(0)؟", ["True","False","0","None"], 1, "الصفر falsy."],
["ما ناتج bool('Hi')؟", ["False","True","0","خطأ"], 1, "النص غير الفارغ truthy."],
["أي عامل يعني أو؟", ["and","or","not","in"], 1, "or يكفي تحقق أحد الشرطين."],
["ما ناتج 10 / 2؟", ["5","5.0","2","10"], 1, "القسمة العادية تعيد float."],
["ما ناتج 10 - 3 * 2؟", ["14","4","7","20"], 1, "الضرب أولاً."],
["كيف نكتب تعليقاً؟", ["//","<!--","#","**"], 2, "يبدأ التعليق بـ #."],
["ما فائدة f-string؟", ["إدراج متغيرات بالنص","حلقة","شرط","قراءة ملف"], 0, "تدرج المتغير داخل النص."],
["ما ناتج '2' + '3'؟", ["5","23","خطأ","1"], 1, "دمج نصوص."],
["ماذا نستخدم لتحويل input إلى رقم؟", ["str()","int() أو float()","print()","break"], 1, "input يعيد نصاً."],
["أي حلقة لعدد مرات معلوم غالباً؟", ["for","while فقط","if","else"], 0, "for مع range."],
["ما sentinel value؟", ["قيمة إنهاء","نوع بيانات","عامل","حلقة"], 0, "قيمة خاصة لإنهاء الإدخال."],
["range(2,10,2) ينتج؟", ["2,4,6,8","2,4,6,8,10","0,2,4,6","2,10"], 0, "يتوقف قبل 10."],
["nested loops تعني؟", ["حلقة داخل حلقة","شرط داخل شرط","متغيرين","دالتين"], 0, "حلقة داخل حلقة أخرى."],
["أي عامل يعكس الشرط؟", ["and","or","not","=="], 2, "not تعكس القيمة."],
["نسيان : بعد if يسبب؟", ["SyntaxError","لا مشكلة","حلقة","None"], 0, "النقطتان ضروريتان."],
["أي اسم متغير صحيح؟", ["2name","user_name","user-name","class"], 1, "لا يبدأ المتغير برقم."],
["ما ناتج 3 == 3؟", ["3","True","False","None"], 1, "القيمتان متساويتان."],
["ما ناتج 4 != 4؟", ["True","False","4","خطأ"], 1, "4 لا تختلف عن 4."],
["range(3,0,-1) ينتج؟", ["3,2,1","3,2,1,0","0,1,2","2,1,0"], 0, "يتوقف قبل الصفر."],
["ما ناتج 2 * 3 + 1؟", ["7","9","8","6"], 0, "الضرب أولاً."],
["ما ناتج int('8') + 2؟", ["82","10","8","خطأ"], 1, "نحول النص إلى عدد."],
["ما وظيفة type(x)؟", ["معرفة النوع","طباعة","تكرار","تحويل"], 0, "تعرف نوع البيانات."],
["ما ناتج 6 >= 6؟", ["True","False","6","None"], 0, ">= تشمل المساواة."],
["أي أمر يخرج من الحلقة؟", ["continue","break","input","print"], 1, "break ينهي الحلقة."]
];

let currentQuestion = 0;
let score = 0;
let locked = false;

function showQuestion() {
    const q = mcq[currentQuestion];

    $("#quizInfo").textContent =
        `السؤال ${currentQuestion + 1} من ${mcq.length} | النتيجة: ${score}`;

    $("#progressBar").style.width =
        ((currentQuestion + 1) / mcq.length * 100) + "%";

    $("#question").textContent = q[0];
    $("#feedback").textContent = "";
    $("#nextBtn").disabled = true;
    locked = false;

    $("#answers").innerHTML = q[1].map((answer, i) => `
        <button class="answer" data-index="${i}">
            ${"ABCD"[i]}. ${answer}
        </button>
    `).join("");

    document.querySelectorAll(".answer").forEach(button => {
        button.onclick = function() {
            if (locked) return;
            locked = true;

            const selected = Number(this.dataset.index);

            if (selected === q[2]) score++;

            document.querySelectorAll(".answer").forEach((btn, i) => {
                btn.disabled = true;

                if (i === q[2]) btn.classList.add("correct");
                if (i === selected && selected !== q[2]) {
                    btn.classList.add("wrong");
                }
            });

            $("#feedback").textContent =
                (selected === q[2] ? "إجابة صحيحة! " : "إجابة غير صحيحة. ")
                + q[3];

            $("#quizInfo").textContent =
                `السؤال ${currentQuestion + 1} من ${mcq.length} | النتيجة: ${score}`;

            $("#nextBtn").disabled = false;
        };
    });
}

$("#nextBtn").onclick = function() {
    if (currentQuestion < mcq.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        $("#question").textContent =
            `انتهى الاختبار! نتيجتك ${score} من ${mcq.length}`;

        $("#answers").innerHTML = "";
        $("#feedback").textContent =
            "راجع إجاباتك وحاول مرة أخرى لتحسين نتيجتك.";

        $("#nextBtn").disabled = true;
    }
};

$("#restartBtn").onclick = function() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
};

showQuestion();


// ===============================
// 3. البرامج التطبيقية
// ===============================

const programs = [
["طباعة رسالة","variables",'print("Hello Python")',"print تعرض النص."],
["جمع عددين","variables",'a = 5\\nb = 7\\nprint(a + b)',"نجمع العددين."],
["إدخال الاسم","variables",'name = input("Name: ")\\nprint("Welcome", name)',"استقبال اسم المستخدم."],
["حساب العمر","variables",'age = int(input("Age: "))\\nprint(age + 1)',"تحويل الإدخال إلى int."],
["تحويل الحرارة","variables",'c = float(input())\\nprint(c * 9/5 + 32)',"تحويل Celsius إلى Fahrenheit."],
["مساحة مستطيل","variables",'l = float(input())\\nw = float(input())\\nprint(l * w)',"الطول في العرض."],
["حساب المتوسط","variables",'a = 10\\nb = 20\\nprint((a+b)/2)',"جمع القيم وقسمتها على عددها."],
["التحويل إلى نص","variables",'number = 25\\ntext = str(number)\\nprint(type(text))',"تحويل العدد إلى str."],
["زوجي أو فردي","conditions",'n = int(input())\\nif n % 2 == 0:\\n    print("Even")\\nelse:\\n    print("Odd")',"فحص باقي القسمة."],
["نجاح أو رسوب","conditions",'mark = int(input())\\nif mark >= 50:\\n    print("Pass")\\nelse:\\n    print("Fail")',"فحص الدرجة."],
["تقدير الدرجة","conditions",'m = int(input())\\nif m >= 90: print("A")\\nelif m >= 80: print("B")\\nelif m >= 70: print("C")\\nelse: print("Other")',"فحص عدة حالات."],
["أكبر عددين","conditions",'a = int(input())\\nb = int(input())\\nif a > b: print(a)\\nelse: print(b)',"المقارنة بين عددين."],
["فحص العمر","conditions",'age = int(input())\\nif age >= 13 and age <= 19:\\n    print("Teen")\\nelse:\\n    print("Not teen")',"استخدام and."],
["آلة حاسبة","conditions",'a = float(input())\\nop = input()\\nb = float(input())\\nif op == "+": print(a+b)\\nelif op == "-": print(a-b)\\nelif op == "*": print(a*b)\\nelif op == "/" and b != 0: print(a/b)\\nelse: print("Invalid")',"اختيار العملية."],
["الأعداد من 1 إلى 5","loops",'for i in range(1,6):\\n    print(i)',"حلقة for."],
["مجموع 1 إلى n","loops",'n = int(input())\\ntotal = 0\\nfor i in range(1,n+1):\\n    total += i\\nprint(total)',"حساب المجموع."],
["جدول الضرب","loops",'n = int(input())\\nfor i in range(1,11):\\n    print(n, "x", i, "=", n*i)',"جدول ضرب العدد."],
["العد التنازلي","loops",'for i in range(5,0,-1):\\n    print(i)',"استخدام خطوة سالبة."],
["مجموع while","loops",'i = 1\\ntotal = 0\\nwhile i <= 5:\\n    total += i\\n    i += 1\\nprint(total)',"تحديث عداد while."],
["إدخال حتى الصفر","loops",'total = 0\\nn = int(input())\\nwhile n != 0:\\n    total += n\\n    n = int(input())\\nprint(total)',"الصفر قيمة إنهاء."],
["تجاوز الزوجي","loops",'for i in range(1,11):\\n    if i % 2 == 0: continue\\n    print(i)',"استخدام continue."],
["إيقاف عند 7","loops",'for i in range(1,11):\\n    if i == 7: break\\n    print(i)',"استخدام break."],
["المضروب","loops",'n = int(input())\\nfact = 1\\nfor i in range(1,n+1):\\n    fact *= i\\nprint(fact)',"حساب factorial."],
["مربع نجوم","loops",'for r in range(4):\\n    for c in range(4):\\n        print("*",end=" ")\\n    print()', "حلقات متداخلة."],
["متوسط الدرجات","loops",'n = int(input())\\ntotal = 0\\nfor i in range(n):\\n    total += float(input())\\nif n > 0: print(total/n)',"حساب متوسط مجموعة درجات."]
];

function showPrograms() {
    const search = $("#programSearch").value.toLowerCase();
    const category = $("#programCategory").value;

    const filtered = programs.filter(p => {
        const matchesText = (p[0] + p[3]).toLowerCase().includes(search);
        const matchesCategory = category === "all" || p[1] === category;
        return matchesText && matchesCategory;
    });

    $("#programContainer").innerHTML = filtered.map(p => `
        <article class="card">
            <h3>${p[0]}</h3>
            <p>${p[3]}</p>

            <details>
                <summary>عرض الكود والشرح</summary>
                <pre class="code">${p[2]}</pre>
                <p>${p[3]}</p>
            </details>
        </article>
    `).join("");
}

$("#programSearch").addEventListener("input", showPrograms);
$("#programCategory").addEventListener("change", showPrograms);

showPrograms();


// ===============================
// 4. توقع ناتج البرامج
// ===============================

const outputs = [
['x = 4\\nprint(x + 3)',"7","نجمع 4 و3."],
['print(9 // 2)',"4","قسمة صحيحة."],
['print(9 % 2)',"1","باقي القسمة."],
['print(2 ** 4)',"16","الأس."],
['name = "Ali"\\nprint("Hi", name)',"Hi Ali","طباعة الاسم."],
['x = 5\\nx += 2\\nprint(x)',"7","زيادة المتغير."],
['print(3 > 8)',"False","المقارنة."],
['print(True and False)',"False","and."],
['print(not False)',"True","عكس القيمة."],
['print(len("Python"))',"6","عدد الأحرف."],
['for i in range(3):\\n    print(i)',"0\\n1\\n2","range تبدأ من صفر."],
['for i in range(2,5):\\n    print(i)',"2\\n3\\n4","الرقم 5 غير مشمول."],
['x=1\\nwhile x<4:\\n    print(x)\\n    x+=1',"1\\n2\\n3","تحديث العداد."],
['for i in range(1,6,2):\\n    print(i)',"1\\n3\\n5","خطوة 2."],
['for i in range(5):\\n    if i==3: break\\n    print(i)',"0\\n1\\n2","break."],
['for i in range(5):\\n    if i==2: continue\\n    print(i)',"0\\n1\\n3\\n4","continue."],
['x=10\\nif x>5: print("A")\\nelse: print("B")',"A","الشرط صحيح."],
['mark=45\\nif mark>=50: print("Pass")\\nelse: print("Fail")',"Fail","الدرجة أقل من 50."],
['print("2"+"3")',"23","دمج النصوص."],
['print(int("8")+2)',"10","تحويل إلى عدد."],
['total=0\\nfor n in [1,2,3]: total+=n\\nprint(total)',"6","المجموع."],
['x=3\\nif x>1 and x<5: print("Yes")',"Yes","الشرطان صحيحان."],
['print(bool(""))',"False","النص الفارغ."],
['print(bool("0"))',"True","النص غير الفارغ."],
['for i in range(3,0,-1): print(i)',"3\\n2\\n1","العد التنازلي."],
['x=2\\nwhile x<=6:\\n    print(x)\\n    x+=2',"2\\n4\\n6","زيادة اثنين."],
['for i in range(2):\\n    for j in range(2):\\n        print(i,j)',"0 0\\n0 1\\n1 0\\n1 1","حلقتان متداخلتان."],
['print(7/2)',"3.5","القسمة العادية."],
['print(7//2)',"3","القسمة الصحيحة."],
['x=5\\nprint(x==5,x!=5)',"True False","المساواة وعدم المساواة."]
];

const debugExercises = [
['if age >= 18\\n    print("Adult")','if age >= 18:\\n    print("Adult")',"ناقص النقطتان."],
['age=input("Age: ")\\nprint(age+1)','age=int(input("Age: "))\\nprint(age+1)',"input يعيد نصاً."],
['if x>0:\\nprint("Positive")','if x>0:\\n    print("Positive")',"المسافة البادئة."],
['if x=10:\\n    print("Ten")','if x==10:\\n    print("Ten")',"استخدام == للمقارنة."],
['a=10\\nb=0\\nprint(a/b)','a=10\\nb=0\\nif b!=0: print(a/b)\\nelse: print("Cannot divide")',"القسمة على صفر."],
['i=1\\nwhile i<=5:\\n    print(i)','i=1\\nwhile i<=5:\\n    print(i)\\n    i+=1',"تحديث العداد."],
['for i in range(1,5):\\n    print(i)\\n# المطلوب 1 إلى 5','for i in range(1,6):\\n    print(i)',"range لا تشمل النهاية."],
['2name="Sara"\\nprint(2name)','name2="Sara"\\nprint(name2)',"اسم المتغير لا يبدأ برقم."],
['price="12.5"\\nprint(price*2)','price=float("12.5")\\nprint(price*2)',"تحويل النص إلى float."],
['if mark>50: print("Pass")\\nelse: print("Fail")','if mark>=50: print("Pass")\\nelse: print("Fail")',"استخدام >=."],
['if age>=13 or age<=19: print("Teen")','if age>=13 and age<=19: print("Teen")',"استخدام and."],
['a=input()\\nb=input()\\nprint(a+b)','a=int(input())\\nb=int(input())\\nprint(a+b)',"تحويل الإدخال إلى أعداد."],
['print(2^3)','print(2**3)',"عامل الأس هو **."],
['print(Hello)','print("Hello")',"النص يحتاج اقتباساً."],
['print("Welcome"','print("Welcome")',"قوس الإغلاق ناقص."],
['n=10\\nwhile n>0:\\n    print(n)\\n    n=n+1','n=10\\nwhile n>0:\\n    print(n)\\n    n=n-1',"يجب إنقاص العداد."],
['answer=input()\\nif answer="yes": print("OK")','answer=input()\\nif answer=="yes": print("OK")',"المقارنة باستخدام ==."],
['total=20\\ncount=0\\nprint(total/count)','total=20\\ncount=4\\nif count>0: print(total/count)',"تجنب القسمة على صفر."],
['if x>5\\n print("Big")','if x>5:\\n    print("Big")',"النقطتان والإزاحة."],
['x="5"\\nprint(x-1)','x=int("5")\\nprint(x-1)',"تحويل النص إلى int."]
];

function buildExercises(data, container, debug) {
    $(container).innerHTML = data.map((item, index) => `
        <article class="exercise">
            <h3>${index + 1}. ${debug ? "اكتشف الخطأ وصححه" : "توقع الناتج"}</h3>

            <pre class="code">${item[0]}</pre>

            <button class="reveal">
                إظهار ${debug ? "التصحيح" : "الناتج"}
            </button>

            <div class="solution">
                <strong>${debug ? "الكود الصحيح:" : "الناتج:"}</strong>
                <pre class="code">${item[1]}</pre>
                <p>${item[2]}</p>
            </div>
        </article>
    `).join("");

    document.querySelectorAll(container + " .reveal").forEach(button => {
        button.onclick = function() {
            const solution = this.nextElementSibling;
            solution.classList.toggle("show");

            this.textContent = solution.classList.contains("show")
                ? "إخفاء الحل"
                : "إظهار الحل";
        };
    });
}

buildExercises(outputs, "#outputContainer", false);
buildExercises(debugExercises, "#debugContainer", true);


// ===============================
// 5. المظهر والسنة
// ===============================

$("#themeBtn").onclick = function() {
    document.body.classList.toggle("light");
};

$("#year").textContent = new Date().getFullYear();

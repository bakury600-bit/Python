const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
$('#year').textContent = new Date().getFullYear();
$('#menuToggle').addEventListener('click',()=>$('#mainNav').classList.toggle('open'));
$$('#mainNav a').forEach(a=>a.addEventListener('click',()=>$('#mainNav').classList.remove('open')));
$('#themeToggle').addEventListener('click',()=>{document.documentElement.dataset.theme=document.documentElement.dataset.theme==='dark'?'':'dark';});
window.addEventListener('scroll',()=>{const d=document.documentElement;$('#readingProgress').style.width=(d.scrollTop/(d.scrollHeight-d.clientHeight)*100)+'%';$('#toTop').classList.toggle('show',d.scrollTop>500)});
$('#toTop').onclick=()=>window.scrollTo({top:0,behavior:'smooth'});

const programs=[
['مساحة ومحيط المستطيل','Lecture 2',`length = float(input("Enter the length: "))
width = float(input("Enter the width: "))
area = length * width
perimeter = 2 * (length + width)
print(f"Area = {area}")
print(f"Perimeter = {perimeter}")`,`المدخلات: 5 و3\nArea = 15.0\nPerimeter = 16.0`],
['تحويل Celsius إلى Fahrenheit','Lecture 2',`celsius = float(input("Temperature in Celsius: "))
fahrenheit = celsius * 9 / 5 + 32
print(f"{celsius:.1f} C = {fahrenheit:.1f} F")`,`عند إدخال 25:\n25.0 C = 77.0 F`],
['فحص العدد الزوجي','Lecture 2',`number = int(input("Enter a whole number: "))
print("Is it even?", number % 2 == 0)`,`عند إدخال 8:\nIs it even? True`],
['تقدير الدرجة','Lecture 3',`score = int(input("Enter your score (0-100): "))
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"
print(f"Your grade is {grade}")`,`عند إدخال 85:\nYour grade is B`],
['آلة حاسبة مع فحص القسمة على صفر','Lecture 3',`num1 = float(input("First number: "))
op = input("Operator (+, -, *, /): ")
num2 = float(input("Second number: "))
if op == "+":
    print(f"Result = {num1 + num2}")
elif op == "-":
    print(f"Result = {num1 - num2}")
elif op == "*":
    print(f"Result = {num1 * num2}")
elif op == "/":
    if num2 == 0:
        print("Error: cannot divide by zero.")
    else:
        print(f"Result = {num1 / num2}")
else:
    print("Invalid operator.")`,`10 ثم + ثم 5:\nResult = 15.0\n\n8 ثم / ثم 0:\nError: cannot divide by zero.`],
['السنة الكبيسة','Lecture 3',`year = int(input("Enter a year: "))
if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
    print(f"{year} is a leap year.")
else:
    print(f"{year} is not a leap year.")`,`2024 is a leap year.\n1900 is not a leap year.\n2000 is a leap year.`],
['أكبر ثلاثة أعداد','Lecture 3',`a = int(input("First number: "))
b = int(input("Second number: "))
c = int(input("Third number: "))
if a >= b and a >= c:
    largest = a
elif b >= a and b >= c:
    largest = b
else:
    largest = c
print(f"The largest number is {largest}")`,`المدخلات 7 و12 و9:\nThe largest number is 12`],
['العد من 1 إلى 5 باستخدام while','Lecture 4',`count = 1
while count <= 5:
    print(count)
    count += 1
print("Done")`,`1\n2\n3\n4\n5\nDone`],
['جمع الأعداد حتى إدخال صفر','Lecture 4',`total = 0
number = int(input("Number (0 to stop): "))
while number != 0:
    total += number
    number = int(input("Number (0 to stop): "))
print(f"Total = {total}")`,`المدخلات: 5، 10، 3، 0\nTotal = 18`],
['مجموع الأعداد من 1 إلى 100','Lecture 4',`total = 0
for i in range(1, 101):
    total += i
print(f"The sum is {total}")`,`The sum is 5050`],
['المضروب Factorial','Lecture 4',`n = int(input("Enter n (0 or more): "))
result = 1
for i in range(1, n + 1):
    result *= i
print(f"{n}! = {result}")`,`عند n=5:\n5! = 120`],
['مجموع أرقام عدد','Lecture 4',`number = int(input("Enter a positive number: "))
total = 0
while number > 0:
    digit = number % 10
    total += digit
    number //= 10
print(f"Sum of digits = {total}")`,`عند إدخال 1234:\nSum of digits = 10`]
];
$('#programList').innerHTML=programs.map((p,i)=>`<article class="program-card"><div class="card-head"><h3>${i+1}. ${p[0]}</h3><span class="tag">${p[1]}</span></div><pre id="prog${i}">${esc(p[2])}</pre><div class="card-head"><span class="tag">الناتج المتوقع</span><button class="copy-btn" data-copy="prog${i}">نسخ الكود</button></div><div class="output-box">${esc(p[3])}</div></article>`).join('');

const fixes=[
['input يرجع نصاً','a = input("First: ")\\nb = input("Second: ")\\nprint(a + b)','a = int(input("First: "))\\nb = int(input("Second: "))\\nprint(a + b)','عند إدخال 5 و3، الكود الأول يطبع 53 لأنه يربط النصوص، والتصحيح يطبع 8.'],
['نسيان النقطتين','if age >= 18\\n    print("Adult")','if age >= 18:\\n    print("Adult")','يجب وضع : في نهاية سطر if وإلا يظهر SyntaxError.'],
['نسيان الإزاحة','if age >= 18:\\nprint("Adult")','if age >= 18:\\n    print("Adult")','الأسطر التابعة للشرط يجب أن تكون مزاحة.'],
['مقارنة باستخدام =','if age = 18:\\n    print("Equal")','if age == 18:\\n    print("Equal")','= للإسناد و== للمقارنة.'],
['مقارنة نص مع رقم','age = input("Age: ")\\nif age >= 18:\\n    print("Adult")','age = int(input("Age: "))\\nif age >= 18:\\n    print("Adult")','حوّل الإدخال إلى int قبل مقارنته بعدد.'],
['خطأ or المنطقي','if day == "Sat" or "Sun":\\n    print("Weekend")','if day == "Sat" or day == "Sun":\\n    print("Weekend")','يجب كتابة المقارنة كاملة على طرفي or.'],
['ترتيب elif خاطئ','if score >= 60:\\n    grade = "D"\\nelif score >= 80:\\n    grade = "B"','if score >= 80:\\n    grade = "B"\\nelif score >= 60:\\n    grade = "D"','ضع الشرط الأكثر تحديداً أو الأعلى أولاً لأن أول شرط صحيح ينفذ.'],
['حلقة while لا نهائية','count = 1\\nwhile count <= 5:\\n    print(count)','count = 1\\nwhile count <= 5:\\n    print(count)\\n    count += 1','أضف تحديثاً حتى يصبح الشرط False.'],
['range لا تشمل قيمة النهاية','for i in range(1, 10):\\n    print(i)','for i in range(1, 11):\\n    print(i)','قيمة stop غير مشمولة؛ لإظهار 10 استخدم 11.'],
['المتغير total غير معرف','for i in range(3):\\n    total += i','total = 0\\nfor i in range(3):\\n    total += i','هيئ accumulator قبل الحلقة.']
];
$('#debugList').innerHTML=fixes.map((x,i)=>`<article class="debug-card"><h3>${i+1}. ${x[0]}</h3><p>${x[3]}</p><div class="wrong"><span class="tag">الكود الخاطئ</span><pre>${esc(x[1].replaceAll('\\n','\n'))}</pre></div><div class="fixed"><span class="tag">التصحيح</span><pre>${esc(x[2].replaceAll('\\n','\n'))}</pre></div></article>`).join('');

const outputs=[
['x = 10\\nif x > 5:\\n    print("A")\\nprint("B")','A\\nB'],
['x = 3\\nif x > 5:\\n    print("A")\\nelse:\\n    print("B")','B'],
['score = 75\\nif score >= 60:\\n    print("pass")\\nelif score >= 70:\\n    print("good")','pass'],
['age = 20\\nhas_id = False\\nif age >= 18 and has_id:\\n    print("Enter")\\nelse:\\n    print("Denied")','Denied'],
['name = ""\\nif name:\\n    print("Hi")\\nelse:\\n    print("Empty")','Empty'],
['print("Adult" if 17 >= 18 else "Minor")','Minor'],
['print(2 + 3 * 4)','14'],
['print((2 + 3) * 4)','20'],
['print(10 / 2 * 5)','25.0'],
['print("ha" * 3)','hahaha'],
['print(len("Python"))','6'],
['print(type(3.14))',"<class 'float'>"],
['a = input()  # أدخل 5\\nb = input()  # أدخل 3\\nprint(a + b)','53'],
['a = int(input())  # أدخل 5\\nb = int(input())  # أدخل 3\\nprint(a + b)','8'],
['for i in range(3):\\n    print(i)','0\\n1\\n2'],
['for i in range(2, 6):\\n    print(i, end=" ")','2 3 4 5'],
['x = 1\\nwhile x < 20:\\n    x *= 2\\nprint(x)','32'],
['for i in range(1, 6):\\n    if i == 3:\\n        continue\\n    print(i, end=" ")','1 2 4 5'],
['for i in range(1, 6):\\n    if i == 3:\\n        break\\n    print(i, end=" ")','1 2'],
['total = 0\\nfor i in range(1, 4):\\n    total += i\\nprint(total)','6'],
['for i in range(3):\\n    for j in range(2):\\n        print("*", end="")\\n    print()','**\\n**\\n**'],
['for i in range(1, 6):\\n    print(i * 2, end=" ")','2 4 6 8 10'],
['for i in range(5, 0, -1):\\n    print(i, end=" ")','5 4 3 2 1'],
['total = 0\\nfor i in range(1, 101):\\n    total += i\\nprint(total)','5050'],
['result = 1\\nfor i in range(1, 6):\\n    result *= i\\nprint(result)','120'],
['number = 1234\\ntotal = 0\\nwhile number > 0:\\n    total += number % 10\\n    number //= 10\\nprint(total)','10'],
['for i in range(1, 8):\\n    if i % 2 == 0:\\n        continue\\n    print(i, end=" ")','1 3 5 7'],
['for i in range(1, 11):\\n    if i == 5:\\n        break\\n    print(i, end=" ")','1 2 3 4'],
['print("a" in "banana")\\nprint("z" in "banana")','True\\nFalse'],
['for row in range(1, 5):\\n    for col in range(row):\\n        print("*", end="")\\n    print()','*\\n**\\n***\\n****']
];
$('#outputList').innerHTML=outputs.map((x,i)=>`<article class="qa-item"><h4>${i+1}. ما ناتج البرنامج؟</h4><pre>${esc(x[0].replaceAll('\\n','\n'))}</pre><button class="reveal-btn">إظهار الناتج</button><div class="answer">${esc(x[1].replaceAll('\\n','\n'))}</div></article>`).join('');
$$('.reveal-btn').forEach(b=>b.onclick=()=>{const a=b.nextElementSibling;a.classList.toggle('show');b.textContent=a.classList.contains('show')?'إخفاء الناتج':'إظهار الناتج'});
$('#showAllOutputs').onclick=()=>{$$('.answer').forEach(a=>a.classList.add('show'));$$('.reveal-btn').forEach(b=>b.textContent='إخفاء الناتج')};

function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
document.addEventListener('click',e=>{const b=e.target.closest('[data-copy]');if(!b)return;const el=document.getElementById(b.dataset.copy);navigator.clipboard?.writeText(el.innerText).then(()=>{b.textContent='تم النسخ ✓';setTimeout(()=>b.textContent='نسخ الكود',1400)}).catch(()=>b.textContent='انسخ يدوياً')});

const questions=[
['ما المقصود بالمتغير في Python؟',['حاوية مسماة تخزن قيمة','نوع من الحلقات','دالة للطباعة','عامل مقارنة'],0],
['أي عامل يستخدم لإسناد قيمة؟',['==','=','!=','>='],1],
['أي اسم متغير صحيح؟',['2score','total-price','total_price','class'],2],
['هل Python حساسة لحالة الأحرف؟',['لا','نعم','فقط في النصوص','فقط بالأرقام'],1],
['ما نوع القيمة 25؟',['float','str','int','bool'],2],
['ما نوع القيمة 3.14؟',['int','float','str','bool'],1],
['ما نوع "123"؟',['int','float','str','bool'],2],
['أي دالة تفحص نوع القيمة؟',['len()','type()','input()','range()'],1],
['ما ناتج len("Python")؟',['5','6','7','8'],1],
['ما ناتج "ha" * 3؟',['ha3','hahaha','ha ha','Error'],1],
['ماذا ترجع input() دائماً؟',['int','float','str','bool'],2],
['ما ناتج int(3.9)؟',['4','3.9','3','Error'],2],
['ما ناتج float(5)؟',['5','5.0','"5"','Error'],1],
['ما ناتج 7 / 2 في Python؟',['3','3.5','4','2'],1],
['ما ناتج 17 % 5؟',['3','5','2','1'],2],
['ما ناتج 2 ** 3؟',['6','8','9','5'],1],
['ما ناتج 2 + 3 * 4؟',['20','14','24','11'],1],
['أي عامل يعني لا يساوي؟',['=','==','!=','<='],2],
['متى تكون and صحيحة؟',['إذا تحقق أحد الشرطين','إذا تحقق الشرطان','دائماً','إذا لم يتحقق أي شرط'],1],
['ماذا تفعل not؟',['تجمع','تكرر','تعكس القيمة المنطقية','تقارن النصوص'],2],
['ما الاختصار المكافئ لـ x = x + 5؟',['x =+ 5','x += 5','x ++ 5','x ** 5'],1],
['أي صيغة تعرض متغيراً داخل النص بسهولة؟',['f-string','range','while','type'],0],
['ما معنى :.2f؟',['رقمان صحيحان','منزلتان عشريتان','حذف الأرقام','فاصل آلاف'],1],
['أي كلمة تبدأ شرطاً؟',['for','while','if','def'],2],
['ما الرمز الواجب وضعه بعد سطر if؟',[';','.',':',','],2],
['كم مسافة إزاحة موصى بها في أمثلة المحاضرة؟',['مسافة واحدة','مسافتان','4 مسافات','8 مسافات'],2],
['متى تنفذ كتلة else؟',['إذا كان if True','إذا كان الشرط False','دائماً قبل if','بعد كل سطر'],1],
['كيف تعمل elif؟',['تنفذ كل الفروع','تفحص احتمالاً إضافياً بالترتيب','تنهي البرنامج','تكرر الكود'],1],
['أي فرع ينفذ في if-elif-else؟',['كل الفروع الصحيحة','أول شرط True فقط','آخر فرع دائماً','لا شيء'],1],
['ما الخطأ في if age = 18؟',['يجب استخدام == للمقارنة','يجب استخدام +=','يجب حذف if','لا يوجد خطأ'],0],
['ما نتيجة bool("")؟',['True','False','None','Error'],1],
['من أي إصدار يتوفر match-case؟',['3.6','3.8','3.10','2.7'],2],
['ما وظيفة while؟',['التكرار حسب شرط','تعريف متغير','تحويل نوع','طباعة نص فقط'],0],
['متى نستخدم for غالباً؟',['عندما لا نعرف متى يتوقف الإدخال','عندما نعرف عدد التكرارات أو نتصفح تسلسلاً','للمقارنة فقط','بدلاً من input دائماً'],1],
['ما القيم التي ينتجها range(5)؟',['1 إلى 5','0 إلى 5','0 إلى 4','1 إلى 4'],2],
['ما ناتج range(1, 6)؟',['1,2,3,4,5','1,2,3,4,5,6','0,1,2,3,4,5','2,3,4,5,6'],0],
['ما وظيفة break؟',['يتجاوز التكرار الحالي','ينهي الحلقة فوراً','يعيد الحلقة للبداية','يوقف الحاسوب'],1],
['ما وظيفة continue؟',['ينهي البرنامج','ينهي الحلقة نهائياً','يتجاوز بقية التكرار الحالي','يطبع قيمة'],2],
['ما سبب الحلقة اللانهائية غالباً في while؟',['استخدام print','نسيان تحديث المتغير','استخدام int','وجود else'],1],
['ما قيمة range(5, 0, -1)؟',['0 إلى 5','5,4,3,2,1','5,4,3,2,1,0','1,2,3,4,5'],1],
['ما معنى Sentinel Value؟',['قيمة بداية','قيمة خاصة توقف الحلقة','نوع بيانات','عامل منطقي'],1],
['ماذا تفعل while True مع break؟',['حلقة لا يمكن إيقافها','حلقة تستمر حتى يتحقق شرط الخروج','تنفذ مرة واحدة فقط','تعطي SyntaxError'],1],
['ما معنى Nested Loops؟',['شروط متداخلة','حلقة داخل حلقة','متغيرات متعددة','حلقات متتالية فقط'],1],
['ما وظيفة end في print؟',['يحدد نوع المتغير','يغير ما يطبع في نهاية السطر','يوقف البرنامج','يكرر الطباعة'],1],
['ما هو Accumulator؟',['متغير يجمع القيم تدريجياً','حلقة لا نهائية','شرط مركب','نص'],0],
['ما هو Counter؟',['متغير لعد مرات حدوث شيء','متغير نصي فقط','عامل قسمة','دالة تحويل'],0],
['ما ناتج مجموع 1 إلى 100؟',['100','1000','5050','5000'],2],
['ما قيمة 5!؟',['25','60','100','120'],3],
['أي عامل يستخرج آخر رقم؟',['//','% 10','**','/'],1],
['أي عامل يحذف آخر رقم صحيح من العدد؟',['// 10','% 10','* 10','+ 10'],0]
];
let qIndex=0,answers=Array(questions.length).fill(null);
function renderQuiz(){
 const q=questions[qIndex],area=$('#quizArea');
 $('#quizProgressText').textContent=`السؤال ${qIndex+1} من ${questions.length}`;
 $('#quizProgress').style.width=((qIndex+1)/questions.length*100)+'%';
 $('#score').textContent=answers.reduce((n,a,i)=>n+(a===questions[i][2]?1:0),0);
 area.innerHTML=`<span class="q-label">QUESTION ${String(qIndex+1).padStart(2,'0')}</span><h3>${q[0]}</h3><div class="options">${q[1].map((o,i)=>`<button class="option ${answers[qIndex]===i?'selected':''}" data-opt="${i}">${['أ','ب','ج','د'][i]}) ${o}</button>`).join('')}</div>${answers[qIndex]!==null?`<div class="feedback">${answers[qIndex]===q[2]?'إجابة صحيحة ✓':'إجابة غير صحيحة ✕'} — الإجابة الصحيحة: ${q[1][q[2]]}</div>`:''}`;
 $$('.option').forEach(b=>b.onclick=()=>{answers[qIndex]=+b.dataset.opt;renderQuiz()});
 $('#prevQuestion').disabled=qIndex===0;$('#nextQuestion').textContent=qIndex===questions.length-1?'عرض النتيجة':'التالي';
}
$('#prevQuestion').onclick=()=>{if(qIndex>0){qIndex--;renderQuiz()}};
$('#nextQuestion').onclick=()=>{if(qIndex<questions.length-1){qIndex++;renderQuiz()}else{const score=answers.reduce((n,a,i)=>n+(a===questions[i][2]?1:0),0);$('#quizResult').hidden=false;$('#quizResult').innerHTML=`<h3>انتهى الاختبار</h3><strong>${score} / ${questions.length}</strong><p>النسبة: ${Math.round(score/questions.length*100)}%</p><button class="btn primary" id="reviewWrong">مراجعة الأسئلة الخاطئة</button>`;$('#reviewWrong').onclick=()=>{const wrong=questions.map((q,i)=>({q,i})).filter(x=>answers[x.i]!==x.q[2]);alert(wrong.length?wrong.map(x=>`س${x.i+1}: ${x.q[0]}\\nالصحيح: ${x.q[1][x.q[2]]}`).join('\\n\\n'):'ممتاز! كل إجاباتك صحيحة.')}}};
$('#restartQuiz').onclick=()=>{qIndex=0;answers=Array(questions.length).fill(null);$('#quizResult').hidden=true;renderQuiz()};
renderQuiz();


// Bilingual interface: Arabic is the default; English translates the study interface
// and keeps Python source code unchanged.
const translations = {
'مراجعة المحاضرات 2 - 3 - 4':'Lectures 2 - 3 - 4 Review','الملخص':'Summary','المحاضرة 2':'Lecture 2','المحاضرة 3':'Lecture 3','المحاضرة 4':'Lecture 4','البرامج':'Programs','تصحيح الأخطاء':'Debugging','النواتج':'Outputs','اختبار MCQ':'MCQ Test',
'فتح القائمة':'Open menu','دليلك الدراسي التفاعلي':'Your Interactive Study Guide','تعلم Python':'Learn Python','وافهمها خطوة بخطوة':'Understand it step by step','ملخص وشرح وأهم البرامج وتصحيح الأكواد وتتبع النواتج واختبار من 50 سؤالاً، اعتماداً على المحاضرات المرفقة فقط.':'A complete summary, explanations, key programs, code debugging, output tracing, and a 50-question test, based only on the provided lectures.','ابدأ المراجعة':'Start Reviewing','اختبر نفسك':'Test Yourself','3 محاضرات':'3 Lectures','50 سؤال MCQ':'50 MCQs','30 سؤال نواتج':'30 Output Questions','المتغيرات والعمليات':'Variables & Operators','الجمل الشرطية':'Conditional Statements','الحلقات التكرارية':'Loops','المتغيرات والأنواع والعمليات':'Variables, Types & Operators',
'خارطة الطريق':'Roadmap','ملخص المادة بالكامل':'Complete Course Summary','ثلاث محاضرات مترابطة: نخزن البيانات، نتخذ القرارات، ثم نكرر الأوامر.':'Three connected lectures: store data, make decisions, then repeat instructions.','تعريف المتغيرات وأنواع البيانات والتحويلات والعمليات الحسابية والمنطقية.':'Variables, data types, casting, arithmetic and logical operations.','استخدام if وelse وelif لاتخاذ القرار حسب نتيجة الشرط True أو False.':'Use if, else and elif to make decisions based on True or False conditions.','استخدام while وfor وrange مع break وcontinue والحلقات المتداخلة.':'Use while, for and range with break, continue and nested loops.','اذهب للمحاضرة ←':'Go to lecture →',
'البرامج المهمة للمراجعة':'Important Programs to Review','أمثلة أساسية من المحاضرات وتمارينها.':'Core examples from the lectures and exercises.','تصحيح البرامج والأخطاء الشائعة':'Program Fixes & Common Errors','اقرأ الخطأ، اعرف سببه، ثم قارن بالتصحيح.':'Read the error, understand its cause, then compare it with the correction.','توقع ناتج البرنامج':'Predict the Program Output','30 سؤالاً تدريبياً مع إظهار الإجابة والتفسير.':'30 practice questions with answers and explanations.','30 سؤال':'30 Questions','إظهار كل النواتج':'Show All Outputs','إخفاء الناتج':'Hide Output','إظهار الناتج':'Show Output','اختبار MCQ — 50 سؤالاً':'MCQ Test — 50 Questions','اختر إجابة واحدة، وستظهر لك النتيجة والتصحيح.':'Choose one answer to see your score and corrections.','السؤال 1 من 50':'Question 1 of 50','النتيجة:':'Score:','السابق':'Previous','التالي':'Next','إعادة الاختبار':'Restart Test','ملاحظات ذهبية':'Key Exam Tips','BEFORE THE EXAM':'BEFORE THE EXAM','تصميم وبرمجة الطالب':'Designed and developed by student','بكر جاسم حسن ↗':'Bakr Jassim Hassan ↗','جميع الحقوق محفوظة ©':'All rights reserved ©',
'1. المتغيرات Variables':'1. Variables','2. أنواع البيانات Data Types':'2. Data Types','3. التحويل Type Casting':'3. Type Casting','4. العمليات الحسابية Arithmetic':'4. Arithmetic Operations','5. المقارنة والمنطق':'5. Comparison & Logic','6. اختصارات الإسناد':'6. Assignment Shortcuts','7. تنسيق f-strings':'7. f-Strings Formatting','قواعد تسمية المتغيرات':'Variable Naming Rules','أولوية العمليات':'Operator Precedence','1. اتخاذ القرار':'1. Decision Making','2. if':'2. if Statement','3. if-else':'3. if-else Statement','4. if-elif-else':'4. if-elif-else Statement','5. الشروط المتداخلة':'5. Nested Conditions','6. Truthiness':'6. Truthiness','7. التعبير الشرطي المختصر':'7. Conditional Expression','8. match-case (اختياري)':'8. match-case (Optional)','9. أخطاء شائعة':'9. Common Mistakes','10. أمثلة المحاضرة':'10. Lecture Examples','1. لماذا نستخدم الحلقات؟':'1. Why Do We Use Loops?','2. while':'2. while Loop','3. while مع إدخال المستخدم':'3. while with User Input','4. for و range()':'4. for and range()','المرور على النص':'Iterating Through a String','متى أختار for أو while؟':'When Should I Use for or while?','5. break وcontinue':'5. break and continue','while True':'while True','6. الحلقات المتداخلة Nested Loops':'6. Nested Loops','7. أنماط الحلقات الشائعة':'7. Common Loop Patterns','8. أمثلة مهمة':'8. Important Examples','مساحة ومحيط المستطيل':'Rectangle Area and Perimeter','فحص العدد الزوجي':'Check Even Number','تقدير الدرجة':'Grade Evaluation','آلة حاسبة بسيطة':'Simple Calculator','السنة الكبيسة':'Leap Year','أكبر ثلاثة أعداد':'Largest of Three Numbers','جمع الأعداد حتى إدخال صفر':'Sum Numbers Until Zero','مجموع الأعداد من 1 إلى 100':'Sum Numbers from 1 to 100','المضروب Factorial':'Factorial','مجموع أرقام عدد':'Sum of Digits','الكود الخاطئ':'Incorrect Code','التصحيح':'Correction','الناتج المتوقع':'Expected Output','نسخ الكود':'Copy Code','تم النسخ ✓':'Copied ✓','انسخ يدوياً':'Copy manually',
'المتغير حاوية تحمل اسماً وتخزن قيمة في ذاكرة الحاسوب لاستخدامها لاحقاً. نستخدم علامة الإسناد':'A variable is a named container that stores a value in computer memory for later use. We use the assignment operator',
'تستخدم الحروف والأرقام والشرطة السفلية _.':'Use letters, digits and the underscore _.','لا يبدأ الاسم برقم.':'A name cannot start with a digit.','الأسماء حساسة لحالة الأحرف: age يختلف عن Age.':'Names are case-sensitive: age is different from Age.','لا تستخدم الكلمات المحجوزة مثل class وif وfor وTrue.':'Do not use reserved words such as class, if, for and True.','يفضل اسم واضح وبصيغة snake_case مثل student_name.':'Prefer clear names in snake_case format, such as student_name.','Python تستخدم Dynamic Typing؛ لا نحتاج إلى تحديد نوع المتغير مسبقاً، والنوع يُفهم من القيمة.':'Python uses dynamic typing: you do not need to declare a variable type in advance; the type is inferred from its value.','عدد صحيح':'Integer','عدد عشري':'Floating-point number','نص بين علامات اقتباس':'Text inside quotation marks','قيمة منطقية':'Boolean value','الدوال الأساسية:':'Basic functions:','الدالة input() ترجع نصاً دائماً.':'The input() function always returns a string.','الأقواس أولاً، ثم الأس، ثم الضرب والقسمة وباقي القسمة من اليسار لليمين، ثم الجمع والطرح من اليسار لليمين.':'Parentheses first, then exponentiation, multiplication/division/modulo from left to right, then addition/subtraction from left to right.','المقارنة تنتج True أو False:':'Comparisons produce True or False:','المعاملات المنطقية:':'Logical operators:','لا يوجد ++ أو -- في Python.':'There are no ++ or -- operators in Python.','منزلتان عشريتان':'Two decimal places','دون منازل':'No decimal places','فاصل الآلاف':'Thousands separator',
'الجملة الشرطية تجعل البرنامج يختار الأسطر التي ينفذها اعتماداً على شرط نتيجته True أو False.':'A conditional statement makes the program choose which lines to execute based on a condition that evaluates to True or False.','تنفذ الكتلة فقط عندما يكون الشرط صحيحاً. يجب وضع النقطتين':'The block runs only when the condition is true. A colon must be placed','ثم إزاحة الأسطر التابعة بمقدار 4 مسافات.':'then indent the body by 4 spaces.','تستخدم عندما يوجد مساران: إذا تحقق الشرط ينفذ if، وإلا ينفذ else.':'Used when there are two paths: if the condition is true, the if block runs; otherwise, else runs.','تستخدم لأكثر من احتمال. يفحص Python الشروط من الأعلى إلى الأسفل وينفذ أول شرط صحيح فقط؛ لذلك نضع الشرط الأكثر تحديداً أولاً.':'Used for multiple possibilities. Python checks conditions from top to bottom and executes only the first true condition; therefore, put the most specific condition first.','يمكن وضع if داخل if، مثل التحقق من العمر ثم التحقق من وجود هوية.':'You can place an if statement inside another if, such as checking age and then checking for an ID.','القيم 0 والنص الفارغ "" تعتبر False، والنص غير الفارغ مثل "hello" يعتبر True عند استخدامه كشرط.':'The value 0 and an empty string "" are False; a non-empty string such as "hello" is True when used as a condition.','متاح من Python 3.10، لمقارنة متغير مع قيم ثابتة متعددة. الرمز':'Available from Python 3.10 to compare a variable against multiple fixed values. The symbol','يمثل الحالة الافتراضية.':'represents the default case.',
'الحلقة تكرر مجموعة أوامر دون كتابة الأوامر نفسها مرات متعددة. كل تكرار يسمى Iteration.':'A loop repeats a set of instructions without writing the same instructions multiple times. Each repetition is called an iteration.','يفحص الشرط قبل كل تكرار. كل حلقة while سليمة تتكون من قيمة بداية وشرط وتحديث يجعل الشرط يصبح False.':'The condition is checked before each iteration. A proper while loop has an initial value, a condition, and an update that eventually makes the condition False.','قيمة Sentinel هي قيمة خاصة توقف الحلقة، مثل إدخال 0.':'A sentinel is a special value that stops the loop, such as entering 0.','تمر حلقة for على عناصر التسلسل واحداً بعد الآخر. الدالة range لها ثلاث صيغ:':'A for loop visits sequence elements one by one. The range function has three forms:','عدد تكرارات معروف: for مع range().':'Known number of repetitions: for with range().','المرور على أحرف نص: for.':'Iterating through string characters: for.','الاستمرار حتى يحدث أمر معين: while.':'Continue until a certain event occurs: while.','ينهي الحلقة فوراً.':'immediately ends the loop.','يتجاوز بقية التكرار الحالي وينتقل للتكرار التالي.':'skips the rest of the current iteration and moves to the next one.','لكل تكرار من الحلقة الخارجية، تنفذ الحلقة الداخلية كاملة.':'For each iteration of the outer loop, the inner loop runs completely.','المعامل':'The parameter','يغير ما تطبعه print في نهاية السطر. مثال:':'changes what print outputs at the end of a line. Example:',
'المحتوى الدراسي في هذا الموقع مبني على المحاضرات المرفقة: Lecture 2 وLecture 3 وLecture 4. لم تتم إضافة موضوعات خارجها، باستثناء صياغة الشرح بالعربية وتنظيمه.':'The study content on this website is based on the provided lectures: Lecture 2, Lecture 3 and Lecture 4. No topics outside these lectures have been added; the material has only been explained in Arabic and organized.'
};

let currentLanguage = 'ar';
const originalText = new WeakMap();
function setLanguage(lang){
  currentLanguage = lang;
  const root = document.documentElement;
  root.lang = lang; root.dir = lang === 'ar' ? 'rtl' : 'ltr';
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while(node = walker.nextNode()){
    const parent = node.parentElement;
    if(!parent || parent.closest('pre,code,script,style')) continue;
    if(!originalText.has(node)) originalText.set(node,node.nodeValue);
    const raw = originalText.get(node);
    const trimmed = raw.trim();
    if(!trimmed) continue;
    if(lang === 'en'){
      const translated = translations[trimmed];
      if(translated) node.nodeValue = raw.replace(trimmed, translated);
    } else node.nodeValue = raw;
  }
  $('#languageToggle').textContent = lang === 'ar' ? 'English' : 'العربية';
  $('#languageToggle').setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
  document.title = lang === 'ar' ? 'مراجعة Python | الطالب بكر جاسم حسن' : 'Python Review | Student Bakr Jassim Hassan';
  localStorage.setItem('pythonSiteLanguage',lang);
}
$('#languageToggle').addEventListener('click',()=>setLanguage(currentLanguage === 'ar' ? 'en' : 'ar'));
setLanguage(localStorage.getItem('pythonSiteLanguage') || 'ar');

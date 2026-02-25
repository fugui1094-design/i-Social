const ACCESS_CODE = "SHH2026CS13";

const questions = [
  {
    id: 1,
    text: "周末独处时，一个不算太熟的朋友突然发消息：“我在你家附近，出来喝杯咖啡？”",
    options: [
      {
        label: "A",
        text: "心里一沉，焦虑怎么编理由，最后勉强答应。",
        score: 1,
      },
      {
        label: "B",
        text: "假装没看见，拖到晚上再回，心里一直挂着。",
        score: 3,
      },
      {
        label: "C",
        text: "评估电量。不想去直接回绝，无心理负担。",
        score: 5,
      },
    ],
  },
  {
    id: 2,
    text: "面对喜欢“道德绑架”或“过度索取”的人（如总是借钱不还、蹭车）。",
    options: [
      {
        label: "A",
        text: "试图感化他们，讲道理，结果自己被气死。",
        score: 1,
      },
      {
        label: "B",
        text: "惹不起躲得起，尽量回避，但无法彻底切断。",
        score: 3,
      },
      {
        label: "C",
        text: "课题分离+物理隔离。降级为NPC，切断供给。",
        score: 5,
      },
    ],
  },
  {
    id: 3,
    text: "当你不得不拒绝别人的请求（如帮忙搬家、加班）时。",
    options: [
      {
        label: "A",
        text: "极度愧疚，觉得自己是坏人，编造谎言减轻负罪感。",
        score: 1,
      },
      {
        label: "B",
        text: "很烦躁，拒绝时语气生硬，容易得罪人。",
        score: 3,
      },
      {
        label: "C",
        text: "温和而坚定。直接说“不方便”，不解释过多。",
        score: 5,
      },
    ],
  },
  {
    id: 4,
    text: "别人当众开你玩笑，让你感到不舒服。",
    options: [
      {
        label: "A",
        text: "跟着傻笑，假装不在意，回家偷偷哭。",
        score: 1,
      },
      {
        label: "B",
        text: "当场黑脸，摔门而去，让大家都下不来台。",
        score: 3,
      },
      {
        label: "C",
        text: "笑着立规矩。“这个玩笑不好笑。”让气氛冷下来。",
        score: 5,
      },
    ],
  },
  {
    id: 5,
    text: "关于“合群”，你内心深处的真实想法是？",
    options: [
      {
        label: "A",
        text: "不合群会被孤立，必须努力融入，哪怕很累。",
        score: 1,
      },
      {
        label: "B",
        text: "我讨厌社交，能躲就躲，不需要朋友。",
        score: 3,
      },
      {
        label: "C",
        text: "社交是筛选不是迎合。圈进同频，踢出越界。",
        score: 5,
      },
    ],
  },
  {
    id: 6,
    text: "遇到刚认识就特别热情、把你夸上天、喜欢卖惨的人。",
    options: [
      {
        label: "A",
        text: "觉得遇到知己了，掏心掏肺，全盘托出。",
        score: 1,
      },
      {
        label: "B",
        text: "觉得有点假，但不知道怎么应对，尴尬附和。",
        score: 3,
      },
      {
        label: "C",
        text: "警惕“捧杀”。保持距离，只听不说，防套话。",
        score: 5,
      },
    ],
  },
  {
    id: 7,
    text: "在聚会或新环境中，不知道跟陌生人聊什么。",
    options: [
      {
        label: "A",
        text: "尴尬玩手机，等着别人来问我。",
        score: 1,
      },
      {
        label: "B",
        text: "查户口式提问：“你多大？工资多少？”",
        score: 3,
      },
      {
        label: "C",
        text: "使用“观察-赞美-请教”公式破冰。",
        score: 5,
      },
    ],
  },
  {
    id: 8,
    text: "想向一位前辈请教问题，你会怎么发微信？",
    options: [
      {
        label: "A",
        text: "“在吗？”或“前辈有空吗？”等待被翻牌。",
        score: 1,
      },
      {
        label: "B",
        text: "发一大段60秒语音，或长篇大论讲心路历程。",
        score: 3,
      },
      {
        label: "C",
        text: "套用公式：背景+矛盾+需求+选项。",
        score: 5,
      },
    ],
  },
  {
    id: 9,
    text: "别人夸奖你（如“你今天真好看”），你的本能回应？",
    options: [
      {
        label: "A",
        text: "慌忙否认：“没有没有，我不行，运气好。”",
        score: 1,
      },
      {
        label: "B",
        text: "尴尬笑笑，不知道接什么话，话题终结。",
        score: 3,
      },
      {
        label: "C",
        text: "“双向看见”。大方接受并回夸对方细节。",
        score: 5,
      },
    ],
  },
  {
    id: 10,
    text: "聊天时出现了冷场，你会？",
    options: [
      {
        label: "A",
        text: "极度焦虑，觉得自己有责任打破沉默，硬找话题。",
        score: 1,
      },
      {
        label: "B",
        text: "感到不自在，低头玩手机，祈祷别人说话。",
        score: 3,
      },
      {
        label: "C",
        text: "享受沉默。淡定喝水，观察别人，内心无波澜。",
        score: 5,
      },
    ],
  },
  {
    id: 11,
    text: "你想加入一个正在聊天的三人小圈子。",
    options: [
      {
        label: "A",
        text: "默默站在旁边听，希望他们能注意到我。",
        score: 1,
      },
      {
        label: "B",
        text: "强行插话，打断谈话发表观点。",
        score: 3,
      },
      {
        label: "C",
        text: "眼神示意，等待话口停顿，用赞同或补充切入。",
        score: 5,
      },
    ],
  },
  {
    id: 12,
    text: "遇到不想回答的隐私问题（如工资、对象）。",
    options: [
      {
        label: "A",
        text: "老老实实回答，事后后悔暴露太多。",
        score: 1,
      },
      {
        label: "B",
        text: "撒谎骗人，但心里很慌怕被拆穿。",
        score: 3,
      },
      {
        label: "C",
        text: "废话文学+反客为主。转移话题到对方身上。",
        score: 5,
      },
    ],
  },
  {
    id: 13,
    text: "同事试图把他的本职工作推给你做。",
    options: [
      {
        label: "A",
        text: "不好意思拒绝，默默接下，加班做完。",
        score: 1,
      },
      {
        label: "B",
        text: "直接翻脸：“这关我屁事？”导致关系僵化。",
        score: 3,
      },
      {
        label: "C",
        text: "温和坚定拒绝，或提出条件交换/排期。",
        score: 5,
      },
    ],
  },
  {
    id: 14,
    text: "领导在群里含沙射影批评你，或同事阴阳怪气。",
    options: [
      {
        label: "A",
        text: "陷入内耗，觉得天塌了，反复想哪里做错了。",
        score: 1,
      },
      {
        label: "B",
        text: "在群里对骂，证明自己没错。",
        score: 3,
      },
      {
        label: "C",
        text: "识别弦外之音。情绪发泄则装傻，利益博弈则留痕。",
        score: 5,
      },
    ],
  },
  {
    id: 15,
    text: "工作中出现纰漏，同事试图甩锅给你。",
    options: [
      {
        label: "A",
        text: "委屈想哭，陷入自证：“我没有……”",
        score: 1,
      },
      {
        label: "B",
        text: "愤怒指责：“明明是你的错！”",
        score: 3,
      },
      {
        label: "C",
        text: "情绪隔离，拿证据说话，反问流程节点。",
        score: 5,
      },
    ],
  },
  {
    id: 16,
    text: "关于“向上社交”（结交大佬），你认为核心是？",
    options: [
      {
        label: "A",
        text: "拍马屁，搞好关系，送礼。",
        score: 1,
      },
      {
        label: "B",
        text: "太功利了，我做不来，只靠实力。",
        score: 3,
      },
      {
        label: "C",
        text: "价值交换。不卑不亢，提供情绪价值或执行力。",
        score: 5,
      },
    ],
  },
  {
    id: 17,
    text: "第一天入职新公司，午饭时间你会？",
    options: [
      {
        label: "A",
        text: "一个人默默点外卖，戴耳机避免交流。",
        score: 1,
      },
      {
        label: "B",
        text: "坐在工位上等着别人来叫我。",
        score: 3,
      },
      {
        label: "C",
        text: "主动问一句：“大家中午去哪吃？能带我一个吗？”",
        score: 5,
      },
    ],
  },
  {
    id: 18,
    text: "职场汇报或自我介绍时，你的习惯是？",
    options: [
      {
        label: "A",
        text: "极度谦虚：“做得不够好，请多包涵。”",
        score: 1,
      },
      {
        label: "B",
        text: "流水账，把做过的事都说一遍。",
        score: 3,
      },
      {
        label: "C",
        text: "结果导向。说完成了什么项目，提升了什么数据。",
        score: 5,
      },
    ],
  },
  {
    id: 19,
    text: "你怎么定义“朋友”？",
    options: [
      {
        label: "A",
        text: "聊过天吃过饭的都是朋友，掏心掏肺。",
        score: 1,
      },
      {
        label: "B",
        text: "我没有朋友，没人能理解我。",
        score: 3,
      },
      {
        label: "C",
        text: "朋友分层：互惠、玩乐、深度。不同层级不同对待。",
        score: 5,
      },
    ],
  },
  {
    id: 20,
    text: "发现自己在一个小团体里被边缘化了。",
    options: [
      {
        label: "A",
        text: "讨好核心人物，送礼物试图融入。",
        score: 1,
      },
      {
        label: "B",
        text: "愤世嫉俗，觉得他们针对我。",
        score: 3,
      },
      {
        label: "C",
        text: "接受“阶段性朋友”。专注提升自己或找1v1关系。",
        score: 5,
      },
    ],
  },
  {
    id: 21,
    text: "朋友向你倾诉负面情绪（吐槽工作）。",
    options: [
      {
        label: "A",
        text: "马上讲大道理：“你应该……”",
        score: 1,
      },
      {
        label: "B",
        text: "跟着一起骂，比他还激动。",
        score: 3,
      },
      {
        label: "C",
        text: "辨别目的。求安慰就共情，求建议再引导。",
        score: 5,
      },
    ],
  },
  {
    id: 22,
    text: "你希望从朋友身上获得什么？",
    options: [
      {
        label: "A",
        text: "不知道，只要有人陪就行。",
        score: 1,
      },
      {
        label: "B",
        text: "希望他完全懂我，随时接住我的情绪。",
        score: 3,
      },
      {
        label: "C",
        text: "清晰的需求清单。玩乐、情绪、利益分开获取。",
        score: 5,
      },
    ],
  },
  {
    id: 23,
    text: "怎么判断一个人能不能深交？",
    options: [
      {
        label: "A",
        text: "看能不能一起吃喝玩乐。",
        score: 1,
      },
      {
        label: "B",
        text: "看他是不是对我好。",
        score: 3,
      },
      {
        label: "C",
        text: "看“服从性测试”和“底线暴露”。",
        score: 5,
      },
    ],
  },
  {
    id: 24,
    text: "想要拓展新圈子交朋友，你会？",
    options: [
      {
        label: "A",
        text: "只是想想，从来不行动。",
        score: 1,
      },
      {
        label: "B",
        text: "盲目参加各种局，加微信不聊。",
        score: 3,
      },
      {
        label: "C",
        text: "基于兴趣行动。在共同活动（如读书会）中筛选。",
        score: 5,
      },
    ],
  },
  {
    id: 25,
    text: "不小心搞砸了一件事，需要道歉。",
    options: [
      {
        label: "A",
        text: "“对不起，但我不是故意的，因为……”（找借口）。",
        score: 1,
      },
      {
        label: "B",
        text: "“行行行，我错了。”（敷衍）。",
        score: 3,
      },
      {
        label: "C",
        text: "“对不起（认错）+解释原因+补救措施+改进方案”。",
        score: 5,
      },
    ],
  },
  {
    id: 26,
    text: "当你感到很丧的时候，你会怎么想？",
    options: [
      {
        label: "A",
        text: "“我真没用，这辈子完了。”（反刍痛苦）。",
        score: 1,
      },
      {
        label: "B",
        text: "找朋友疯狂倒苦水。",
        score: 3,
      },
      {
        label: "C",
        text: "课题分离。打断反刍（睡觉/洗澡），事后复盘。",
        score: 5,
      },
    ],
  },
  {
    id: 27,
    text: "你会在朋友圈发什么样的内容？",
    options: [
      {
        label: "A",
        text: "只有抱怨、负能量。",
        score: 1,
      },
      {
        label: "B",
        text: "刻意炫耀精修图，为了点赞而活。",
        score: 3,
      },
      {
        label: "C",
        text: "真实的切片。记录生活，吸引同频的人。",
        score: 5,
      },
    ],
  },
  {
    id: 28,
    text: "面对“被讨厌”这件事，你的态度是？",
    options: [
      {
        label: "A",
        text: "极度恐惧，想办法讨好对方。",
        score: 1,
      },
      {
        label: "B",
        text: "愤怒，觉得对方有眼无珠。",
        score: 3,
      },
      {
        label: "C",
        text: "允许。被讨厌是我的勋章，说明我有棱角。",
        score: 5,
      },
    ],
  },
  {
    id: 29,
    text: "你认为“i人”在社交中的优势是？",
    options: [
      {
        label: "A",
        text: "没有优势，不如e人。",
        score: 1,
      },
      {
        label: "B",
        text: "不知道，只觉得累。",
        score: 3,
      },
      {
        label: "C",
        text: "深度与观察力。擅长1v1连接和倾听。",
        score: 5,
      },
    ],
  },
  {
    id: 30,
    text: "现在的你，更倾向于哪种生活方式？",
    options: [
      {
        label: "A",
        text: "随波逐流。",
        score: 1,
      },
      {
        label: "B",
        text: "封闭自我。",
        score: 3,
      },
      {
        label: "C",
        text: "自洽。找到适合自己的生存方式，不杀死真实的自己。",
        score: 5,
      },
    ],
  },
];

const resultPresets = [
  {
    range: [30, 70],
    title: "【高内耗·透明易碎体质】",
    mirror:
      "你不是不懂社交，你是“太在意”社交。你的自我边界像细胞膜一样薄，外界的一点风吹草动（别人的眼神、语气）都能穿透你，引发你内心的海啸。你把“拒绝”等同于“伤害”，把“解释”当成“救命稻草”。你总是试图通过牺牲自我来换取生存空间。",
    actions: [
      "建立“篱笆意识”：社交不是为了让所有人都进来，而是为了把不合适的人踢出去。",
      "停止自证陷阱：记住“谁质疑，谁举证”。不要急着剖腹取粉。",
      "脱敏训练：本周尝试做一件“让别人失望”的小事，你会发现天塌不下来。",
    ],
  },
  {
    range: [71, 110],
    title: "【适应期·机械防御体质】",
    mirror:
      "你已经具备了基本的社会化意识，知道要保护自己，但手段尚显稚嫩。你处于“脑子学会了，嘴巴没跟上”的阶段。你知道不该做老好人，但拒绝时还是会心虚；你知道要向上社交，但往往因为害怕而止步。你的能量主要消耗在“纠结”上——做之前纠结，做之后后悔。",
    actions: [
      "万能聊天公式：F.O.R.M.（家庭/工作/娱乐/当下）+ 观察赞美。",
      "职场留痕术：遇到不靠谱同事，所有重要沟通必须文字化，这是你的免责金牌。",
      "小切口突围：别想着搞定所有人。先搞定一个聊得来的人，以此为支点。",
    ],
  },
  {
    range: [111, 150],
    title: "【高段位·系统化生存体质】",
    mirror:
      "恭喜，你已经练就了“i人究极形态”。你外表可能依然安静、温和，但内核坚硬如铁。你深刻理解“社交的本质是价值交换”和“筛选机制”。你不再寻求无意义的“合群”，而是构建了自己的生态系统。你对烂人有免疫力，对强者有吸引力。",
    actions: [
      "向上社交：用“反馈”刷存在感。告诉大佬他的建议很有用，满足他的成就感。",
      "灰岩法：对付 NPD（自恋型人格），像石头一样无趣，不给情绪反应。",
      "朋友分层：不要期待一个朋友满足所有需求。不要和玩乐搭子交心，不要和利益伙伴谈情。",
    ],
  },
];

const el = (id) => document.getElementById(id);

const gateScreen = el("gate-screen");
const quizScreen = el("quiz-screen");
const analyzingScreen = el("analyzing-screen");
const resultScreen = el("result-screen");

const accessInput = el("access-code");
const accessError = el("access-error");
const startBtn = el("start-btn");

const progressBar = el("progress-bar");
const progressText = el("progress-text");
const questionIndexLabel = el("question-index");
const questionText = el("question-text");
const optionsContainer = el("options-container");
const questionCard = el("question-card");

const totalScoreEl = el("total-score");
const rankTitleEl = el("rank-title");
const mirrorTextEl = el("mirror-text");
const prescriptionListEl = el("prescription-list");
const saveBtn = el("save-btn");
const retryBtn = el("retry-btn");

let currentIndex = 0;
let totalScore = 0;
let isTransitioning = false;

function switchScreen(target) {
  [gateScreen, quizScreen, analyzingScreen, resultScreen].forEach((s) =>
    s.classList.remove("active")
  );
  target.classList.add("active");
}

function updateProgress() {
  const total = questions.length;
  const current = Math.min(currentIndex + 1, total);
  const pct = (current / total) * 100;
  progressBar.style.width = `${pct}%`;
  progressText.textContent = `Question ${current} / ${total}`;
  questionIndexLabel.textContent = `Q${current}`;
}

function renderQuestion() {
  const q = questions[currentIndex];
  questionText.textContent = q.text;
  optionsContainer.innerHTML = "";

  q.options.forEach((opt) => {
    const card = document.createElement("div");
    card.className = "option-card";
    card.dataset.score = String(opt.score);

    const badge = document.createElement("div");
    badge.className = "option-badge";
    badge.textContent = opt.label;

    const text = document.createElement("div");
    text.className = "option-text";
    text.textContent = opt.text;

    card.appendChild(badge);
    card.appendChild(text);

    card.addEventListener("click", () => {
      if (isTransitioning) return;
      handleAnswer(opt.score);
    });

    optionsContainer.appendChild(card);
  });
}

function handleAnswer(score) {
  totalScore += score;
  isTransitioning = true;

  questionCard.classList.remove("slide-in");
  questionCard.classList.add("slide-out-left");

  setTimeout(() => {
    currentIndex += 1;
    if (currentIndex >= questions.length) {
      startAnalyzing();
      return;
    }
    questionCard.classList.remove("slide-out-left");
    questionCard.classList.add("slide-in");
    updateProgress();
    renderQuestion();
    setTimeout(() => {
      questionCard.classList.remove("slide-in");
      isTransitioning = false;
    }, 280);
  }, 250);
}

function findResultPreset(score) {
  return (
    resultPresets.find(
      (preset) => score >= preset.range[0] && score <= preset.range[1]
    ) || resultPresets[0]
  );
}

function showResult() {
  const preset = findResultPreset(totalScore);
  totalScoreEl.textContent = String(totalScore);
  rankTitleEl.textContent = preset.title;
  mirrorTextEl.textContent = preset.mirror;

  prescriptionListEl.innerHTML = "";
  preset.actions.forEach((text, idx) => {
    const item = document.createElement("div");
    item.className = "prescription-item";
    const indexSpan = document.createElement("span");
    indexSpan.className = "prescription-index";
    indexSpan.textContent = `${idx + 1}.`;
    const contentSpan = document.createElement("span");
    contentSpan.textContent = text;
    item.appendChild(indexSpan);
    item.appendChild(contentSpan);
    prescriptionListEl.appendChild(item);
  });

  switchScreen(resultScreen);
}

function startAnalyzing() {
  switchScreen(analyzingScreen);
  setTimeout(() => {
    showResult();
  }, 2200);
}

function resetQuiz(fullResetGate = false) {
  currentIndex = 0;
  totalScore = 0;
  isTransitioning = false;
  updateProgress();
  renderQuestion();
  if (fullResetGate) {
    accessInput.value = "";
    accessError.textContent = "";
    switchScreen(gateScreen);
  } else {
    switchScreen(quizScreen);
  }
}

function initGate() {
  startBtn.addEventListener("click", () => {
    const value = accessInput.value.trim();
    if (value === ACCESS_CODE) {
      accessError.textContent = "";
      gateScreen.classList.remove("shake");
      switchScreen(quizScreen);
      updateProgress();
      renderQuestion();
    } else {
      accessError.textContent = "暗号错误";
      gateScreen.classList.remove("shake");
      void gateScreen.offsetWidth;
      gateScreen.classList.add("shake");
    }
  });

  accessInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      startBtn.click();
    }
  });
}

function initResultActions() {
  retryBtn.addEventListener("click", () => {
    resetQuiz(false);
  });

  saveBtn.addEventListener("click", () => {
    const target = resultScreen;
    if (!window.html2canvas || !target) {
      alert("截图功能不可用，请使用系统/浏览器截图功能保存结果。");
      return;
    }
    const originalScroll = window.scrollY;
    window.scrollTo(0, 0);
    html2canvas(target, {
      backgroundColor: "#020617",
      scale: window.devicePixelRatio > 1 ? 2 : 1.5,
    }).then((canvas) => {
      const link = document.createElement("a");
      link.download = `i-social-mirror-${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      window.scrollTo(0, originalScroll);
    });
  });
}

function main() {
  initGate();
  initResultActions();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", main);
} else {
  main();
}


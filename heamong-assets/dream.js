// 키워드 -> 해몽 사전 (luck: good | bad | neutral)
const DREAM_DICTIONARY = [
  // 동물
  { keywords: ["뱀"], luck: "good", title: "뱀 꿈", text: "뱀 꿈은 대표적인 길몽으로, 재물운이나 좋은 인연이 들어올 조짐이에요. 특히 뱀에게 물리거나 뱀을 잡는 꿈은 재물이 크게 들어올 수 있다는 뜻이에요." },
  { keywords: ["돼지"], luck: "good", title: "돼지 꿈", text: "돼지 꿈은 재물운의 상징이에요. 복권이나 큰 지출이 있는 결정을 앞두고 있다면 좋은 신호일 수 있어요." },
  { keywords: ["거미"], luck: "good", title: "거미 꿈", text: "거미가 나오는 꿈은 재물운이나 인복이 따르는 길몽으로 해석돼요. 특히 거미줄을 치는 모습은 계획이 순조롭게 진행된다는 뜻이에요." },
  { keywords: ["개", "강아지"], luck: "neutral", title: "개/강아지 꿈", text: "개는 충직한 인연이나 도움을 주는 사람을 상징해요. 개가 짖거나 무는 꿈이라면 주변 사람과의 갈등을 조심하라는 신호일 수 있어요." },
  { keywords: ["고양이"], luck: "neutral", title: "고양이 꿈", text: "고양이 꿈은 예민함이나 경계심을 상징해요. 상황에 따라 배신이나 의심을 조심하라는 뜻일 수도, 독립심과 직관력을 뜻할 수도 있어요." },
  { keywords: ["비행기", "하늘을 날"], luck: "good", title: "하늘을 나는 꿈", text: "하늘을 자유롭게 나는 꿈은 목표에 가까워지고 있다는 뜻으로, 자신감과 성취운이 따르는 길몽이에요." },
  { keywords: ["호랑이"], luck: "good", title: "호랑이 꿈", text: "호랑이 꿈은 권력과 승진, 명예를 상징하는 강한 길몽이에요. 호랑이에게 쫓기더라도 결국은 큰 힘을 얻게 된다는 뜻으로 풀이돼요." },
  { keywords: ["용"], luck: "good", title: "용 꿈", text: "용이 나오는 꿈은 최고의 길몽 중 하나로, 출세나 큰 성공, 귀한 인연을 뜻해요. 용이 하늘로 오르는 꿈이라면 더욱 강력한 길몽이에요." },
  { keywords: ["곰"], luck: "neutral", title: "곰 꿈", text: "곰 꿈은 든든한 힘이나 느긋한 기회를 상징해요. 다만 곰에게 쫓기는 꿈이라면 버거운 책임감을 나타낼 수 있어요." },
  { keywords: ["사자"], luck: "good", title: "사자 꿈", text: "사자 꿈은 리더십과 성공운을 상징하는 길몽이에요. 조직에서 인정받거나 주도권을 쥐게 될 조짐이에요." },
  { keywords: ["말이", "백마", "말을 타"], luck: "good", title: "말 꿈", text: "말, 특히 백마가 나오는 꿈은 출세와 성공운이 따르는 길몽이에요. 말을 타고 달리는 꿈은 일이 순조롭게 풀린다는 뜻이에요." },
  { keywords: ["소가", "황소"], luck: "good", title: "소 꿈", text: "소 꿈은 재물과 풍요를 상징하는 길몽이에요. 특히 소를 몰고 오는 꿈은 재물이 들어올 조짐이에요." },
  { keywords: ["닭이", "닭 울"], luck: "neutral", title: "닭 꿈", text: "닭이 우는 꿈은 좋은 소식이 곧 전해진다는 뜻이에요. 다만 닭이 다치는 꿈이라면 구설수를 조심하라는 신호일 수 있어요." },
  { keywords: ["쥐가", "생쥐"], luck: "bad", title: "쥐 꿈", text: "쥐 꿈은 잔걱정이나 작은 손실, 주변 사람의 배신을 조심하라는 흉몽으로 해석되는 경우가 많아요." },
  { keywords: ["개구리"], luck: "good", title: "개구리 꿈", text: "개구리 꿈은 재물운과 새로운 기회를 상징하는 길몽이에요. 개구리가 뛰어오르는 모습이면 더 좋은 신호예요." },
  { keywords: ["물고기", "잉어", "낚시"], luck: "good", title: "물고기 꿈", text: "물고기를 잡거나 보는 꿈은 재물운과 출세를 상징하는 길몽이에요. 특히 큰 잉어를 잡는 꿈은 큰 성공을 암시해요." },
  { keywords: ["나비"], luck: "good", title: "나비 꿈", text: "나비 꿈은 애정운과 좋은 변화를 상징하는 길몽이에요. 나비가 날아드는 꿈이라면 반가운 소식이 있을 수 있어요." },
  { keywords: ["벌이", "벌떼", "벌한테"], luck: "bad", title: "벌 꿈", text: "벌에 쏘이거나 벌떼가 나오는 꿈은 구설수나 주변 사람과의 갈등을 조심하라는 흉몽으로 해석돼요." },
  { keywords: ["원숭이"], luck: "bad", title: "원숭이 꿈", text: "원숭이 꿈은 가까운 사람의 배신이나 잔꾀를 조심하라는 흉몽으로 해석되는 경우가 많아요." },
  { keywords: ["여우"], luck: "bad", title: "여우 꿈", text: "여우 꿈은 유혹이나 속임수를 조심하라는 흉몽으로 해석돼요. 중요한 결정을 앞두고 있다면 신중하게 살펴보세요." },
  { keywords: ["토끼"], luck: "good", title: "토끼 꿈", text: "토끼 꿈은 행운과 순조로운 일 처리를 상징하는 길몽이에요. 토끼가 품에 들어오는 꿈이면 더 좋은 신호예요." },
  { keywords: ["사슴"], luck: "good", title: "사슴 꿈", text: "사슴 꿈은 귀인을 만나거나 명예로운 일이 생길 길몽으로 해석돼요." },
  { keywords: ["코끼리"], luck: "good", title: "코끼리 꿈", text: "코끼리 꿈은 큰 재물운과 권력, 든든한 후원을 상징하는 강한 길몽이에요." },
  { keywords: ["부엉이", "올빼미"], luck: "neutral", title: "부엉이 꿈", text: "부엉이 꿈은 지혜와 통찰력을 상징해요. 중요한 판단을 앞두고 있다면 신중하게 접근하라는 신호일 수 있어요." },
  { keywords: ["까마귀"], luck: "bad", title: "까마귀 꿈", text: "까마귀 꿈은 안 좋은 소식이나 근심거리를 암시하는 흉몽으로 해석되는 경우가 많아요." },
  { keywords: ["까치"], luck: "good", title: "까치 꿈", text: "까치가 우는 꿈은 반가운 손님이나 좋은 소식이 찾아온다는 전통적인 길몽이에요." },
  { keywords: ["학이", "두루미"], luck: "good", title: "학 꿈", text: "학(두루미) 꿈은 장수와 명예를 상징하는 길몽이에요." },
  { keywords: ["독수리", "매가"], luck: "good", title: "독수리 꿈", text: "독수리나 매가 하늘 높이 나는 꿈은 큰 성공과 출세를 상징하는 길몽이에요." },
  // 자연
  { keywords: ["산에", "등산", "산을 오르"], luck: "good", title: "산 꿈", text: "산을 오르는 꿈은 목표를 향해 나아가 결국 성취를 이룬다는 길몽이에요. 정상에 오르는 꿈이라면 더욱 좋아요." },
  { keywords: ["나무가", "나무를 심"], luck: "good", title: "나무 꿈", text: "나무 꿈은 성장과 발전을 상징하는 길몽이에요. 나무를 심는 꿈은 새로운 계획이 튼튼히 자리 잡는다는 뜻이에요." },
  { keywords: ["꽃이", "꽃을"], luck: "good", title: "꽃 꿈", text: "꽃이 활짝 피는 꿈은 좋은 일이나 애정운 상승을 상징하는 길몽이에요." },
  { keywords: ["눈이 오", "눈 내리"], luck: "good", title: "눈 내리는 꿈", text: "눈이 소복이 내리는 꿈은 풍요와 좋은 기회가 찾아온다는 길몽이에요." },
  { keywords: ["비가", "장맛비"], luck: "neutral", title: "비 오는 꿈", text: "비가 내리는 꿈은 감정이 정리되거나 근심이 씻겨나간다는 뜻으로 해석돼요. 폭우라면 일시적인 어려움을 암시할 수 있어요." },
  { keywords: ["무지개"], luck: "good", title: "무지개 꿈", text: "무지개를 보는 꿈은 소원 성취와 행운을 상징하는 대표적인 길몽이에요." },
  { keywords: ["태양", "해가 뜨"], luck: "good", title: "태양 꿈", text: "밝은 태양을 보는 꿈은 명예와 성공운이 따르는 길몽이에요." },
  { keywords: ["달이", "보름달"], luck: "good", title: "달 꿈", text: "밝고 둥근 달을 보는 꿈은 소원이 이루어지는 길몽이에요." },
  { keywords: ["별이", "별을"], luck: "good", title: "별 꿈", text: "별이 반짝이는 꿈은 귀인을 만나거나 명예로운 일이 생길 길몽이에요." },
  { keywords: ["번개", "천둥"], luck: "neutral", title: "번개/천둥 꿈", text: "번개나 천둥이 치는 꿈은 갑작스러운 변화나 소식을 암시해요. 놀랐던 감정이 컸다면 마음의 준비를 해두면 좋아요." },
  { keywords: ["지진"], luck: "bad", title: "지진 꿈", text: "지진이 나는 꿈은 생활의 기반이 흔들리는 불안정한 상황을 조심하라는 흉몽으로 해석돼요." },
  // 사물
  { keywords: ["반지"], luck: "neutral", title: "반지 꿈", text: "반지 꿈은 인연이나 약속을 상징해요. 반지를 받는 꿈은 좋은 인연을, 잃어버리는 꿈은 관계에 대한 불안을 뜻할 수 있어요." },
  { keywords: ["신발", "구두"], luck: "neutral", title: "신발 꿈", text: "새 신발을 얻는 꿈은 새로운 기회를 뜻하는 길몽이지만, 신발을 잃어버리는 꿈은 하던 일이 어긋날 수 있다는 신호예요." },
  { keywords: ["열쇠"], luck: "good", title: "열쇠 꿈", text: "열쇠를 얻는 꿈은 막혔던 문제를 풀 기회나 새로운 문이 열린다는 길몽이에요." },
  { keywords: ["자동차", "운전"], luck: "neutral", title: "자동차 꿈", text: "자동차를 운전하는 꿈은 스스로 인생의 방향을 주도하고 있다는 뜻이에요. 사고가 나는 꿈이라면 계획을 다시 점검해보는 게 좋아요." },
  { keywords: ["배를 타", "선박", "항해"], luck: "good", title: "배(선박) 꿈", text: "배를 타고 순항하는 꿈은 일이 순조롭게 풀린다는 길몽이에요." },
  { keywords: ["다리를 건너", "다리 건너"], luck: "good", title: "다리 건너는 꿈", text: "다리를 건너는 꿈은 어려운 상황을 지나 새로운 전환점을 맞는다는 길몽이에요." },
  { keywords: ["계단을 오르"], luck: "good", title: "계단 오르는 꿈", text: "계단을 오르는 꿈은 목표를 향해 한 단계씩 나아가고 있다는 길몽이에요." },
  { keywords: ["계단에서 내려", "계단을 내려"], luck: "bad", title: "계단 내려가는 꿈", text: "계단을 계속 내려가는 꿈은 자신감 저하나 일이 뜻대로 안 풀리는 상황을 암시할 수 있어요." },
  { keywords: ["거울"], luck: "neutral", title: "거울 꿈", text: "거울을 보는 꿈은 자기 자신을 돌아보게 되는 시기라는 뜻이에요. 깨진 거울이라면 관계나 계획의 균열을 조심하라는 신호예요." },
  { keywords: ["시계"], luck: "neutral", title: "시계 꿈", text: "시계가 나오는 꿈은 시간에 쫓기는 압박감이나 중요한 결정의 타이밍을 암시해요." },
  { keywords: ["옷을", "새 옷"], luck: "neutral", title: "옷 꿈", text: "새 옷을 입는 꿈은 좋은 변화가 찾아온다는 뜻이고, 낡거나 찢어진 옷을 입는 꿈은 근심이 있다는 신호일 수 있어요." },
  { keywords: ["복권"], luck: "good", title: "복권 꿈", text: "복권과 관련된 꿈은 예상치 못한 재물운이 따르는 길몽이에요." },
  { keywords: ["보석", "진주", "다이아몬드"], luck: "good", title: "보석 꿈", text: "보석이나 진주를 얻는 꿈은 귀한 인연이나 재물운 상승을 뜻하는 길몽이에요." },
  // 행동/사건
  { keywords: ["수영"], luck: "good", title: "수영하는 꿈", text: "물속을 자유롭게 헤엄치는 꿈은 어려움을 잘 헤쳐나가고 있다는 길몽이에요." },
  { keywords: ["노래"], luck: "good", title: "노래하는 꿈", text: "노래를 부르는 꿈은 감정이 잘 표현되고 주변에서 좋은 평가를 받는다는 길몽이에요." },
  { keywords: ["춤을", "춤추"], luck: "good", title: "춤추는 꿈", text: "춤을 추는 꿈은 즐거운 일이나 대인관계에서의 좋은 흐름을 상징하는 길몽이에요." },
  { keywords: ["싸우", "다투"], luck: "bad", title: "싸우는 꿈", text: "누군가와 싸우거나 다투는 꿈은 현실에서의 갈등이나 스트레스를 반영해요. 감정을 쌓아두고 있는 부분이 없는지 돌아보면 좋아요." },
  { keywords: ["눈물", "울었"], luck: "good", title: "우는 꿈", text: "꿈속에서 우는 것은 의외로 감정이 해소되고 근심이 풀린다는 길몽으로 해석돼요." },
  { keywords: ["웃", "행복했"], luck: "good", title: "웃는 꿈", text: "꿈속에서 크게 웃는 것은 실제로는 곧 기쁜 일이 생길 조짐이라는 길몽이에요." },
  { keywords: ["화장실"], luck: "good", title: "화장실 꿈", text: "화장실에서 시원하게 일을 보는 꿈은 재물운이 트이는 길몽이에요." },
  { keywords: ["음식을", "밥을 먹", "맛있는"], luck: "good", title: "음식 먹는 꿈", text: "맛있는 음식을 먹는 꿈은 풍요와 만족스러운 상황을 상징하는 길몽이에요." },
  { keywords: ["요리"], luck: "neutral", title: "요리하는 꿈", text: "요리하는 꿈은 새로운 일을 계획하고 준비하는 상태를 상징해요." },
  { keywords: ["머리카락", "머리가 빠지", "탈모"], luck: "bad", title: "머리카락 빠지는 꿈", text: "머리카락이 빠지는 꿈은 스트레스나 건강, 자신감과 관련된 흉몽으로 해석되는 경우가 많아요. 컨디션 관리에 신경 써보세요." },
  { keywords: ["피가", "피를 흘리", "출혈"], luck: "good", title: "피 흘리는 꿈", text: "의외로 피를 흘리는 꿈은 재물이 들어오거나 막힌 일이 풀리는 길몽으로 해석되는 경우가 많아요." },
  // 사람
  { keywords: ["조상", "돌아가신"], luck: "neutral", title: "조상 꿈", text: "돌아가신 조상이 나오는 꿈은 중요한 조언이나 경고, 혹은 도움을 상징해요. 꿈에서 조상이 한 말이나 행동을 잘 떠올려보세요." },
  { keywords: ["전 애인", "헤어진 애인"], luck: "neutral", title: "전 애인 꿈", text: "전 애인이 나오는 꿈은 실제 재회의 의미보다는 그 시절 감정이나 미해결 과제를 정리하고 싶은 마음을 반영하는 경우가 많아요." },
  { keywords: ["연예인", "유명인"], luck: "neutral", title: "유명인 꿈", text: "유명인이 나오는 꿈은 인정받고 싶은 욕구나 주목받는 상황을 상징해요." },
  { keywords: ["낯선 사람", "모르는 사람"], luck: "neutral", title: "낯선 사람 꿈", text: "낯선 사람이 나오는 꿈은 새로운 인연이나 아직 드러나지 않은 내 안의 모습을 상징할 수 있어요." },
  // 그 외 자주 나오는 꿈
  { keywords: ["똥", "대변"], luck: "good", title: "똥 꿈", text: "찝찝하게 느껴지지만 사실 똥 꿈은 재물이 들어오는 대표적인 길몽이에요." },
  { keywords: ["물", "바다", "강", "홍수"], luck: "good", title: "물/바다 꿈", text: "맑고 넓은 물이나 바다를 보는 꿈은 마음이 편안해지고 운이 트이는 길몽이에요. 다만 흙탕물이나 물에 빠지는 꿈은 근심이나 스트레스를 의미할 수 있어요." },
  { keywords: ["불", "화재"], luck: "good", title: "불 꿈", text: "불이 활활 타오르는 꿈은 열정과 성공, 재물운 상승을 뜻하는 길몽이에요. 다만 내 물건이 불타 없어지는 꿈이라면 변화나 손실을 조심하라는 의미일 수 있어요." },
  { keywords: ["이빨", "이가 빠지", "치아"], luck: "bad", title: "이 빠지는 꿈", text: "이가 빠지는 꿈은 대표적인 흉몽으로, 가까운 사람과의 이별이나 건강 문제, 자신감 저하를 암시할 수 있어요. 너무 걱정하기보다 컨디션 관리에 신경 써보세요." },
  { keywords: ["떨어지", "추락"], luck: "bad", title: "떨어지는 꿈", text: "높은 곳에서 떨어지는 꿈은 불안감이나 스트레스, 상황에 대한 통제력을 잃을까 하는 걱정을 반영해요. 요즘 부담을 느끼는 일이 있는지 점검해보면 좋아요." },
  { keywords: ["쫓기", "도망"], luck: "bad", title: "쫓기는 꿈", text: "누군가에게 쫓기는 꿈은 현실에서 회피하고 싶은 문제나 압박감을 나타내요. 무엇이 나를 쫓고 있었는지 떠올려보면 답을 찾는 데 도움이 될 수 있어요." },
  { keywords: ["시험"], luck: "bad", title: "시험 보는 꿈", text: "시험 관련 꿈은 현재 스스로에 대한 평가나 부담감, 준비 부족에 대한 불안을 반영하는 경우가 많아요." },
  { keywords: ["죽", "사망", "장례"], luck: "good", title: "죽음/장례 꿈", text: "의외로 죽음이나 장례식 꿈은 나쁜 것을 상징하지 않고, 오히려 묵은 문제가 해결되고 새로운 시작을 맞이하는 길몽으로 해석돼요." },
  { keywords: ["결혼"], luck: "neutral", title: "결혼하는 꿈", text: "결혼 꿈은 새로운 시작이나 관계의 변화, 계약과 관련된 일을 암시해요. 좋고 나쁨보다는 인생의 중요한 전환점을 뜻하는 경우가 많아요." },
  { keywords: ["임신", "아기"], luck: "good", title: "임신/아기 꿈", text: "임신이나 아기가 나오는 꿈은 새로운 계획이나 프로젝트의 시작, 좋은 소식이 들려올 길몽으로 여겨져요." },
  { keywords: ["돈", "지갑", "금"], luck: "good", title: "돈/금 꿈", text: "돈이나 금을 줍거나 얻는 꿈은 재물운 상승을 뜻하는 대표적인 길몽이에요." },
  { keywords: ["시체"], luck: "good", title: "시체를 보는 꿈", text: "시체를 보는 꿈은 불길하게 느껴지지만 실제로는 오래된 문제가 해결되고 재물운이 상승하는 길몽으로 여겨져요." },
  { keywords: ["귀신", "유령"], luck: "bad", title: "귀신 꿈", text: "귀신이나 유령이 나오는 꿈은 마음속 불안이나 해결하지 못한 걱정거리를 상징해요. 최근 스트레스를 받는 일이 있는지 돌아보면 좋아요." },
  { keywords: ["이사", "집"], luck: "neutral", title: "이사/집 꿈", text: "이사나 새로운 집에 대한 꿈은 환경 변화나 새로운 시작에 대한 마음가짐을 반영해요." },
  { keywords: ["시험 합격", "합격"], luck: "good", title: "합격 꿈", text: "합격하는 꿈은 노력한 일이 좋은 결실을 맺는다는 길몽이에요." },
  // 벌레/파충류
  { keywords: ["지네"], luck: "good", title: "지네 꿈", text: "지네 꿈은 징그럽게 느껴지지만 재물운이 따르는 길몽으로 해석돼요. 특히 지네가 집 안으로 들어오는 꿈은 재물이 들어온다는 뜻이에요." },
  { keywords: ["바퀴벌레"], luck: "neutral", title: "바퀴벌레 꿈", text: "바퀴벌레 꿈은 귀찮은 문제나 신경 쓰이는 일이 반복된다는 뜻이에요. 잡아 없애는 꿈이라면 그 문제를 해결한다는 의미로 좋게 볼 수 있어요." },
  { keywords: ["모기"], luck: "bad", title: "모기 꿈", text: "모기에 물리는 꿈은 작은 손실이나 주변 사람으로 인한 스트레스를 조심하라는 흉몽으로 해석돼요." },
  { keywords: ["파리가", "파리 떼"], luck: "bad", title: "파리 꿈", text: "파리가 꼬이는 꿈은 귀찮은 구설수나 소소한 방해거리를 암시해요." },
  { keywords: ["도마뱀"], luck: "neutral", title: "도마뱀 꿈", text: "도마뱀 꿈은 위기 상황에서도 스스로를 지키는 재생력과 적응력을 상징해요." },
  // 재난/사고
  { keywords: ["태풍"], luck: "bad", title: "태풍 꿈", text: "태풍이 몰아치는 꿈은 갑작스러운 변화나 감당하기 힘든 상황을 조심하라는 흉몽으로 해석돼요." },
  { keywords: ["화산"], luck: "neutral", title: "화산 꿈", text: "화산이 폭발하는 꿈은 오랫동안 억눌러온 감정이나 욕구가 터져 나오려는 상태를 상징해요." },
  { keywords: ["눈사태"], luck: "bad", title: "눈사태 꿈", text: "눈사태 꿈은 갑작스럽게 밀려오는 부담감이나 통제하기 어려운 상황을 암시해요." },
  { keywords: ["산불"], luck: "bad", title: "산불 꿈", text: "산불이 번지는 꿈은 걷잡을 수 없이 커지는 걱정거리나 갈등을 조심하라는 흉몽이에요." },
  { keywords: ["비행기가 추락", "비행기 사고"], luck: "bad", title: "비행기 추락 꿈", text: "비행기가 추락하는 꿈은 계획하던 일이 뜻대로 안 될까 봐 느끼는 불안감을 반영해요." },
  { keywords: ["기차"], luck: "good", title: "기차 꿈", text: "기차를 타고 순조롭게 이동하는 꿈은 계획한 일이 정해진 방향으로 잘 나아가고 있다는 길몽이에요." },
  { keywords: ["지하철"], luck: "neutral", title: "지하철 꿈", text: "지하철 꿈은 반복되는 일상이나 정해진 루트 안에서의 변화를 상징해요. 지하철을 놓치는 꿈이라면 기회를 놓칠까 하는 불안을 뜻해요." },
  { keywords: ["교통사고", "차 사고"], luck: "bad", title: "교통사고 꿈", text: "교통사고 꿈은 갑작스러운 계획 변경이나 예상치 못한 지장을 조심하라는 흉몽으로 해석돼요." },
  // 신체/건강
  { keywords: ["수술"], luck: "neutral", title: "수술 꿈", text: "수술을 받는 꿈은 지금 상황에서 근본적인 변화나 정리가 필요하다는 신호로 해석돼요." },
  { keywords: ["병원", "입원"], luck: "neutral", title: "병원 꿈", text: "병원 꿈은 건강이나 마음 상태를 스스로 점검하고 돌보고 싶어 하는 마음을 반영해요." },
  { keywords: ["손톱"], luck: "neutral", title: "손톱 꿈", text: "손톱이 길게 자라는 꿈은 재물운 상승을, 손톱이 깨지거나 빠지는 꿈은 작은 손실을 조심하라는 뜻으로 해석돼요." },
  { keywords: ["화상"], luck: "neutral", title: "화상 꿈", text: "화상을 입는 꿈은 열정이 과해 스스로를 지치게 하고 있지 않은지 돌아보라는 신호일 수 있어요." },
  { keywords: ["상처", "흉터"], luck: "neutral", title: "상처 꿈", text: "몸에 상처가 나는 꿈은 마음속에 아물지 않은 감정이나 과거의 일을 상징하는 경우가 많아요." },
  { keywords: ["안경", "시력"], luck: "neutral", title: "안경/시력 꿈", text: "안경을 쓰거나 시력과 관련된 꿈은 상황을 더 명확하게 보고 싶어 하는 마음을 상징해요." },
  // 관계/사랑
  { keywords: ["바람", "불륜"], luck: "bad", title: "바람피우는 꿈", text: "상대가 바람을 피우는 꿈은 실제 배신보다는 관계에 대한 불안감이나 애정 결핍을 반영하는 경우가 많아요." },
  { keywords: ["이혼"], luck: "neutral", title: "이혼 꿈", text: "이혼하는 꿈은 실제 이혼을 예고하기보다는, 현재 관계나 상황에서 벗어나고 싶은 마음을 상징해요." },
  { keywords: ["짝사랑", "고백"], luck: "good", title: "고백하는 꿈", text: "누군가에게 고백하거나 고백받는 꿈은 애정운이 상승하고 있다는 길몽이에요." },
  { keywords: ["재회"], luck: "neutral", title: "재회하는 꿈", text: "누군가와 재회하는 꿈은 관계 자체보다는 그 시절 미련이나 못다 한 마음을 정리하고 싶어 하는 심리를 반영해요." },
  // 일/커리어
  { keywords: ["취업", "면접"], luck: "good", title: "취업/면접 꿈", text: "취업하거나 면접을 보는 꿈은 새로운 기회가 찾아오고 좋은 결과를 얻는다는 길몽이에요." },
  { keywords: ["승진"], luck: "good", title: "승진 꿈", text: "승진하는 꿈은 그동안의 노력을 인정받고 좋은 성과를 거둔다는 길몽이에요." },
  { keywords: ["퇴사", "해고"], luck: "neutral", title: "퇴사/해고 꿈", text: "퇴사하거나 해고당하는 꿈은 실제 이직보다는 지금 상황에서 벗어나 자유로워지고 싶은 마음을 반영해요." },
  { keywords: ["사업", "창업"], luck: "good", title: "사업/창업 꿈", text: "사업을 시작하거나 성공하는 꿈은 새로운 도전에서 좋은 결과를 얻을 길몽이에요." },
  { keywords: ["월급", "보너스"], luck: "good", title: "월급/보너스 꿈", text: "월급이나 보너스를 받는 꿈은 노력한 만큼의 보상이 따르는 길몽이에요." },
  { keywords: ["졸업"], luck: "good", title: "졸업하는 꿈", text: "졸업하는 꿈은 한 단계를 잘 마무리하고 새로운 시작을 앞두고 있다는 길몽이에요." },
  // 돈/투자
  { keywords: ["주식"], luck: "neutral", title: "주식 꿈", text: "주식과 관련된 꿈은 지금 하고 있는 결정이나 투자에 대한 불안, 혹은 기대감을 반영해요." },
  { keywords: ["코인", "비트코인"], luck: "neutral", title: "코인 꿈", text: "코인 관련 꿈은 한 번에 크게 얻고 싶은 마음이나 불확실한 상황에 대한 기대와 불안을 동시에 상징해요." },
  { keywords: ["부동산", "아파트를 사"], luck: "good", title: "부동산 꿈", text: "집이나 부동산을 사는 꿈은 안정과 재물운이 함께 따르는 길몽이에요." },
  { keywords: ["지갑을 잃어버리", "지갑 도둑"], luck: "bad", title: "지갑 잃어버리는 꿈", text: "지갑을 잃어버리거나 도둑맞는 꿈은 재물이나 신뢰 관계에서의 손실을 조심하라는 흉몽으로 해석돼요." },
  // 여행/이동
  { keywords: ["여행"], luck: "good", title: "여행 가는 꿈", text: "여행을 떠나는 꿈은 새로운 경험이나 변화, 자유로운 기회가 찾아온다는 길몽이에요." },
  { keywords: ["공항", "비행기를 타"], luck: "good", title: "공항/비행기 타는 꿈", text: "공항에서 비행기를 타는 꿈은 새로운 시작이나 도약을 앞두고 있다는 길몽이에요." },
  { keywords: ["엘리베이터"], luck: "neutral", title: "엘리베이터 꿈", text: "엘리베이터가 올라가는 꿈은 빠른 성취를, 내려가는 꿈은 일시적인 침체를 상징해요. 멈추는 꿈이라면 상황이 정체된 느낌을 반영해요." },
  { keywords: ["감옥", "갇히"], luck: "bad", title: "갇히는 꿈", text: "감옥에 갇히거나 좁은 공간에 갇히는 꿈은 현실에서 답답함이나 제약을 느끼고 있다는 흉몽으로 해석돼요." },
  // 자연/장소
  { keywords: ["폭포"], luck: "good", title: "폭포 꿈", text: "시원하게 쏟아지는 폭포를 보는 꿈은 막혔던 일이 시원하게 풀린다는 길몽이에요." },
  { keywords: ["우물"], luck: "good", title: "우물 꿈", text: "맑은 물이 가득한 우물을 보는 꿈은 재물운과 지혜가 함께 따르는 길몽이에요." },
  { keywords: ["온천", "목욕", "샤워"], luck: "good", title: "목욕/온천 꿈", text: "목욕이나 온천을 하는 꿈은 몸과 마음의 근심이 씻겨 나가고 재충전된다는 길몽이에요." },
  { keywords: ["섬"], luck: "neutral", title: "섬 꿈", text: "섬에 있는 꿈은 고립감이나 혼자만의 시간이 필요한 심리 상태를 반영하는 경우가 많아요." },
  { keywords: ["동굴"], luck: "neutral", title: "동굴 꿈", text: "동굴에 들어가는 꿈은 내면을 탐구하거나 잠시 숨어 지내고 싶은 마음을 상징해요." },
  // 우주/초자연
  { keywords: ["외계인", "ufo", "uso"], luck: "neutral", title: "외계인/UFO 꿈", text: "외계인이나 UFO가 나오는 꿈은 낯설고 예상치 못한 변화가 다가오고 있다는 신호로 해석돼요." },
  { keywords: ["우주", "별나라"], luck: "good", title: "우주 꿈", text: "우주를 여행하는 꿈은 시야가 넓어지고 큰 성취를 이룬다는 길몽이에요." },
  { keywords: ["초능력"], luck: "good", title: "초능력 꿈", text: "초능력을 쓰는 꿈은 스스로에 대한 자신감과 잠재력이 커지고 있다는 길몽이에요." },
  // 폭력/위협
  { keywords: ["칼에", "칼을 맞", "칼맞", "흉기", "찔리"], luck: "good", title: "칼에 찔리는 꿈", text: "칼이나 흉기에 찔리는 꿈은 무섭게 느껴지지만, 의외로 막힌 일이 뚫리고 재물운이 들어오는 길몽으로 해석되는 경우가 많아요." },
  { keywords: ["칼을", "칼로"], luck: "neutral", title: "칼 꿈", text: "칼을 쥐거나 사용하는 꿈은 문제를 스스로 해결하려는 결단력이나 날카로워진 판단력을 상징해요." },
  { keywords: ["총에", "총을 맞", "총소리"], luck: "bad", title: "총에 맞는 꿈", text: "총에 맞는 꿈은 갑작스러운 충격이나 상처받을 일을 조심하라는 흉몽으로 해석돼요." },
  { keywords: ["폭탄", "폭발"], luck: "neutral", title: "폭탄/폭발 꿈", text: "폭탄이 터지는 꿈은 억눌러온 감정이나 갈등이 한 번에 터져 나올 수 있는 상황을 암시해요." },
  { keywords: ["전쟁"], luck: "bad", title: "전쟁 꿈", text: "전쟁 꿈은 현실에서의 큰 갈등이나 경쟁, 스트레스 상황을 반영하는 흉몽으로 해석돼요." },
  { keywords: ["좀비"], luck: "bad", title: "좀비 꿈", text: "좀비에게 쫓기는 꿈은 벗어나고 싶은데 벗어나지 못하는 반복적인 스트레스 상황을 상징해요." },
  { keywords: ["유괴", "납치"], luck: "bad", title: "납치/유괴 꿈", text: "납치나 유괴당하는 꿈은 스스로 상황을 통제하지 못한다는 무력감을 반영하는 경우가 많아요." },
  { keywords: ["강도", "도둑이"], luck: "bad", title: "강도/도둑 꿈", text: "강도나 도둑이 드는 꿈은 재물이나 소중한 것을 잃을까 하는 불안, 혹은 실제 경계심 강화를 뜻해요." },
  { keywords: ["경찰"], luck: "neutral", title: "경찰 꿈", text: "경찰이 나오는 꿈은 스스로를 통제하거나 규칙을 지키려는 마음, 혹은 보호받고 싶은 심리를 상징해요." },
  // 실종/방향
  { keywords: ["미아", "길을 잃"], luck: "bad", title: "길을 잃는 꿈", text: "길을 잃거나 미아가 되는 꿈은 현재 방향성이나 목표에 대한 혼란을 느끼고 있다는 신호예요." },
  { keywords: ["실종"], luck: "bad", title: "실종 꿈", text: "누군가 실종되는 꿈은 그 사람과의 관계에 대한 불안이나 상실에 대한 두려움을 반영해요." },
  { keywords: ["갇혀서 못 나가", "문이 안 열리"], luck: "bad", title: "문이 안 열리는 꿈", text: "문이 열리지 않아 갇히는 꿈은 지금 상황에서 벗어나고 싶은데 뜻대로 안 되는 답답함을 상징해요." },
  // 출산/가족
  { keywords: ["출산"], luck: "good", title: "출산하는 꿈", text: "출산하는 꿈은 새로운 시작이나 결실을 맺는다는 대표적인 길몽이에요." },
  { keywords: ["유산", "낙태"], luck: "bad", title: "유산 꿈", text: "유산과 관련된 꿈은 실제 의미보다는 계획하던 일이 중단될까 봐 느끼는 불안을 반영하는 경우가 많아요." },
  { keywords: ["쌍둥이"], luck: "good", title: "쌍둥이 꿈", text: "쌍둥이가 나오는 꿈은 좋은 일이 두 배로 겹쳐서 찾아온다는 길몽이에요." },
  { keywords: ["부모님", "엄마가", "아빠가"], luck: "neutral", title: "부모님 꿈", text: "부모님이 나오는 꿈은 안정과 보호에 대한 그리움, 혹은 부모님과 관련된 걱정거리를 반영해요." },
  { keywords: ["형제", "자매", "남매"], luck: "neutral", title: "형제자매 꿈", text: "형제자매가 나오는 꿈은 가까운 사람과의 관계나 경쟁심, 협력에 대한 마음을 상징해요." },
  // 종교/영적
  { keywords: ["절에", "스님"], luck: "good", title: "절/스님 꿈", text: "절이나 스님이 나오는 꿈은 마음의 평안을 찾거나 좋은 조언을 얻는다는 길몽이에요." },
  { keywords: ["교회", "목사", "기도"], luck: "good", title: "교회/기도 꿈", text: "교회에서 기도하는 꿈은 마음의 안정과 소원 성취를 바라는 심리가 반영된 길몽으로 해석돼요." },
  { keywords: ["부적"], luck: "good", title: "부적 꿈", text: "부적을 받거나 지니는 꿈은 나쁜 기운을 막고 좋은 운이 따르는 길몽이에요." },
  // 장례/추모
  { keywords: ["무덤", "묘지"], luck: "neutral", title: "무덤 꿈", text: "무덤이나 묘지가 나오는 꿈은 과거를 정리하고 새로운 국면으로 넘어가려는 마음을 상징해요." },
  { keywords: ["관에"], luck: "good", title: "관 꿈", text: "관과 관련된 꿈은 불길해 보이지만 실제로는 묵은 일이 마무리되고 재물운이 따르는 길몽으로 해석돼요." },
  // 옷/치장
  { keywords: ["웨딩드레스"], luck: "good", title: "웨딩드레스 꿈", text: "웨딩드레스를 입는 꿈은 새로운 시작이나 인생의 중요한 전환점을 상징하는 길몽이에요." },
  { keywords: ["화장을", "메이크업"], luck: "neutral", title: "화장하는 꿈", text: "화장을 하는 꿈은 남에게 보이는 모습을 신경 쓰거나 자신을 꾸미고 싶은 마음을 반영해요." },
  { keywords: ["염색"], luck: "neutral", title: "염색하는 꿈", text: "머리를 염색하는 꿈은 이미지 변신이나 새로운 모습으로 거듭나고 싶은 마음을 상징해요." },
  { keywords: ["벗은", "알몸", "나체"], luck: "neutral", title: "벗은 꿈", text: "벗은 채로 있는 꿈은 스스로를 있는 그대로 드러내고 싶은 마음, 혹은 남에게 평가받는 것에 대한 불안을 동시에 상징해요." },
  // 계절/기념일
  { keywords: ["생일"], luck: "good", title: "생일 꿈", text: "생일과 관련된 꿈은 축하받을 좋은 일이 생기거나 새로운 시작을 맞이한다는 길몽이에요." },
  { keywords: ["크리스마스"], luck: "good", title: "크리스마스 꿈", text: "크리스마스 꿈은 따뜻한 인연이나 행복한 순간이 찾아온다는 길몽이에요." },
  { keywords: ["파티", "축제"], luck: "good", title: "파티/축제 꿈", text: "파티나 축제에 있는 꿈은 즐거운 일이 생기고 대인관계가 좋아진다는 길몽이에요." },
  { keywords: ["얼음", "빙판"], luck: "neutral", title: "얼음 꿈", text: "얼음이나 빙판이 나오는 꿈은 감정이 얼어붙었거나 조심스럽게 나아가야 할 상황을 상징해요." },
  { keywords: ["사막"], luck: "bad", title: "사막 꿈", text: "사막을 헤매는 꿈은 외로움이나 지친 마음, 메마른 감정 상태를 반영하는 흉몽으로 해석돼요." },
  { keywords: ["정글", "밀림"], luck: "neutral", title: "정글 꿈", text: "정글을 헤쳐나가는 꿈은 복잡하고 치열한 상황을 헤쳐나가고 있다는 것을 상징해요." },
];

const FALLBACK = {
  luck: "neutral",
  title: "알 수 없는 꿈",
  text: "아직 사전에 없는 상징의 꿈이네요. 꿈에서 느꼈던 감정(편안함/불안함)이 현재 마음 상태를 더 잘 보여주는 경우가 많아요. 조금 더 구체적인 키워드로 다시 적어보시면 더 정확히 풀이해드릴 수 있어요.",
};

const LUCK_LABEL = {
  good: "길몽",
  bad: "흉몽",
  neutral: "평몽",
};

function interpretDream(input) {
  const matched = [];
  for (const entry of DREAM_DICTIONARY) {
    if (entry.keywords.some((k) => input.includes(k))) {
      matched.push(entry);
    }
  }
  if (matched.length === 0) {
    return { ...FALLBACK, matchedKeywords: [] };
  }

  const luckCount = { good: 0, bad: 0, neutral: 0 };
  matched.forEach((m) => luckCount[m.luck]++);
  let overallLuck = "neutral";
  if (luckCount.good > luckCount.bad) overallLuck = "good";
  else if (luckCount.bad > luckCount.good) overallLuck = "bad";

  return {
    luck: overallLuck,
    title: matched.map((m) => m.title).join(" · "),
    text: matched.map((m) => m.text).join(" "),
    matchedKeywords: matched.flatMap((m) => m.keywords).filter((k, i, arr) => arr.indexOf(k) === i),
  };
}

function render(result) {
  const el = document.getElementById("result");
  const keywordsHtml = result.matchedKeywords && result.matchedKeywords.length
    ? `<div class="keywords">${result.matchedKeywords.map((k) => `<span>#${k}</span>`).join("")}</div>`
    : "";
  el.innerHTML = `
    <div class="result-card luck-${result.luck}">
      <div class="luck-tag">${LUCK_LABEL[result.luck]}</div>
      <h2>${result.title}</h2>
      <p>${result.text}</p>
      ${keywordsHtml}
      <div class="disclaimer">본 해몽은 전통적인 꿈 상징 풀이를 참고한 재미용 콘텐츠로, 실제 미래를 예측하지 않아요.</div>
    </div>
  `;
  el.style.display = "block";
  el.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

const SEARCH_STEPS = [
  "꿈 사전 검색하는 중",
  "비슷한 상징 대조하는 중",
  "길몽/흉몽 판별하는 중",
  "해몽 정리하는 중",
];

function renderLoading() {
  const el = document.getElementById("result");
  el.innerHTML = `
    <div class="loading-card">
      <div class="spinner"></div>
      <div class="loading-text" id="loadingText">${SEARCH_STEPS[0]}</div>
    </div>
  `;
  el.style.display = "block";
  el.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

document.getElementById("submitBtn").addEventListener("click", () => {
  const input = document.getElementById("dreamInput").value.trim();
  if (!input) {
    alert("오늘 꾼 꿈을 입력해주세요!");
    return;
  }

  const btn = document.getElementById("submitBtn");
  btn.disabled = true;
  renderLoading();

  let step = 0;
  const loadingTextEl = () => document.getElementById("loadingText");
  const stepTimer = setInterval(() => {
    step = (step + 1) % SEARCH_STEPS.length;
    const el = loadingTextEl();
    if (el) el.textContent = SEARCH_STEPS[step];
  }, 420);

  setTimeout(() => {
    clearInterval(stepTimer);
    const result = interpretDream(input);
    render(result);
    logDream(input, result);
    btn.disabled = false;
  }, 1500);
});

function logDream(dreamText, result) {
  fetch("/api/log-dream", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ dreamText, luck: result.luck, title: result.title }),
  }).catch(() => {});
}

document.getElementById("dreamInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
    document.getElementById("submitBtn").click();
  }
});

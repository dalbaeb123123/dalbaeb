 function generate() {
	var quotes = {
		"— Эрма Бомбек" : '"Надеюсь, что после смерти я встречусь с Богом. Предстану перед ним без таланта, и с чистой совестью сообщу Творцу: “Все, что ты подарил мне, я использовала”"',
		"— Альберт Эйнштейн" : '"Успех — инструмент, открывающий широкие перспективы. Не стремитесь к успеху, а стремитесь к тому, что он дает"',
		"— Христофор Колумб " : '"Вы никогда не переплывете океан, если не отчалите от берега"',
		"— Уолт Дисней" : '"Чтобы чего-то достичь, нужно перестать говорить и начать действовать"',
		"— Стив Джобс" : '"Жизнь — небольшой отрезок времени. Не стоит тратить это время на людей, которые осуждают ваши мечты и заставляют жить “правильно”"',
		"— Элеонора Рузвельт" : '"Будущее принадлежит тем, кто безусловно верит в свою мечту"',
		"— Опра Уинфри" : '"Глядя на то, что есть в жизни, увидите, что имеете больше, чем нужно. Глядя на то, чего у вас нет, вам всего всегда будет мало"',
		"— Джеймс Кэмерон " : '"Ставя перед собой нереальные цели, помните, что и провал будет грандиозным"',
		"— Джон Леннон" : '"Ставя перед собой нереальные цели, помните, что и провал будет грандиозным"',
		"— Мохан Дас Ганди" : '"Прежде чем изменить мир к лучшему, измените к лучшему себя"',
		"— Мэй Уэст " : '"Прежде чем изменить мир к лучшему, измените к лучшему себя"',
		"— Генри Форд" : '"Думаете, что можете? Вы правы. Думаете, что не можете? Вы правы. Только вы решаете свою судьбу"',
		"— Альфред Теннисон " : '"Лучше вкусить боль утраты любви, чем не любить вовсе"',
		"— Мать Тереза" : '"Распространяйте любовь везде, где бы не находились, куда бы не пошли. Пусть все, кто приходит к вам, уходят от вас счастливыми"',
		"— Фра́нклин Ру́звельт" : '"Когда доходите до конца веревки – завязывайте на ней узел и держитесь"',
		"— Маргарет Мид " : '"Помните! Вы уникальны. Как и все вокруг вас"',
		"— Роберт Льюис Стивенсон" : '"Не судите каждый день своей жизни по урожаю. А судите по семенам, которые сажаете"',
		"— Хелен Адамс Келлер" : '"Самые прекрасные вещи в мире нельзя увидеть или даже потрогать. Их нужно почувствовать сердцем"',
		"— Аристотель" : '"В самые темные моменты жизни необходимо научиться видеть свет"',
		"— Анна Франк" : '"Только счастливый человек может осчастливить всех вокруг себя"',
		"— Фридрих Ницше" : '", что нас не убивает, делает нас сильнее"',
		"— Денхолм Эллиотт" : '"Удивляйте себя каждый день собственной смелостью"',
		"— Джордж Конрад" : '"Мужество - это всего лишь совокупность маленьких шагов"',
		"— Дуэйн Джонсон" : '"Мне нравится использовать трудные времена из прошлого для мотивации себя сегодня"',
		"— Опра Уинфри" : '"Будьте благодарны за то, что у вас есть; в конечном итоге у вас будет больше. Если вы сосредоточитесь на том, чего у вас нет, вам всегда, всегда будет мало"',
		"— Амелия Эрхарт" : '"Самое трудное - это решение действовать, остальное - просто упорство"',
		"— Майкл Фелпс" : '"Возникнут препятствия. Найдутся сомневающиеся. Будут ошибки. Но для упорного труда нет пределов"',
		"— Бейб Рут" : '"Вы просто не сможете победить человека, который никогда не сдается"',
		"— Томас А. Эдисон" : '"Многие неудачники в жизни – это люди, которые не понимали, насколько близки они были к успеху, когда сдались"',
		"— Винс Ломбарди" : '"Дело не в том, собьют ли тебя с ног, а в том, встанешь ли ты"',
		"— Винсент Ван Гог" : '"Если вы слышите, как внутренний голос говорит вам: ”Ты не можешь рисовать", тогда во что бы то ни стало, рисуйте, и этот голос замолчит"',
		"— Генри Форд" : '"Когда кажется, что все идет против вас, помните, что самолет взлетает против ветра, а не вместе с ним"',
		"— Майя Анжелу" : '"Мы можем столкнуться со многими поражениями, но мы не должны быть побеждены"',
		"— Конфуций" : '"Наша величайшая заслуга не в том, чтобы никогда не падать, а в том, чтобы подниматься после каждого падения"',
		"— Нельсон Мандела" : '"Всё всегда кажется невозможным, пока не будет сделано"',
		"— Джим Рон" : '"Когда ты знаешь, чего хочешь, и хочешь этого достаточно сильно, ты найдешь способ получить это"',
		"— Джоэл Остин" : '"Вам предстоит пережить трудные времена – такова жизнь. Но я говорю: ”С вами ничего не происходит, это происходит для вас". Ищите позитивное в негативных событиях"',
		"— Хелен Келлер" : '"Оптимизм - это вера, которая ведет к достижениям. Ничто не может быть сделано без надежды и уверенности"',
		"— Тони Роббинс" : '"Каждая проблема - это подарок. Без проблем мы бы не росли"',
		"— Уэйн Дайер" : '"Всё - это либо возможность расти, либо препятствие, мешающее вам расти. У вас есть право выбора"',
		"— К.С. Льюис" : '"Трудности часто готовят обычных людей к необыкновенной судьбе"',
		"— Дейл Карнеги" : '"Большинство важных вещей в мире были достигнуты людьми, которые продолжали пытаться, когда казалось, что надежды нет вообще"',
		"— Теодор Рузвельт" : '"Поверьте, что вы сможете, и вы на полпути к цели"',
		"— Мартин Лютер Кинг-младший." : '"Мы должны смириться с конечным разочарованием, но мы никогда не должны терять бесконечную надежду"',
		"— Тич Нат Ханх" : '"Надежда важна, потому что она может сделать настоящий момент менее невыносимым. Если мы поверим, что завтра будет лучше, мы сможем вынести трудности сегодня"',
		"— Лерой Сэтчел Пейдж" : '"Никогда не опускай голову. Никогда не сдавайся, не садись и не горюй. Найди другой способ. И не молись, когда идет дождь, если ты не молишься, когда светит солнце"',
		"— Доу Зантамата" : '"Только в наши самые мрачные часы мы можем обнаружить истинную силу яркого света внутри нас самих, который никогда, ни за что нельзя затмить"',
		"— Роберт Шуллер" : '"Проблемы - это не стоп-сигналы, это указатели направления"',
		"— Кэндзи Миядзава" : '"Мы должны принять боль и сжечь ее, как топливо, для нашего путешествия"',
		"— Майкл Джордан" : '"Препятствия не должны останавливать вас. Если вы наткнетесь на стену, не разворачивайтесь и не сдавайтесь. Выясните, как на нее взобраться, пройти через нее или обойти ее"',
		"— Ивонн Пьер" : '"Используй то, через что ты прошел, как заряд, верь в себя и будь неудержим!"',
		"— Альберт Швейцер" : '"Иногда наш огонек гаснет, но снова вспыхивает мгновенным пламенем при встрече с другим человеческим существом"',
		"— Сара Эванс" : '"Всё не совсем так, как ты себе представлял, и ты думаешь, что это провал. А как насчет палитры оттенков между ними?"',
		"— Роберт Фрост" : '"Одной фразой я могу подытожить всё, что я узнал о жизни. Она продолжается"',
		"— Джеймс Аллен" : '"Сегодня вы там, куда привели вас ваши мысли; завтра вы будете там, куда приведут вас ваши мысли"',
		"— Малкольм С. Форбс" : '"Когда всё плохо, мы утешаемся мыслью о том, что всё могло бы быть еще хуже. И когда это так, мы находим надежду в мысли, что все настолько плохо, что должно стать только лучше"',
		"— Элеонора Рузвельт" : '"С новым днем приходят новые силы и новые мысли"',
		"— Джон Стюарт" : '"У каждого поколения свои трудности. И все быстро меняется, и жизнь становится лучше в одно мгновение."',
		"— Альберт Эйнштейн" : '"В сердце каждой трудности кроется возможность"',
		"— А.А. Милн" : '"Есть кое-что, о чем ты всегда должен помнить. Ты храбрее, чем подозреваешь, сильнее, чем кажешься, и умнее, чем ты думаешь"',
		"— Пауло Коэльо, ‘Пятая гора’" : '"Бывают моменты, когда в нашу жизнь входят неприятности, и мы ничего не можем сделать, чтобы избежать их. Но они существуют не просто так. Только когда мы преодолеем их, мы поймем, почему они там оказались"',
		"— Рой Т. Беннетт" : '"Одного слова ободрения может быть достаточно, чтобы пробудить в ком-то желание продолжать выполнение трудного задания"',
		"— Марджори Шиба" : '"Вся жизнь - это испытание, и у каждого из нас есть свои задачи, с которыми нужно справиться"',
		"— Мухаммед Али" : '"Внутри ринга или вне его, нет ничего плохого в том, чтобы упасть. Неправильно оставаться внизу"',
		"— Натан Чен" : '"Никогда не сдавайтесь. Трудные времена наступают всегда, независимо от того, чем вы занимаетесь в жизни. Сумейте пережить эти времена и достичь своей конечной цели"',
		"— Кэрри Фишер" : '"Переживание трудных ситуаций может многому научить вас, и они также заставляют вас ценить времена, которые не так трудны"',
		"— Кенджи Миядзава" : '"Мы должны принять боль и сжечь ее как топливо для нашего путешествия"',
		"— Дин Янг" : '"Ты начинаешь с тьмы, через которую нужно пройти, но иногда тьма проходит сквозь тебя"',
		"— Анураг Пракаш Рэй" : '"Трудные времена, возможно, иногда подавляли тебя, но они не будут длиться вечно. Когда все будет сказано и сделано, ты станешь мудрым и сильным"',
		"— Франц Фанон" : '"Говорить на иностранном языке значит завоевать его мир и культуру"',
		"— Эмиль Золя" : '"Ничто так не развивает ум, как путешествие"',
		"— Марк Твен" : '"Путешествовать необходимо тем, кто учится"',
		"— Рэй Брэдберри" : '"Посмотри на мир. Он куда удивительнее, чем сны"',
		"— Мэттью Карстен" : '"Инвестиции в поездки это инвестиции в себя"',
		"— Хеллен Келлер" : '"Жизнь – это либо отчаянное приключение, либо ничего"',
		"— Тим Кэхилл" : '"Дорога лучше всего измеряется не в милях, а в друзьях"',
		"— Ибн Баттута" : '"Путешествия лишают тебя дара речи, а потом превращают в лучшего рассказчика"',
		"— Билл Брайсон" : '"Как же я люблю чувствовать себя безликим в городе, где я раньше никогда не был"',
		"— Амин Маалуф" : '"Никогда не бойтесь уехать прочь от морей, границ, стран и мыслей"',
		"— Кейт Дуглас Уигген" : '"Есть в этом что-то волшебное: уезжаешь одним человеком, а возвращаешься совершенно другим"',
		"— Пьер Бернандо" : '"Путешествовать значит развиваться"',
		"— Майкл Пейлин." : '"Как только подхватываешь лихорадку путешественника, ты уже не можешь от нее излечиться и будешь заражен ей до конца жизни"',
		"— Др. Сьюз" : '"Ох, все те места, где ты побываешь!"',
		"— Лао Цзы" : '"У настоящего путешественника нет определенного плана и намерения куда-либо приехать"',
		"— Сьюзен Зонтаг" : '"Я не был везде, но это в моем списке"',
		"— Г. К. Честертон" : '"Путешественник видит то, что видит; туристы видят то, на что они приехали посмотреть"',
		"— Генри Миллер" : '"Цель – не место, а способность смотреть на мир по-другому"',
		"— Фитжугх Муллан" : '"Хватит думать о ямах на дороге, наслаждайся приключением"',
		"— Чиф Сиэтл" : '"Забирай только воспоминания, оставляй только следы"',
		"— Далай Лама" : '"Раз в году, посещай место, где ты никогда раньше не был"',
		"— Гейл Форман" : '"Путешествия это не то, в чем ты разбираешься. Это то, что ты делаешь"',
		"— Ханс Кристиан Андерсен" : '"Путешествовать – значит жить"',
		"— Олдос Хаксли" : '"Путешествовать – значит осознать, что все ошибаются насчет других стран"',
		"— Ст. Августин" : '"Мир – это книга, и те, кто не путешествуют, успевают прочесть лишь первую страницу"',
		"— Чезар Павезе" : '"Хотите путешествовать далеко и быстро? Путешествуйте налегке. Скиньте с себя зависть, нетерпимость, эгоизм и страхи"',
		"— Джеймс Болдуин" : '"Я встретил много людей в Европе. Я даже с собой познакомился"',
		"— Дж. Р. Толкин" : '"Не все, кто странствуют, сбились с пути"',
		"— Гюстав Флобер" : '"Путешествия помогают нам быть скромнее. Каждый из нас лишь крохотная песчинка в этой пустыне людей"',
		"— Андре Гайд" : '"Люди способны найти и познать себя лишь в приключениях"',
		"— Аноним" : '"Мы путешествуем не для того, чтобы сбежать от жизни, а для того, чтобы жизнь из нас не сбежала"',
		"— Пол Теру" : '"Туристы не знают, где они уже побывали, а путешественники не знают где они еще побывают"',
		"— Джон Стейнбек" : '"Не люди создают путешествия, а путешествия создают людей"',
		"— Марк Твен" : '"Предрассудки, нетерпимость и узколобость губительны для путешествий"',
		"— Аноним" : '"Путешествия – это единственная вещь на свете, покупая которую, становишься богаче"',
		"— Джеймс Миченер" : '"Если вы отказываетесь от еды, не чтите чужие традиции и религию и избегаете людей – лучше оставайтесь дома"',
		"— Мэри Энн Рэдмачер" : '"Я поменялась, увидев как сияет луна с другого берега"',
		"— Льюис Кэролл" : '"Если ты не знаешь куда идешь, любая дорога подойдет"',
		"— Лин Ютан" : '"Сложно осознать, насколько прекрасно путешествие до тех пор, пока не положишь голову на старую, знакомую подушку"',
		"— Мосли Еддин Саатан" : '"Путешественник без способности к наблюдению сравним с птицей без крыльев"',
		"— Норвежская пословица" : '"Лишь тот, кто странствует, открывает новые пути"',
		"— Ральф Уолдо Эмерсон" : '"Мы путешествуем по миру, чтобы найти красоту; мы должны хранить её в себе, иначе она нам не откроется"',
		"— Эндрю МакКарти" : '"Чем дальше я уезжаю, тем больше приближаюсь к себе"',
		"— Джудит Турман" : '"Каждый мечтатель знает, что абсолютно реально скучать по месту, где ты никогда не был даже больше, чем по тому, где был"',
		"— Джек Керуак" : '"Живи, путешествуй, не сожалей ни о чем и благодари судьбу"',
		"— Пенелопа Райли" : '"Важно не то, куда ты попадешь в конце, но какие приключения встретят тебя на этом пути"',
		"— Арабская пословица" : '"Тот, кто живет, видит много. Тот, кто путешествует, видит больше"',
		"— Паоло Коэльо" : '"Если вы думаете, что приключение опасно, попробуйте рутину. Она смертельна"',
		"— Бенжамин Дизраэли" : '"Путешествия учат толерантности"',
		"— Аристотель" : '"Приключение того стоит"'
	}
	
	var authors = Object.keys(quotes);
	var author = authors[Math.floor(Math.random()*authors.length)];
	var quote = quotes[author];
	document.getElementById("quote").innerHTML = quote;
	document.getElementById("author").innerHTML = author;
 }
var $table = $('#table3');
$(function () {
	var data = [
		{
			"author": "",
			"reference": "〈阿根廷魔幻寫實之父包赫士〉，《聯合文學》2卷10期",
			"year": "1986年8月"
		},
		{
			"author": "",
			"reference": "〈墨西哥小說家富恩斯特專輯〉，《聯合文學》，63期",
			"year": "民1990年1月"
		},
		{
			"author": "",
			"reference": "〈競選總統的小說家--秘魯大師馬里奧‧巴加斯‧略薩〉，《聯合文學》",
			"year": "1990年1月"
		},
		{
			"author": "王祥芸譯",
			"reference": "Lutchmansingh, Larry D.，〈陳福善的魔幻寫實主義〉，《雄師美術》，268期，77-83頁",
			"year": "1993年6月"
		},
		{
			"author": "朱景冬",
			"reference": "〈魔幻現實主義是什麼?〉，《聯合文學》107，178-179頁",
			"year": "1993年9月"
		},
		{
			"author": "朱景冬",
			"reference": "《馬爾克斯：魔幻現實主義巨擘》，長春市：長春出版社",
			"year": "1995年"
		},
		{
			"author": "朱景冬譯",
			"reference": "《科塔薩爾論科塔薩爾》，雲南：雲南人民出版社",
			"year": "1997年"
		},
		{
			"author": "吳吾、章平、宗仁發編",
			"reference": "《魔幻現實主義小說》，長春市：時代文藝出版社",
			"year": "1988年"
		},
		{
			"author": "林盛彬",
			"reference": "〈拉丁美洲文學的發展模式：從哥倫布到二十世紀初〉，《拉丁美洲研究》，265-288頁，台北：五南",
			"year": "2001年"
		},
		{
			"author": "波赫士",
			"reference": "《波赫士詩文集》，曹又方編選，台北：桂冠出版",
			"year": "1993年"
		},
		{
			"author": "柳鳴九主編",
			"reference": "《未來主義、超現實主義、魔幻現實主義》，台北：淑馨",
			"year": "1990年"
		},
		{
			"author": "柳鳴九主編",
			"reference": "《魔幻現實主義經典小說選》，太原：北岳文藝",
			"year": "1995年"
		},
		{
			"author": "段若川",
			"reference": "《安第斯山上的神鷹：諾貝爾獎與魔幻現實主義》，湖北：武漢出版社",
			"year": "2000年"
		},
		{
			"author": "迷走譯",
			"reference": "《拉美電影與社會變遷》台北：國家電影資料館",
			"year": "1996年"
		},
		{
			"author": "馬奎斯",
			"reference": "《百年孤寂》，楊耐冬譯，台北：志文出版",
			"year": "1984年"
		},
		{
			"author": "馬奎斯",
			"reference": "《馬奎斯小說傑作集》，楊耐冬譯，台北：志文出版",
			"year": "1983年"
		},
		{
			"author": "馬奎斯",
			"reference": "張清柏譯，《拉丁美洲短篇小說秀作選》，臺北：光復",
			"year": "1988年"
		},
		{
			"author": "馬相武、劉岳",
			"reference": "《拉丁美洲文學簡史》，海口：海口出版社",
			"year": "1993年"
		},
		{
			"author": "張淑英",
			"reference": "〈二十世紀拉丁美洲文學〉，《拉丁美洲研究》，台北：五南，289-320頁",
			"year": "2001年"
		},
		{
			"author": "張淑英",
			"reference": "〈孤寂百年的西語文學?─談西語文學之中文出版〉，《自由時報》，生活藝文周報自由評論版",
			"year": "1999年12月12日"
		},
		{
			"author": "張淑英",
			"reference": "〈拉丁美洲現代主義文學中的中國〉，《中外文學》，第29卷第2期，153-189頁",
			"year": "2000年7月"
		},
		{
			"author": "張淑英",
			"reference": "〈馬奎斯的歷史小說與小說中的歷史〉，《歷史月刊》，117期，128-138頁",
			"year": "1997年10月"
		},
		{
			"author": "張繼譯",
			"reference": "Marcuse, Herbert.著，《單向度的人：發達工業社會意識型態研究》，台北：桂冠",
			"year": "1990年"
		},
		{
			"author": "梁景峰",
			"reference": "〈拉丁美洲文學的探索〉，《臺灣文藝》，80期，56-61頁",
			"year": "1983年1月"
		},
		{
			"author": "陳正芳",
			"reference": "〈魔幻現實的性別越界：談依莎貝拉‧阿言德的《精靈之屋》〉，《世界文學》",
			"year": "2002年2月"
		},
		{
			"author": "陳眾議",
			"reference": "《南美的輝煌：魔幻現實主義文學》，海口市：海南出版社",
			"year": "1993年"
		},
		{
			"author": "陳儒修、廖金鳳譯",
			"reference": "《第三世界電影與西方》台北：國家電影資料館",
			"year": "1997年"
		},
		{
			"author": "萊瑞‧羅特著",
			"reference": "周婉窈譯，〈戰火連天的墨西哥文壇〉《聯合文學》56期，100-106頁",
			"year": "1989年6月"
		},
		{
			"author": "黃海雲",
			"reference": "《從浪漫到新浪漫》，台北：藝術家",
			"year": "1991年"
		},
		{
			"author": "楊耐冬",
			"reference": "〈從「獨裁者的秋天」談政治小說〉，《臺灣文藝》第89期，88-96頁",
			"year": "1984年7月"
		},
		{
			"author": "葉子啟譯",
			"reference": "《拉丁美洲短篇小說精選》，台北：圓神",
			"year": "1988年"
		},
		{
			"author": "葉曉芍",
			"reference": "〈巴爾蒂斯和魔幻寫實風格〉，《雄師美術》，294期，68-75頁",
			"year": "1995年8月"
		},
		{
			"author": "劉啟分",
			"reference": "〈墨西哥當代小說家馮狄士的小說世界〉，《成功大學學報（人文‧社會篇），21卷，17-32頁",
			"year": "1986年"
		},
		{
			"author": "潘亞墩",
			"reference": "〈馬森與馬奎斯〉，《聯合文學》72，156-161頁",
			"year": "1990年10月"
		},
		{
			"author": "潘亞墩譯",
			"reference": "〈古巴的魔幻與現實〉，《聯合文學》107，35頁",
			"year": "1993年9月"
		},
		{
			"author": "蔡東杰",
			"reference": "〈拉丁美洲民主化運動的回顧與前瞻〉，《拉丁美洲研究》，21-36頁，台北：五南",
			"year": "2001年"
		},
		{
			"author": "蔡源煌譯",
			"reference": "Meneses, Carlo訪談，〈魔幻‧現實‧拉丁美洲小說--秘魯小說家巴加斯‧略薩〉，《聯合文學》3卷5期，233-236頁",
			"year": "1987年2月"
		},
		{
			"author": "鄭樹森",
			"reference": "〈文學‧霸權‧拉丁美洲--富恩斯特談片〉，《聯合文學》，6卷3期",
			"year": "1990年9月"
		},
		{
			"author": "鄭樹森主編",
			"reference": "《當代拉丁美洲小說集》，台北：聯合文學",
			"year": "1987年"
		},
		{
			"author": "鄭樹森策劃",
			"reference": "〈孤獨的迷宮--墨西哥詩人帕斯專題〉，《聯合文學》，66期，90頁",
			"year": "1990年4月"
		},
		{
			"author": "鄧時中",
			"reference": "〈民族性的發掘、闡揚與批判-尋根小說與魔幻現實主義〉，《中國現代、當代文學研究》，73-78頁",
			"year": "1996年8月"
		},
		{
			"author": "錢競、劉雁濱譯",
			"reference": "Patricia Waugh著，《後設小說：自我意識小說的理論與實踐》，台北：駱駝",
			"year": "1995年"
		},
		{
			"author": "鍾斯、鍾斯譯",
			"reference": "〈巴爾加斯‧羅沙和他的作品「青樓」〉，《青樓》，台北：遠景",
			"year": "1986年"
		},
		{
			"author": "聶魯達作、趙振江譯",
			"reference": "〈拉丁美洲小說的出路〉，《聯合文學》3卷5期，237-238頁",
			"year": "1987年2月"
		}
	];
	$table.bootstrapTable({data: data});
}); 
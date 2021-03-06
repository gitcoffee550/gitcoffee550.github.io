var LOCALIZE = function(){ return {
'getCurrency' : function(){ return 'TWD'; },
'getCurrencyChar' : function(){ return 'NT$'; },
'getCurrencyDecimalCount' : function(){ return 0; },
'getCurrencyDecimalChar' : function(){ return '.'; },
'getCurrencyThousandChar' : function(){ return ','; },
'getCurrencyFormat' : function(price){ var _format_string = 'NT$%s'; return _format_string.replace('%s', money_format(price,0,'.',',')); }, 

		'convArguments' : function(){ 
			var msg=arguments[0];
			if (arguments[1].length>0){
				// REQUEST IN getLocalizeString
				if(arguments[1].length === 1 && typeof arguments[1][0] === 'object'){
					for(var i=1; i<=arguments[1][0].length; i++){
						msg = replaceAll(msg, '%'+i, arguments[1][0][i-1]);
						msg = replaceAll(msg, '％'+i, arguments[1][0][i-1]);
					}
				}else{
					for(var i=1; i<=arguments[1].length; i++){
						msg = replaceAll(msg, '%'+i, arguments[1][i-1]);
						msg = replaceAll(msg, '％'+i, arguments[1][i-1]);
					}
				}
			}; 
			return msg; 
		},
'테스트기창이' : function(){ return LOCALIZE.convArguments("테스트기창이", arguments); },
'타이틀_이름없는질문' : function(){ return LOCALIZE.convArguments("未命名問題", arguments); },
'설명_상품페이지이동불가안내' : function(){ return LOCALIZE.convArguments("找不到產品頁面。", arguments); },
'버튼_게시중' : function(){ return LOCALIZE.convArguments("上傳中", arguments); },
'설명_주문부터적용됩니다수정하시겠습니까' : function(){ return LOCALIZE.convArguments("주문부터 적용됩니다. 수정하시겠습니까?", arguments); },
'설명_기본배송지는삭제할수없습니다' : function(){ return LOCALIZE.convArguments("기본 배송지는 삭제할 수 없습니다.", arguments); },
'설명_최대n개선택' : function(){ return LOCALIZE.convArguments("최대 %1개 선택", arguments); },
'설명_정기결제해지를취소하시겠습니까' : function(){ return LOCALIZE.convArguments("정기결제 해지를 취소하시겠습니까?", arguments); },
'shopPayment_eInvoiceDonateToOptionCode88888' : function(){ return LOCALIZE.convArguments("財團法人中華民國兒童癌症基金會", arguments); },
'shopPayment_eInvoiceDonateToOptionCode555' : function(){ return LOCALIZE.convArguments("臺灣基督教門諾會醫療財團法人門諾醫院", arguments); },
'shopPayment_eInvoiceDonateToOptionCode52668' : function(){ return LOCALIZE.convArguments("社團法人臺北市支持流浪貓絕育計劃協會", arguments); },
'shopPayment_eInvoiceDonateToOptionCode8873' : function(){ return LOCALIZE.convArguments("社團法人台灣城鄉協力協會", arguments); },
'shopPayment_eInvoiceDonateToOptionCode785' : function(){ return LOCALIZE.convArguments("財團法人蒲公英希望基金會", arguments); },
'shopPayment_eInvoiceDonateToOptionCode8957282' : function(){ return LOCALIZE.convArguments("財團法人流浪動物之家基金會", arguments); },
'shopPayment_eInvoiceDonateToOptionCode858' : function(){ return LOCALIZE.convArguments("財團法人天主教失智老人社會福利基金會", arguments); },
'shopPayment_eInvoiceDonateToOptionCode11111' : function(){ return LOCALIZE.convArguments("財團法人國際單親兒童文教基金會", arguments); },
'shopPayment_eInvoiceDonateToOptionCode88432' : function(){ return LOCALIZE.convArguments("財團法人喜憨兒社會福利基金會", arguments); },
'shopPayment_eInvoiceDonateToOptionCode8835' : function(){ return LOCALIZE.convArguments("財團法人天主教善牧社會福利基金會", arguments); },
'shopPayment_eInvoiceDonateToOptionCode402' : function(){ return LOCALIZE.convArguments("財團法人中華民國自閉症基金會", arguments); },
'shopPaymentAlert_selectEInvoiceType' : function(){ return LOCALIZE.convArguments("請確認電子發票資訊。", arguments); },
'설명_내용을입력해주세요' : function(){ return LOCALIZE.convArguments("請輸入內容", arguments); },
'설명_선택한상품이없습니다' : function(){ return LOCALIZE.convArguments("선택한 상품이 없습니다", arguments); },
'버튼_정확도순' : function(){ return LOCALIZE.convArguments("準確度順序", arguments); },
'버튼_최신순' : function(){ return LOCALIZE.convArguments("最新順序", arguments); },
'설명_배송비금액이변경되었습니다' : function(){ return LOCALIZE.convArguments("已變更運費。適用的優惠券將初始化。", arguments); },
'설명_게시글차단안내' : function(){ return LOCALIZE.convArguments("確認要封鎖文章嗎？將無法查看作者的其他文章以及留言。", arguments); },
'설명_게시글차단해제안내' : function(){ return LOCALIZE.convArguments("確認要取消封鎖文章嗎？將可以查看作者的所有文章以及留言。", arguments); },
'설명_후기를삭제하시겠습니까' : function(){ return LOCALIZE.convArguments("確定要刪除評價嗎？", arguments); },
'타이틀_기본자간' : function(){ return LOCALIZE.convArguments("基本間距", arguments); },
'타이틀_자간' : function(){ return LOCALIZE.convArguments("間距", arguments); },
'버튼_이미지교체' : function(){ return LOCALIZE.convArguments("變更圖片", arguments); },
'설명_님을차단안내' : function(){ return LOCALIZE.convArguments("確定要封鎖留言嗎？將無法看到作者的其他留言。", arguments); },
'설명_님을차단해제안내' : function(){ return LOCALIZE.convArguments("確定要解除封鎖留言嗎？將會再次看到作者的其他留言。", arguments); },
'설명_차단기능횟수를초과했습니다' : function(){ return LOCALIZE.convArguments("超過可封鎖次數上限", arguments); },
'설명_검색어를입력하세요' : function(){ return LOCALIZE.convArguments("請輸入搜索詞", arguments); },
'설명_휴면상태로그아웃' : function(){ return LOCALIZE.convArguments("維持暫時停用狀態並登出。", arguments); },
'설명_휴면상태완료' : function(){ return LOCALIZE.convArguments("帳號已恢復正常使用。", arguments); },
'타이틀_접속량이많아연결이지연' : function(){ return LOCALIZE.convArguments("由於網站流量過大，導致連接速度延遲。", arguments); },
'타이틀_일시적인서비스장애' : function(){ return LOCALIZE.convArguments("暫時停止服務", arguments); },
'설명_죄송합니다서버에일시적인문제가생겨' : function(){ return LOCALIZE.convArguments("很抱歉，因伺服器發生暫時性問題，我們正在努力修復中。將會盡快恢復正常服務。", arguments); },
'설명_잠시후다시시도해주세요' : function(){ return LOCALIZE.convArguments("請稍後再進行嘗試。", arguments); },
'설명_비밀번호확인중입니다' : function(){ return LOCALIZE.convArguments("正在確認密碼中，請稍候。", arguments); },
'설명_업로드에실패하였습니다' : function(){ return LOCALIZE.convArguments("失敗上傳。", arguments); },
'설명_n기준n시부터n시사이에게시물작성이가능합니다' : function(){ return LOCALIZE.convArguments("%1標準可在%2~%3之間上傳文章。", arguments); },
'설명_다음예상결제일과에서확인가능' : function(){ return LOCALIZE.convArguments("* 다음 예상 결제일은 %1입니다.<br>* 구독 일정은 마이페이지 > 정기구독 관리에서 확인 가능합니다.", arguments); },
'버튼_등록하기' : function(){ return LOCALIZE.convArguments("등록하기", arguments); },
'설명_진행중인정기구독주문이있어카드삭제불가' : function(){ return LOCALIZE.convArguments("현재 진행 중인 정기구독 주문이 있어 카드를 삭제할 수 없습니다.<br/>카드 변경 혹은 정기구독 해지 후 카드를 삭제해 주세요.", arguments); },
'설명_등록된자동결제카드를삭제하시겠습니까' : function(){ return LOCALIZE.convArguments("등록된 자동결제 카드를 <br class=\'hidden-lg hidden-md hidden-sm\'/>삭제하시겠습니까?", arguments); },
'설명_이번배송을건너뛰겠습니까다음구독일은n입니다' : function(){ return LOCALIZE.convArguments("이번 배송을 건너뛰겠습니까?<br/>해당 상품의 다음 구독일은<br class=\'hidden-lg hidden-md\'/> <strong>%1</strong> 입니다.", arguments); },
'설명_이번배송을건너뛰겠습니까다음구독일은n입니다선택옵션도함께' : function(){ return LOCALIZE.convArguments("이번 배송을 건너뛰겠습니까?<br/>해당 상품의 다음 구독일은<br class=\'hidden-lg hidden-md\'/> <strong>%1</strong> 입니다.<br>선택옵션도 함께 적용됩니다.", arguments); },
'설명_전체상품의정기구독을해지하시겠습니까' : function(){ return LOCALIZE.convArguments("전체 상품의 정기구독을 <br class=\'hidden-lg hidden-md hidden-sm\'/>해지하시겠습니까?", arguments); },
'설명_해당상품의정기구독을해지하시겠습니까' : function(){ return LOCALIZE.convArguments("해당 상품의 정기구독을 <br class=\'hidden-lg hidden-md hidden-sm\'/>해지하시겠습니까?", arguments); },
'설명_해당상품의정기구독을해지하시겠습니까선택옵션도함께' : function(){ return LOCALIZE.convArguments("해당 상품의 정기구독을 <br class=\'hidden-lg hidden-md hidden-sm\'/>해지하시겠습니까?<br>선택옵션도 함께 해지됩니다.", arguments); },
'설명_타임세일종료까지n일' : function(){ return LOCALIZE.convArguments("限時優惠僅剩 %1天", arguments); },
'설명_상세페이지타임세일종료까지n일' : function(){ return LOCALIZE.convArguments("<label class=\'text-bold text-brand\'>限時優惠</label> 僅剩 <strong>%1天</strong>", arguments); },
'설명_종류까지n1시n2분n3초남음' : function(){ return LOCALIZE.convArguments("截止前 %1:%2:%3 ", arguments); },
'설명_상세페이지타임세일종료까지n1시n2분n3초남음' : function(){ return LOCALIZE.convArguments("<label class=\'text-bold text-brand\'>限時優惠</label> 截止前 <strong>%1:%2:%3</strong> ", arguments); },
'설명_상품할인금액' : function(){ return LOCALIZE.convArguments("商品優惠金額", arguments); },
'설명_만14세미만은가입이불가합니다오류' : function(){ return LOCALIZE.convArguments("14歲以下沒有資格註冊。請確認是否已年滿14歲。", arguments); },
'설명_결제예상금액임시' : function(){ return LOCALIZE.convArguments("商品總額（%1個）", arguments); },
'설명_배송지미선택미입력' : function(){ return LOCALIZE.convArguments("尚未選擇配送地址或尚未輸入配送地址資訊。", arguments); },
'설명_이용약관및개인정보처리방침및개인정보제3자동의' : function(){ return LOCALIZE.convArguments("統一使用條款及個人資料處理方針及向第三方提供個人資料才能進行註冊。", arguments); },
'설명_배송지를삭제하시겠습니까' : function(){ return LOCALIZE.convArguments("確認要刪除配送地址嗎？", arguments); },
'설명_추천인코드가복사되었습니다' : function(){ return LOCALIZE.convArguments("已複製推薦人代碼！", arguments); },
'설명_기부코드를체크해주세요' : function(){ return LOCALIZE.convArguments("기부코드를 체크 해 주세요.", arguments); },
'설명_n개띄어쓰기없음' : function(){ return LOCALIZE.convArguments("%1個", arguments); },
'설명_주문서가새로고침되었습니다' : function(){ return LOCALIZE.convArguments("訂單已被刷新", arguments); },
'설명_이전에입력한주문서정보를그대로유지하시겠습니까' : function(){ return LOCALIZE.convArguments("確認要保持之前輸入的訂單資訊嗎？", arguments); },
'설명_작성한내용이모두사라집니다' : function(){ return LOCALIZE.convArguments("填寫的所有內容將會被消失。您確認要結束登記嗎？", arguments); },
'설명_군' : function(){ return LOCALIZE.convArguments("區", arguments); },
'설명_성' : function(){ return LOCALIZE.convArguments("城市", arguments); },
'설명_지역' : function(){ return LOCALIZE.convArguments("地區", arguments); },
'설명_구역' : function(){ return LOCALIZE.convArguments("國家", arguments); },
'설명_다운로드불가안내' : function(){ return LOCALIZE.convArguments("無可下載的文件。請諮詢管理人。", arguments); },
'버튼_아이디찾기' : function(){ return LOCALIZE.convArguments("尋找帳戶", arguments); },
'설명_대표이미지삭제' : function(){ return LOCALIZE.convArguments("刪除代表圖片", arguments); },
'설명_비밀번호재설정링크유효기간만료' : function(){ return LOCALIZE.convArguments("重設密碼的連接已過期。請您再次使用找回密碼。", arguments); },
'설명_현시' : function(){ return LOCALIZE.convArguments("縣市", arguments); },
'설명_향진시구' : function(){ return LOCALIZE.convArguments("鄉、鎮、市、區", arguments); },
'설명_2단계인증을진행하지않으면로그인이불가능합니다' : function(){ return LOCALIZE.convArguments("若不進行2級憑證，不可登入。確定要停止憑證嗎？", arguments); },
'설명_인증번호를입력해주세요' : function(){ return LOCALIZE.convArguments("請輸入憑證號", arguments); },
'설명_인증이완료되었습니다' : function(){ return LOCALIZE.convArguments("已完成登入。", arguments); },
'설명_수취인이름을n글자이상입력해주세요' : function(){ return LOCALIZE.convArguments("請輸入%1個字以上的配送地址資訊中的收件人姓名", arguments); },
'설명_실시간계좌이체는Windows환경에서만지원합니다' : function(){ return LOCALIZE.convArguments("實時轉賬僅在Windows環境中支持。", arguments); },
'타이틀_반품신청을진행하시겠습니까' : function(){ return LOCALIZE.convArguments("確認要進行退貨申請嗎？", arguments); },
'타이틀_교환신청을진행하시겠습니까' : function(){ return LOCALIZE.convArguments("確定要進行換貨申請嗎？", arguments); },
'타이틀_교환비용결제를진행하시겠습니까' : function(){ return LOCALIZE.convArguments("確認要進行換貨費用支付嗎？", arguments); },
'타이틀_반품신청을철회하시겠습니까' : function(){ return LOCALIZE.convArguments("確認要撤回退貨申請嗎？", arguments); },
'타이틀_교환신청을철회하시겠습니까' : function(){ return LOCALIZE.convArguments("確認要撤回換貨申請嗎？", arguments); },
'타이틀_취소신청을철회하시겠습니까' : function(){ return LOCALIZE.convArguments("確認要撤回取消申請嗎？", arguments); },
'설명_주문번호혹은모드가없습니다' : function(){ return LOCALIZE.convArguments("無訂單號碼或模式。", arguments); },
'설명_현금영수증신청이완료되었습니다' : function(){ return LOCALIZE.convArguments("已完成申請現金發票", arguments); },
'설명_대표' : function(){ return LOCALIZE.convArguments("代表", arguments); },
'설명_링크' : function(){ return LOCALIZE.convArguments("連結", arguments); },
'설명_가입중단경고' : function(){ return LOCALIZE.convArguments("填完追加資訊中的必填項目才能完成註冊。您確定要停止註冊嗎？", arguments); },
'버튼_게시물접근권한없음' : function(){ return LOCALIZE.convArguments("無權限查看此文章。請詢問網站管理人。", arguments); },
'설명_일요일약자' : function(){ return LOCALIZE.convArguments("天", arguments); },
'설명_월요일약자' : function(){ return LOCALIZE.convArguments("一", arguments); },
'설명_화요일약자' : function(){ return LOCALIZE.convArguments("二", arguments); },
'설명_수요일약자' : function(){ return LOCALIZE.convArguments("三", arguments); },
'설명_목요일약자' : function(){ return LOCALIZE.convArguments("四", arguments); },
'설명_금요일약자' : function(){ return LOCALIZE.convArguments("五", arguments); },
'설명_토요일약자' : function(){ return LOCALIZE.convArguments("六", arguments); },
'설명_URL입력' : function(){ return LOCALIZE.convArguments("輸入URL", arguments); },
'설명_즐겨찾기등록키안내' : function(){ return LOCALIZE.convArguments("您可以按％1來註冊您的收藏夾。", arguments); },
'설명_해당옵션필수입니다' : function(){ return LOCALIZE.convArguments("必填項目", arguments); },
'타이틀_PC모드로보기' : function(){ return LOCALIZE.convArguments("觀看PC版本", arguments); },
'타이틀_모바일모드로보기' : function(){ return LOCALIZE.convArguments("觀看手機版本", arguments); },
'설명_이미지등록실패' : function(){ return LOCALIZE.convArguments("失敗登記%1圖片", arguments); },
'안드로이드_서비스이용불가' : function(){ return LOCALIZE.convArguments("目前因檢查系統無法使用服務。請稍後再試。", arguments); },
'설명_게시물을불러오는데에실패하였습니다' : function(){ return LOCALIZE.convArguments("失敗引入公告板。", arguments); },
'설명_구매가능회원이아닙니다' : function(){ return LOCALIZE.convArguments("該會員不允許購買。", arguments); },
'설명_다운로드만료안내' : function(){ return LOCALIZE.convArguments("超過可下載的期限或次數。請重新購買後在試一遍。", arguments); },
'설명_n원' : function(){ return LOCALIZE.convArguments("%1NTD", arguments); },
'설명_인증메일발송완료' : function(){ return LOCALIZE.convArguments("已發送憑證郵件。", arguments); },
'설명_가입승인되지않은아이디입니다' : function(){ return LOCALIZE.convArguments("等待確認註冊。得到管理人的確認後能開始使用。", arguments); },
'설명_회원등급할인' : function(){ return LOCALIZE.convArguments("會員等級優惠", arguments); },
'설명_결제예상금액' : function(){ return LOCALIZE.convArguments("商品總額（%1個）", arguments); },
'설명_기기의위치정보검색실패' : function(){ return LOCALIZE.convArguments("失敗搜尋機器的定位資訊。請確認定收集定位設置。", arguments); },
'타이틀_s회원가' : function(){ return LOCALIZE.convArguments("%1會員價", arguments); },
'타이틀_회원할인금액' : function(){ return LOCALIZE.convArguments("會員折扣", arguments); },
'설명_현재재고부족으로N개이상구매할수없습니다' : function(){ return LOCALIZE.convArguments("因目前庫存不足,不能購買%1個以上。", arguments); },
'설명_결제시간이초과되었습니다' : function(){ return LOCALIZE.convArguments("加載時間過長，請刷新再試。", arguments); },
'설명_0원상품갯수제한' : function(){ return LOCALIZE.convArguments("該選項可按商品購買數量購買。（例如：購買5件本商品時，該選項最多可購買5件）", arguments); },
'설명_해당선택옵션은최대N개까지구매가능합니다' : function(){ return LOCALIZE.convArguments("該選項最多可購買%1件", arguments); },
'설명_디지털상품은수량을변경하실수없습니다' : function(){ return LOCALIZE.convArguments("數碼商品不能變更數量。", arguments); },
'설명_공유에실패하였습니다' : function(){ return LOCALIZE.convArguments("分享失敗。", arguments); },
'설명_삭제하시겠습니까삭제후재등록불가' : function(){ return LOCALIZE.convArguments("確定要刪除此評價嗎？ （刪除後不能再次投交。）", arguments); },
'설명_최대이미지크기안내' : function(){ return LOCALIZE.convArguments("只能上傳%1x%2以下的圖片。", arguments); },
'설명_도로명지번을검색해주세요' : function(){ return LOCALIZE.convArguments("請搜索街道名稱。", arguments); },
'설명_장소를수정할수없습니다' : function(){ return LOCALIZE.convArguments("無法編輯地點。", arguments); },
'설명_최대N개만구매가능한상품입니다' : function(){ return LOCALIZE.convArguments("最多只能購買%1個的商品。", arguments); },
'설명_최대구매수량' : function(){ return LOCALIZE.convArguments("最大可購買數量為%1。", arguments); },
'설명_macOS에서ISP결제' : function(){ return LOCALIZE.convArguments("macOS에서는 ISP결제(KB국민, BC, 우리, 저축은행, 전북, 수협, 제주 카드)를 지원하지 않습니다. \n해당 카드로 결제하시려면 모바일로 결제해 주시기 바랍니다.", arguments); },
'설명_최대n개까지선택가능합니다' : function(){ return LOCALIZE.convArguments("最多可以選%1個。", arguments); },
'설명_숨기시겠습니까' : function(){ return LOCALIZE.convArguments("您確定要隱藏嗎？", arguments); },
'설명_개인정보제3자제공에동의하여주시기바랍니다' : function(){ return LOCALIZE.convArguments("請同意向第三方提供個人資料。", arguments); },
'버튼_복사' : function(){ return LOCALIZE.convArguments("複製", arguments); },
'설명_URL을길게누르면복사할수있습니다' : function(){ return LOCALIZE.convArguments("長按URL能進行複製。", arguments); },
'설명_URL이복사되었습니다' : function(){ return LOCALIZE.convArguments("URL已被復制。", arguments); },
'설명_신고가성공적으로접수되었습니다' : function(){ return LOCALIZE.convArguments("已成功提交檢舉。", arguments); },
'타이틀_글쓰기카테고리선택' : function(){ return LOCALIZE.convArguments("類別", arguments); },
'타이틀_주문취소를진행하시겠습니까' : function(){ return LOCALIZE.convArguments("確定要進行取消訂單嗎？", arguments); },
'타이틀_예약취소를진행하시겠습니까' : function(){ return LOCALIZE.convArguments("確定要進行取消預訂嗎？", arguments); },
'설명_사이트관리자설정에의해차단된콘텐츠입니다' : function(){ return LOCALIZE.convArguments("因網站管理者設定而阻止的內容。", arguments); },
'버튼_파일첨부_최대nMB' : function(){ return LOCALIZE.convArguments("附加文件（最大%1MB）", arguments); },
'설명_이미지업로드URL이비어있습니다' : function(){ return LOCALIZE.convArguments("圖片上傳網址為空。", arguments); },
'설명_파일업로드URL이비어있습니다' : function(){ return LOCALIZE.convArguments("文件上傳網址為空。", arguments); },
'설명_파일리스트를확인하세요' : function(){ return LOCALIZE.convArguments("查詢文件列表。", arguments); },
'설명_드래그업로드는지원하지않습니다' : function(){ return LOCALIZE.convArguments("不支持拖放上傳。", arguments); },
'설명_이미지복사붙여넣기기능은지원하지않습니다' : function(){ return LOCALIZE.convArguments("不支持圖像的複製粘貼功能。", arguments); },
'버튼_가로구분선만' : function(){ return LOCALIZE.convArguments("僅限於橫線", arguments); },
'버튼_테두리없음' : function(){ return LOCALIZE.convArguments("無邊框", arguments); },
'버튼_테두리진하게' : function(){ return LOCALIZE.convArguments("邊框加粗", arguments); },
'버튼_Hover효과행단위' : function(){ return LOCALIZE.convArguments("Hover效果(行單位)", arguments); },
'버튼_테이블헤더음영' : function(){ return LOCALIZE.convArguments("標頭陰影", arguments); },
'버튼_줄무늬행' : function(){ return LOCALIZE.convArguments("條紋行", arguments); },
'버튼_모바일에서표형식무시' : function(){ return LOCALIZE.convArguments("手機上忽略表格格式", arguments); },
'버튼_반응형테이블' : function(){ return LOCALIZE.convArguments("響應式表格", arguments); },
'버튼_기본버튼' : function(){ return LOCALIZE.convArguments("一般按鈕", arguments); },
'버튼_강조버튼' : function(){ return LOCALIZE.convArguments("強調按鈕", arguments); },
'설명_최소이미지크기안내' : function(){ return LOCALIZE.convArguments("您可以上傳至少%1 x %2的圖像。", arguments); },
'설명_작성하신대로접수하시겠습니까' : function(){ return LOCALIZE.convArguments("確定要提交您所填寫的內容嗎？", arguments); },
'설명_네이버페이를계속해서진행하시겠습니까' : function(){ return LOCALIZE.convArguments("您確定要繼續進行Npay付款嗎？", arguments); },
'버튼_네이버' : function(){ return LOCALIZE.convArguments("NAVER", arguments); },
'설명_거리주소' : function(){ return LOCALIZE.convArguments("詳細地址（街道名，公司名稱）", arguments); },
'설명_건물명' : function(){ return LOCALIZE.convArguments("公寓,套房,單位,建築,樓層等", arguments); },
'설명_도시명' : function(){ return LOCALIZE.convArguments("區", arguments); },
'설명_도시군' : function(){ return LOCALIZE.convArguments("城市", arguments); },
'설명_주문하실상품을선택해주세요' : function(){ return LOCALIZE.convArguments("請選擇要購買的商品。", arguments); },
'설명_테스트결제메시지_이니시스' : function(){ return LOCALIZE.convArguments("현재 테스트 결제 상태입니다.\nKG 이니시스의 경우엔 주문 하신 후 일정시간이 지나면 자동으로 취소 처리가 됩니다.", arguments); },
'설명_페이지를벗어나시겠습니까' : function(){ return LOCALIZE.convArguments("確定要離開此頁面嗎？", arguments); },
'설명_국가선택' : function(){ return LOCALIZE.convArguments("選擇國家", arguments); },
'설명_오전' : function(){ return LOCALIZE.convArguments("上午", arguments); },
'설명_오후' : function(){ return LOCALIZE.convArguments("下午", arguments); },
'설명_최대업로드용량안내_게시판' : function(){ return LOCALIZE.convArguments("最大可上傳100MB。", arguments); },
'설명_우편번호' : function(){ return LOCALIZE.convArguments("郵遞區號", arguments); },
'설명_첨부된이미지가없습니다' : function(){ return LOCALIZE.convArguments("無附加圖片。", arguments); },
'타이틀_대표이미지설정' : function(){ return LOCALIZE.convArguments("封面圖像設置", arguments); },
'타이틀_년' : function(){ return LOCALIZE.convArguments("年", arguments); },
'타이틀_월' : function(){ return LOCALIZE.convArguments("月", arguments); },
'타이틀_일' : function(){ return LOCALIZE.convArguments("天", arguments); },
'설명_성공' : function(){ return LOCALIZE.convArguments("成功", arguments); },
'설명_취소되었습니다' : function(){ return LOCALIZE.convArguments("已被取消。", arguments); },
'설명_취소요청이접수되었습니다' : function(){ return LOCALIZE.convArguments("已受理取消申請。", arguments); },
'설명_가입승인이필요합니다' : function(){ return LOCALIZE.convArguments("需要註冊認可。", arguments); },
'설명_비밀글입니다' : function(){ return LOCALIZE.convArguments("這是秘密留言。", arguments); },
'설명_주소장소를검색해주세요' : function(){ return LOCALIZE.convArguments("請搜索地址，地點。", arguments); },
'설명_주소검색버튼을눌러주세요' : function(){ return LOCALIZE.convArguments("請通過點擊地址搜索按鈕進行註冊。", arguments); },
'설명_검색결과가존재하지않습니다' : function(){ return LOCALIZE.convArguments("沒有搜索結果。", arguments); },
'설명_삭제하시겠습니까' : function(){ return LOCALIZE.convArguments("你確定要刪除嗎？", arguments); },
'설명_위치정보검색에문제가있습니다' : function(){ return LOCALIZE.convArguments("您的地址資訊搜索存在問題。", arguments); },
'설명_위치정보검색을허용해주세요' : function(){ return LOCALIZE.convArguments("請同意位置資訊搜索。", arguments); },
'설명_위치정보를검색하지못했습니다' : function(){ return LOCALIZE.convArguments("無法確定您的位置。請啓動位置集合功能。", arguments); },
'설명_위치정보검색시간을초과하였습니다' : function(){ return LOCALIZE.convArguments("您的位置資訊搜索時間已超出。", arguments); },
'설명_위치검색이지원되지않는브라우져입니다' : function(){ return LOCALIZE.convArguments("該瀏覽器不支持位置搜索。", arguments); },
'설명_작성시등록하신비밀번호를입력해주세요' : function(){ return LOCALIZE.convArguments("填寫時請輸入您所登記的密碼。", arguments); },
'설명_테스트결제메시지' : function(){ return LOCALIZE.convArguments("您目前使用的是試驗版。即使在試驗版訂購也不會實際收費及訂購。", arguments); },
'설명_접근권한이없습니다' : function(){ return LOCALIZE.convArguments("沒有訪問權限。", arguments); },
'설명_최대업로드용량안내' : function(){ return LOCALIZE.convArguments("最多能上傳50MB。", arguments); },
'설명_네이버페이찜등록실패' : function(){ return LOCALIZE.convArguments("네이버페이 찜등록 실패 (%1)", arguments); },
'설명_네이버페이상품구매실패' : function(){ return LOCALIZE.convArguments("아직 네이버페이 심사가 진행중(ERR-OR-000001)이거나 연동 오류입니다. (%1)", arguments); },
'설명_올바른전화번호를입력하세요' : function(){ return LOCALIZE.convArguments("請輸入一個有效的電話號碼。", arguments); },
'버튼_계속' : function(){ return LOCALIZE.convArguments("繼續", arguments); },
'설명_비밀번호변경이완료되었습니다' : function(){ return LOCALIZE.convArguments("已成功更改您的密碼", arguments); },
'설명_동일한암호로입력하시기바랍니다' : function(){ return LOCALIZE.convArguments("請輸入相同的密碼。", arguments); },
'설명_정상적인암호로입력하시기바랍니다' : function(){ return LOCALIZE.convArguments("請輸入正確密碼。（4個字符以上）", arguments); },
'설명_변경가능시간을초과하였습니다' : function(){ return LOCALIZE.convArguments("已超出可變更時間。", arguments); },
'설명_비밀번호를입력하세요' : function(){ return LOCALIZE.convArguments("請輸入您的密碼。", arguments); },
'설명_동의해주세요' : function(){ return LOCALIZE.convArguments("同意使用政策及隱私權政策才能註冊。", arguments); },
'설명_주소를입력하세요' : function(){ return LOCALIZE.convArguments("請輸入您的地址", arguments); },
'설명_이미신청중입니다잠시후다시시도하여주시기바랍니다' : function(){ return LOCALIZE.convArguments("已在申請中。 請稍後再試。", arguments); },
'설명_거리순정렬이지원되지않습니다' : function(){ return LOCALIZE.convArguments("不支持按距離排序。", arguments); },
'버튼_상세보기' : function(){ return LOCALIZE.convArguments("了解更多", arguments); },
'설명_생성된그룹이없습니다' : function(){ return LOCALIZE.convArguments("暫無生成組合", arguments); },
'설명_가입되어있지않습니다' : function(){ return LOCALIZE.convArguments("未註冊", arguments); },
'설명_개인통관고유부호' : function(){ return LOCALIZE.convArguments("根據韓國法律，部分海外配送物品需要個人清關認證碼。 請輸入海关簽發的個人清關認證碼。", arguments); },
'타이틀_취소환불규정에대한동의를해주세요' : function(){ return LOCALIZE.convArguments("請同意取消/退款政策", arguments); },
'설명_배송지주소City를입력해주세요' : function(){ return LOCALIZE.convArguments("請輸入您的送貨地址（區）", arguments); },
'설명_배송지주소State를입력해주세요' : function(){ return LOCALIZE.convArguments("請輸入配送地址（城市）", arguments); },
'설명_배송지주소Building를입력해주세요' : function(){ return LOCALIZE.convArguments("請輸入您的送貨地址（樓層）", arguments); },
'설명_배송지주소Street를입력해주세요' : function(){ return LOCALIZE.convArguments("請輸入街道地址（街名）", arguments); },
'설명_배송지주소ZipCode를입력해주세요' : function(){ return LOCALIZE.convArguments("請輸入收貨地址（郵編號）", arguments); },
'설명_주문자이름을입력해주세요' : function(){ return LOCALIZE.convArguments("請輸入買家姓名", arguments); },
'설명_주문자연락처를입력해주세요' : function(){ return LOCALIZE.convArguments("請輸入買家的電話號碼", arguments); },
'설명_이메일을입력해주세요' : function(){ return LOCALIZE.convArguments("請輸入您的電子郵件", arguments); },
'설명_배송지이름을입력해주세요' : function(){ return LOCALIZE.convArguments("請輸入收貨點名稱", arguments); },
'설명_배송지연락처를입력해주세요' : function(){ return LOCALIZE.convArguments("請輸入收件人聯繫方式", arguments); },
'설명_개인통관고유부호를입력해주세요' : function(){ return LOCALIZE.convArguments("請輸入個人清關認證碼", arguments); },
'설명_배송지주소를입력해주세요' : function(){ return LOCALIZE.convArguments("請輸入收貨地址", arguments); },
'설명_수량' : function(){ return LOCALIZE.convArguments("數量", arguments); },
'설명_원' : function(){ return LOCALIZE.convArguments("NTD", arguments); },
'버튼_저장' : function(){ return LOCALIZE.convArguments("儲存", arguments); },
'설명_그룹없음' : function(){ return LOCALIZE.convArguments("暫無羣組", arguments); },
'설명_로그인' : function(){ return LOCALIZE.convArguments("登入", arguments); },
'버튼_삭제' : function(){ return LOCALIZE.convArguments("刪除", arguments); },
'버튼_알림' : function(){ return LOCALIZE.convArguments("發送通知", arguments); },
'버튼_이미지첨부' : function(){ return LOCALIZE.convArguments("附加圖片", arguments); },
'버튼_확인' : function(){ return LOCALIZE.convArguments("確認", arguments); },
'버튼_닫기' : function(){ return LOCALIZE.convArguments("關閉", arguments); },
'버튼_카카오톡' : function(){ return LOCALIZE.convArguments("카카오톡", arguments); },
'버튼_카카오스토리' : function(){ return LOCALIZE.convArguments("카카오스토리", arguments); },
'버튼_라인' : function(){ return LOCALIZE.convArguments("Line", arguments); },
'버튼_밴드' : function(){ return LOCALIZE.convArguments("밴드", arguments); },
'버튼_페이스북' : function(){ return LOCALIZE.convArguments("Facebook", arguments); },
'버튼_트위터' : function(){ return LOCALIZE.convArguments("Twitter", arguments); },
'버튼_인스타그램' : function(){ return LOCALIZE.convArguments("Instagram", arguments); },
'버튼_공유하기' : function(){ return LOCALIZE.convArguments("分享", arguments); },
'설명_카카오톡공유는모바일에서만지원합니다' : function(){ return LOCALIZE.convArguments("카카오톡 공유는 모바일에서만 지원합니다.", arguments); },
'설명_라인공유는모바일에서만지원합니다' : function(){ return LOCALIZE.convArguments("只在手機上支持LINE分享。", arguments); },
'설명_필수옵션이모두선택되어있지않습니다' : function(){ return LOCALIZE.convArguments("未選中所需選項。未選擇所有的必要選項。", arguments); },
'설명_잘못된접근입니다' : function(){ return LOCALIZE.convArguments("無效的訪問。", arguments); },
'버튼_메뉴더보기' : function(){ return LOCALIZE.convArguments("展開", arguments); },
'설명_비회원예약안내' : function(){ return LOCALIZE.convArguments("非會員可用預訂編號（%1）和預約者的電話號碼（%2）來查詢預訂。", arguments); },
'설명_선택한항목이없습니다' : function(){ return LOCALIZE.convArguments("沒有已選的項目", arguments); },
'설명_작성권한이없습니다' : function(){ return LOCALIZE.convArguments("沒有製作權限", arguments); },
'버튼_더보기' : function(){ return LOCALIZE.convArguments("更多", arguments); },
'설명_권한이_없습니다' : function(){ return LOCALIZE.convArguments("沒有權限。", arguments); },
'설명_로그인이_필요합니다' : function(){ return LOCALIZE.convArguments("需要登入。", arguments); },
'설명_내용을_입력해주세요' : function(){ return LOCALIZE.convArguments("請輸入內容", arguments); },
'설명_삭제된_댓글_입니다' : function(){ return LOCALIZE.convArguments("已刪除的回覆。", arguments); },
'설명_비밀번호' : function(){ return LOCALIZE.convArguments("密碼", arguments); },
'설명_정상적으로접수되었습니다' : function(){ return LOCALIZE.convArguments("已成功受理。", arguments); },
'버튼_취소' : function(){ return LOCALIZE.convArguments("取消", arguments); },
'버튼_응답수정' : function(){ return LOCALIZE.convArguments("修改回答", arguments); },
'버튼_로그인' : function(){ return LOCALIZE.convArguments("登入", arguments); },
'설명_개인정보처리방침에동의하여주시기바랍니다' : function(){ return LOCALIZE.convArguments("請同意個人資料收集及使用。", arguments); },
'설명_가입승인이_필요한_서비스입니다' : function(){ return LOCALIZE.convArguments("該服務需要確認註冊。", arguments); },
'설명_필수항목을입력하여주시기바랍니다' : function(){ return LOCALIZE.convArguments("請填寫必填項目。", arguments); },
'설명_상세내용이있는경우만입력' : function(){ return LOCALIZE.convArguments("請在有詳細內容的情況下輸入", arguments); },
'타이틀_하루종일' : function(){ return LOCALIZE.convArguments("整天", arguments); },
'설명_비밀번호를_입력해주세요' : function(){ return LOCALIZE.convArguments("請輸入密碼", arguments); },
'설명_검색결과가없습니다' : function(){ return LOCALIZE.convArguments("沒有搜索結果。", arguments); },
'타이틀_장바구니' : function(){ return LOCALIZE.convArguments("購物車", arguments); },
'설명_이메일' : function(){ return LOCALIZE.convArguments("電子郵件", arguments); },
'설명_주소' : function(){ return LOCALIZE.convArguments("地址", arguments); },
'설명_상세주소' : function(){ return LOCALIZE.convArguments("詳細地址", arguments); },
'버튼_확인닫기' : function(){ return LOCALIZE.convArguments("確認", arguments); },
'타이틀_수량' : function(){ return LOCALIZE.convArguments("數量", arguments); },
'설명_품절' : function(){ return LOCALIZE.convArguments("斷貨", arguments); },
'버튼_주문하기' : function(){ return LOCALIZE.convArguments("立即購買", arguments); },
'설명_장바구니가비어있습니다' : function(){ return LOCALIZE.convArguments("您的購物車是空的。", arguments); },
'타이틀_총수량' : function(){ return LOCALIZE.convArguments("總數量<em class=\"text-brand\">%1</em>個", arguments); },
'타이틀_총금액' : function(){ return LOCALIZE.convArguments("總額", arguments); },
'설명_이미선택된옵션입니다' : function(){ return LOCALIZE.convArguments("已被選擇的選項。", arguments); },
'설명_택배사또는송장번호가입력되지않았습니다' : function(){ return LOCALIZE.convArguments("未輸入物流公司或運單號碼。", arguments); },
'설명_택배사배송정보가업데이트중이거나정보가정확하지않습니다' : function(){ return LOCALIZE.convArguments("物流公司配送資訊正在更新或者資訊不準確。", arguments); },
'타이틀_반품교환' : function(){ return LOCALIZE.convArguments("退貨/換貨", arguments); },
'설명_취소내역이없습니다' : function(){ return LOCALIZE.convArguments("沒有取消歷史。", arguments); },
'설명_주문내역이없습니다' : function(){ return LOCALIZE.convArguments("沒有訂單歷史。", arguments); },
'설명_해당일정을삭제하시겠습니까' : function(){ return LOCALIZE.convArguments("確定要刪除日程嗎？", arguments); },

}}();
'use strict';


$(function(){

  /*=================================================
  スムーススクロール
  ===================================================*/
    // hrefの値が"#"で始まるaタグをクリックした時に動作する
    // リンクを取得
  $('a[href^="#"]').click(function(){
    //$('a[href^="#"]')のhref属性の値を取得。
    let href= $(this).attr("href"); 
    // ジャンプ先のid名をセット
    let target = $(href == "#" || href == "" ? 'html' : href);  
    // トップからジャンプ先(target)の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う
    $("html, body").animate({scrollTop:position}, 600, "swing");
    // デフォルトのイベントを無効化。
    return false;
  });

  
  /*===============================================
  スクロールするとボタンが現れる
  トップへ戻るとボタンが隠れる
  ===============================================*/
  let windowTarget = $(window);
  let pageTop = $('#page_top');

  // ウィンドウをスクロールしたとき
  windowTarget.scroll(function () {
    // トップから200以上スクロールしたら
    if (windowTarget.scrollTop() > 200){
      // #page_topにappearクラス付与。
      pageTop.removeClass('hide');
      pageTop.addClass('appear');
      // トップから200以上スクロールしていない時、
    } else if (pageTop.hasClass('appear')) {
      // かつ、もし既にappearクラスが付与されていたら
        // #page_topのappearクラス消去。
        pageTop.removeClass('appear');
        // #page_topにhideクラス付与。
        pageTop.addClass('hide');
    }
  }); 

  /*===============================================
  ボタンクリックでページトップに戻る
  ===============================================*/
  // #page_topをクリックしたとき
  pageTop.click(function () {
    // ブラウザ全体をトップから0の位置へスクロール。
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    //親要素イベント伝播の無効化。
    return false; 
  });

  /*===============================================
  ラジオボタンを2度クリックで選択解除
  ===============================================*/
  let input = $('input[name=work]');
  // 変数nowcheckedに、チェック済みのラジオボタンの値を代入
  let nowchecked = $('input[name=work]').filter(':checked').val();

  input.click(function(){
    //2回目にクリックした時
    // inputの値と、チェック済みインプットの値が一致すれば
    if(input.val() == nowchecked) {
      //inputのチェックを外し
      input.prop('checked', false);
      //チェック済みだったラジオボタンのチェックを外す
      nowchecked = false;
    } else {
      //1回目にクリックした時
      //チェック済みラジオボタンとinputの値を同じにする。
      nowchecked = input.val();
    }
  });

});



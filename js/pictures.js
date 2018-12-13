'use strict';

    var COMMENTS = ['Всё отлично!' , 'В целом всё неплохо. Но не всё.' ,' Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.' ,
      'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.' ,
      'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.' ,
      'Лица у людей на фотке перекошены, как будто их избивают.' , 'Как можно было поймать такой неудачный момент?!'];
        var DESCRIPTIONS = ['Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят', 'Отдыхаем...', 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами...', 'Вот это тачка!'];
        var NAMES = ['Михаил', 'Юлия', 'Иван', 'Лариса', 'Эмилия', 'Артём', 'Анна', 'Артур', 'Елизавета', 'Алексей'];

    function createRandomComments(){
        var comments = [];
        var randomNumber = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
        var name = NAMES[Math.floor(Math.random() * NAMES.length)];
        for (var i = 0; i <= randomNumber; i++){
            var randIndex = Math.floor(Math.random() * COMMENTS.length);
            comments[i] = COMMENTS[randIndex];
        }
    var  ObjectComments = {
            numberComments : randomNumber + 1,
            message : comments,
            nameUser : name
        };
        return ObjectComments;
    }
    createRandomComments();

    function createArray(){
        var pictures = [];
        for(var i=0; i<=24; i++){
            var dataComments = createRandomComments();
            var like = Math.floor(Math.random() * (200 - 15 + 1)) + 15 ;
            var description = DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)];
            pictures. push({'url':'photos/' +(i + 1) + '.jpg','likes': like, 'comments' : dataComments, 'description': description});
        }
        return pictures;
    }


    var dataArray = createArray();

    function fillingTemplate(args){
        var userData = args;
        var userTemplatePicture = document.querySelector('#picture').cloneNode(true);
        var picture = userTemplatePicture.content.querySelector('.picture');

        var fragment = document.createDocumentFragment();

        for(var i = 0; i<=24; i++){
            picture.querySelector('.picture__img').src = userData[i].url;
            picture.querySelector('.picture__likes').textContent = userData[i].likes;
            picture.querySelector('.picture__comments').textContent = userData[i].comments.numberComments;
            fragment.appendChild(picture.cloneNode(true));
        }
        var userPicture = document.querySelector('.pictures');
        userPicture.appendChild(fragment);
    }

    function createBigPicture(args){
        var dataPicture = args;
        var bigPicture = document.querySelector('.big-picture');
        bigPicture.classList.remove('hidden');

        bigPicture.querySelector('.big-picture__img').src = dataPicture[0].url;
        bigPicture.querySelector('.likes-count').textContent = dataPicture[0].likes;
        bigPicture.querySelector('.comments-count').textContent = dataPicture[0].comments.numberComments;

        var listComments = bigPicture.querySelector('.social__comments').cloneNode(true);
        for (var i =0; i <= dataPicture.numberComments; i++){
        listComments.querySelector('.social-picture').src = 'img/avatar-' +  Math.floor(Math.random() * (6 - 1 + 1)) + 1 + '.svg';
        listComments.querySelector('.social__text').textContent = dataPicture[i].comments.message[i];
        bigPicture.appendChild(listComments.cloneNode(true));
        }
        bigPicture.querySelector('.social__caption').textContent = dataPicture[0].description;
        bigPicture.querySelector('.social__comment-count').classList.add('.visually-hidden');
        bigPicture.querySelector('.comments-loader').classList.add('.visually-hidden');


      }
        fillingTemplate(dataArray);




         function loadingPicture(){
           var controlLoad = document.querySelector('#upload-file');
           var formPicture = document.querySelector('.img-upload__overlay ');
           var closeButton = document.querySelector('#upload-cancel');

           controlLoad.addEventListener('change', function(){
            formPicture.classList.remove('hidden');
          });
          closeButton.addEventListener('click', function(){
            formPicture.classList.add('hidden');
          });
          document.addEventListener('keydown', function(evt){
          if(evt.keyCode === 27) {
            formPicture.classList.add('hidden');
          }
          });
         };
         loadingPicture();

         function overlayEffects(){
           var button = document.querySelectorAll('.effects__item');
           var preview = document.querySelector('.img-upload__preview');
          var сhangeEffects = function(evt){
            var firstElement = preview.classList[0];
            preview.classList.remove(firstElement);
            var effectElement = evt.currentTarget.lastElementChild.lastElementChild;
            var effect = effectElement.classList[1];
            preview.classList.add(effect);
            console.log(effect);
}
           for (var i=0; i<button.length; i++){
             button[i].addEventListener('click', сhangeEffects);
             button[i].addEventListener('keydown', function(evt){
              if(evt.keyCode === 13) {
                changeEffects;
              }
            })
          }
        }
overlayEffects();
function showBigPicture(){
  var picturesContainer = document.querySelector('.pictures');
  var userPicture = document.querySelectorAll('a');
  var bigPicture = document.querySelector('.big-picture');
  for(var i=0; i<userPicture.length; i++){
    userPicture[i].addEventListener('click', function(){
     bigPicture.classList.remove('hidden');
    })
  };
}
showBigPicture();



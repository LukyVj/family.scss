'use strict';

window.onload = function(){
  childManager()
  childIndex();
  modalizer();
  mixPattern(50);
}

document.getElementById('pattern').onclick = function(){
  mixPattern(50)
}

function mixPattern(num) {

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var pattern = document.getElementById('pattern');
  pattern.innerHTML = '';

  for (var i = 0; i < num; i++) {
    var item = document.createElement('span');
    item.classList.add('ball');
    pattern.appendChild(item)
  }

  var pItems = pattern.children;

  for (var i = 0; i < pItems.length; i++ ) {
    position(pItems[i])
  }

  function position(el){
    var py = getRandomInt(1, 100);
    var px = getRandomInt(1, 100);
    var size = getRandomInt(1, 100);
    var blur = getRandomInt(1,5);

    el.style.width = size + 'px';
    el.style.height = size + 'px';
    el.style.top = py + '%';
    el.style.left = px  + '%';
    el.style.webkitFilter = 'blur('+blur  + 'px)';
    el.style.filter = 'blur('+blur + 'px)';
  }
}


// Generate li incrementer
function childManager(){
  var families = document.querySelectorAll('.doc ul');
  var controlTpl = `<button class="add-item btn btn-blue w-icon">add child <svg><use xlink:href="#icon-add"></use></svg></button> <button class="remove-item btn btn-blue w-icon">remove child <svg><use xlink:href="#icon-remove"></use></svg></button>`;
  var orderTpl = `<button class="btn btn-blue w-icon" data-state-a="current direction\: forward" data-state-b="current direction\: backward" data-state></button>`;

  for ( var i = 0; i < families.length; i++) {
    addControls(families[i], i);
  }

  function addControls(set, num) {
    var controls = document.createElement('div');
    var controlsId = "controls-" + num;

    if(set.getAttribute('data-controls') == 'order') {
      controls.id = 'order-' + controlsId;
      controls.innerHTML = orderTpl;
      set.parentNode.children[0].appendChild(controls)
    } else {
      controls.id = controlsId;
      controls.innerHTML = controlTpl;
      set.parentNode.children[0].appendChild(controls)
    }
    performControls(controlsId, num)
  }

  function performControls(id, num) {
    if(document.querySelector('[id="controls-'+i+'"]')) {
      var add = document.querySelector('#'+id+' .add-item') || false;
      var remove = document.querySelector('#'+id+' .remove-item') || false;

      add.addEventListener('click', function(){
        var familyClass = this.parentNode.parentNode.parentNode.children[2].className;
        var item = document.createElement('li');
        document.querySelector('.'+familyClass).appendChild(item)
        childNum(familyClass);
      })

      remove.addEventListener('click', function(){
        var familyClass = this.parentNode.parentNode.parentNode.children[2].className;
        var familyList = document.querySelector('.'+familyClass);
        var lastItem = familyList.lastElementChild;
        familyList.removeChild(lastItem)
        childNum(familyClass);
      })
    }
  }

  function childNum(listId) {
    var lists = document.querySelectorAll('div > ul.'+listId);

    for (var i = 0; i < lists.length; i++) {
      giveIds(lists[i])
    }

    function giveIds(list) {
      var childsLength  = list.children.length;
      list.lastElementChild.textContent = childsLength
    }
  }

  addState()
}


// Controls for the child-index property demo
function childIndex(){
  var item = document.querySelector('ul.child-index');
  var button = item.parentNode.children[0].children[2].children[0];
  button.addEventListener('click', function(){
    var v = this.textContent;
    if ( v == 'current direction: forward') {
      indexem(item, 'forward')
    } else {
      indexem(item, 'backward')
    }

    function indexem(parent, direction) {
      var children = parent.children;
      var styleHolder = document.querySelector('#style-child-index');
      styleHolder.innerHTML = 'ul.child-index li{ z-index: 0}';

      for ( var i = 0; i < children.length; i++) {
        applyIndex(children[i], direction, i)
      }

      function applyIndex(el, dir, id) {
        var z = window.getComputedStyle(el,null).getPropertyValue('z-index');
        var id = parseInt(id) + 1;
        if( dir == 'forward' ) {
          document.querySelector('#demo-index').innerHTML = 'forward'
          styleHolder.innerHTML += `
ul.child-index li:nth-child(${id}){ z-index: ${id} !important;}`;
        } else {
          document.querySelector('#demo-index').innerHTML = 'backward'
          styleHolder.innerHTML += `
ul.child-index li:nth-last-child(${id}){ z-index: ${id} !important;}`;
        }
      }
    }
  })
}


// Used for the "Child-Index()" demo
// To indicate which direction is defined
function addState() {
  var hasState = document.querySelectorAll('[data-state]');

  for ( var i = 0; i < hasState.length; i++ ) {
    writeState(hasState[i])
  }

  function writeState(el) {
    var stateA = el.getAttribute('data-state-a');
    var stateB = el.getAttribute('data-state-b');

    el.innerHTML = stateA + '<svg><use xlink:href="#icon-arrow-right"></use></svg>';

    el.addEventListener('click', function(){
      var str = el.textContent;
      if ( str == stateA ) {
        el.innerHTML = stateB + '<svg><use xlink:href="#icon-arrow-left"></use></svg>'
      } else {
        el.innerHTML = stateA + '<svg><use xlink:href="#icon-arrow-right"></use></svg>'
      }
    })
  }
};


// Simple modal toggler
function modalizer() {
  var trigger = document.querySelector('[data-toggle-modal]');
  var modal = document.querySelector('#about');
  var backdropModal = document.querySelector('.modal-backdrop');
  var closeModal = document.getElementById('close');
  trigger.addEventListener('click', function(){
    modal.classList.toggle('display');
    backdropModal.classList.toggle('display');
  });
  closeModal.addEventListener('click', function(){
    modal.classList.remove('display');
    backdropModal.classList.remove('display');
  })
}



window.addEventListener('DOMContentLoaded',function(){
  var search = document.querySelector('.searchbox input'),
  projectNames = document.querySelectorAll('.mixin h3'),
  projectDescriptions = document.querySelectorAll('.mixin'),
  clearButton = document.querySelector('.searchbox #clear');

  clearButton.addEventListener('click', function(){
    clearSearch()
  })


  function clearSearch() {
    for (var i = 0; i < projectNames.length; i++) {
      projectNames[i].parentNode.parentNode.classList.remove('hidden');
    }
  }
});


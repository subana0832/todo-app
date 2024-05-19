// このアプリのソースコードを読んでいますね。
// 正しい判断です。
// でも、全てを知りたいなら、ここだけでは足りません。
void function(){
  var _s=localStorage,_k='_sealed',_d='_dc',_r='_route',_t='tasks';
  if(_s.getItem(_k)==='true'){
    // sealed: remove cursed tasks on first load
    var _raw=_s.getItem(_t);
    if(_raw){try{var _p=JSON.parse(_raw);
    var _f=_p.filter(function(t){return['\u3046\u3057\u308d','\u307f\u3066\u308b','\u3044\u308b\u3088','\u7e3a\uff64\u7e3a\u4e5d\u222a\u7e3a\u533b\u25c6\u7e3a\uff64\u7e3a\u4e5d\u222a\u7e3a\u533b\u25c6\u7e3a\uff64\u7e3a\u4e5d\u222a\u7e3a\u533b\u25c6\u7e3a\uff64\u7e3a\u4e5d\u222a\u7e3a\u533b\u25c6\u7e3a\uff64\u7e3a\u4e5d\u222a\u7e3a\u533b\u25c6'].indexOf(t)<0});
    if(_f.length!==_p.length)_s.setItem(_t,JSON.stringify(_f))}catch(e){}}
    return;
  }

  // inject styles
  var _css=document.createElement('style');
  _css.textContent=[
    '._s1 .task-text{color:#aa0000}',
    '._s2 .task-text{color:#880000}',
    '._s3 .task-text{color:#880000;font-weight:bold}',
    '._sk{animation:_sk .5s ease-in-out}',
    '@keyframes _sk{0%,100%{transform:translateX(0)}10%,30%,50%,70%,90%{transform:translateX(-3px)}20%,40%,60%,80%{transform:translateX(3px)}}',
    '._ov{position:fixed;top:0;left:0;width:100%;height:100%;z-index:9998;cursor:wait}',
    '._ov._h{display:none}',
    '._gl{animation:_gl .3s infinite}',
    '@keyframes _gl{0%{transform:translate(0);filter:none}20%{transform:translate(-2px,1px);filter:hue-rotate(90deg)}40%{transform:translate(2px,-1px);filter:hue-rotate(180deg) saturate(2)}60%{transform:translate(-1px,2px);filter:hue-rotate(270deg) invert(.2)}80%{transform:translate(1px,-2px);filter:hue-rotate(360deg)}100%{transform:translate(0);filter:none}}',
    '._cs{position:fixed;top:0;left:0;width:100%;height:100%;background:#fff;z-index:9999;display:flex;align-items:center;justify-content:center}',
    '._cs._h{display:none}',
    '._ct{font-size:18px;color:#333;opacity:0;animation:_fi 1s ease forwards}',
    '@keyframes _fi{from{opacity:0}to{opacity:1}}',
    '._rf{animation:_rf .3s ease}',
    '@keyframes _rf{0%{background:inherit}50%{background:rgba(255,0,0,.15)}100%{background:inherit}}',
    '._wf{animation:_wf .5s ease}',
    '@keyframes _wf{0%{background:inherit}50%{background:rgba(255,255,255,.9)}100%{background:inherit}}',
    '._fo{opacity:0;transition:opacity 1s ease}',
    '._mc{filter:grayscale(100%)}',
    '._mm{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);font-size:14px;color:rgba(100,100,100,.3);pointer-events:none;z-index:200;animation:_fs 3s ease forwards}',
    '@keyframes _fs{0%{opacity:0}20%{opacity:1}80%{opacity:1}100%{opacity:0}}',
    '._tm{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);font-size:16px;color:rgba(100,100,100,.4);pointer-events:none;z-index:200;animation:_fs 3s ease forwards;white-space:pre-line;text-align:center}',
    '._hh{color:transparent;transition:color .3s;cursor:default}',
    '._hh:hover{color:#aa0000}'
  ].join('\n');
  document.head.appendChild(_css);

  // inject overlay + crash screen
  var _ov=document.createElement('div');
  _ov.className='_ov _h';
  var _cs=document.createElement('div');
  _cs.className='_cs _h';
  _cs.innerHTML='<div class="_ct">\u3042\u306a\u305f\u3082\u53d6\u308a\u8fbc\u307e\u308c\u307e\u3057\u305f</div>';

  function _dr(fn){if(document.readyState!=='loading')fn();else document.addEventListener('DOMContentLoaded',fn)}

  _dr(function(){
    document.body.appendChild(_ov);
    document.body.appendChild(_cs);
  });

  var _dc=parseInt(_s.getItem(_d)||'0');
  var _stg=[
    {t:'\u3046\u3057\u308d',w:1500,c:'_s1'},
    {t:'\u307f\u3066\u308b',w:1000,c:'_s2'},
    {t:'\u3044\u308b\u3088',w:500,c:'_s3'},
    {t:'\u7e3a\uff64\u7e3a\u4e5d\u222a\u7e3a\u533b\u25c6\u7e3a\uff64\u7e3a\u4e5d\u222a\u7e3a\u533b\u25c6\u7e3a\uff64\u7e3a\u4e5d\u222a\u7e3a\u533b\u25c6\u7e3a\uff64\u7e3a\u4e5d\u222a\u7e3a\u533b\u25c6\u7e3a\uff64\u7e3a\u4e5d\u222a\u7e3a\u533b\u25c6',w:0,c:'_s3'}
  ];
  var _cur=['\u3046\u3057\u308d','\u307f\u3066\u308b','\u3044\u308b\u3088','\u7e3a\uff64\u7e3a\u4e5d\u222a\u7e3a\u533b\u25c6\u7e3a\uff64\u7e3a\u4e5d\u222a\u7e3a\u533b\u25c6\u7e3a\uff64\u7e3a\u4e5d\u222a\u7e3a\u533b\u25c6\u7e3a\uff64\u7e3a\u4e5d\u222a\u7e3a\u533b\u25c6\u7e3a\uff64\u7e3a\u4e5d\u222a\u7e3a\u533b\u25c6'];

  var _seq=[];
  var _fw=['\u3060\u308c\uff1f','\u307f\u3066\u308b','\u3046\u3057\u308d'];
  var _rv=['\u3046\u3057\u308d','\u307f\u3066\u308b','\u3060\u308c\uff1f'];
  var _all=_fw.concat(_rv);

  function _app(){return window._todo}

  function _crash(){
    _ov.classList.remove('_h');
    setTimeout(function(){document.body.classList.add('_gl')},1000);
    setTimeout(function(){
      document.body.classList.remove('_gl');
      _cs.classList.remove('_h');
    },2000);
    setTimeout(function(){
      _s.setItem(_d,'0');
      _s.removeItem(_t);
    },3000);
  }

  function _handleDel(text,li,idx){
    if(_cur.indexOf(text)<0)return false;
    _dc++;_s.setItem(_d,_dc);
    if(_dc>=5){_crash();return true}

    li.style.opacity='0';
    var a=_app();if(!a)return true;
    var ts=a.tasks;

    setTimeout(function(){
      ts.splice(idx,1);a.saveTasks();a.renderAll();
      var sg=_stg[Math.min(_dc-1,_stg.length-1)];
      setTimeout(function(){
        if(_dc>=2)ts.unshift(sg.t);else ts.push(sg.t);
        a.saveTasks();a.renderAll();
        if(_dc>=3){document.body.style.background='#111';document.body.style.color='#ccc'}
        if(sg.c){
          var items=document.getElementById('taskList').querySelectorAll('.task-item');
          items.forEach(function(el){
            var tx=el.querySelector('.task-text');
            if(tx&&_cur.indexOf(tx.textContent)>=0)el.classList.add(sg.c);
          });
        }
      },sg.w);
    },300);
    return true;
  }

  function _special(text){
    var a=_app();if(!a)return false;
    var ts=a.tasks;
    var tl=document.getElementById('taskList');

    if(text==='\u52a9\u3051\u3066'){
      document.body.classList.add('_rf');
      setTimeout(function(){document.body.classList.remove('_rf')},300);
      ts.push('\u52a9\u3051\u3066');a.saveTasks();a.renderAll();
      setTimeout(function(){
        var i=ts.indexOf('\u52a9\u3051\u3066');
        if(i>=0){ts.splice(i,1);ts.push('\u3082\u3046\u9045\u3044');a.saveTasks();a.renderAll()}
      },3000);
      return true;
    }
    if(text==='\u3084\u3081\u308d'){
      var items=tl.querySelectorAll('.task-item');
      items.forEach(function(el){el.style.opacity='0'});
      setTimeout(function(){
        items.forEach(function(el){el.style.opacity='1'});
        var ui=ts.indexOf('\u3046\u3057\u308d');
        if(ui>=0){
          ts[ui]='\u3084\u3081\u306a\u3044';a.saveTasks();a.renderAll();
          setTimeout(function(){
            var yi=ts.indexOf('\u3084\u3081\u306a\u3044');
            if(yi>=0){ts[yi]='\u3046\u3057\u308d';a.saveTasks();a.renderAll()}
          },1500);
        }
      },500);
      return true;
    }
    if(text==='\u60a0\u5e0c'){
      ts.push('\u2588\u2588\u2588\u2588\u2588\u2588');a.saveTasks();a.renderAll();
      setTimeout(function(){
        var items=tl.querySelectorAll('.task-item');
        var last=items[items.length-1];
        if(last){
          var sp=last.querySelector('.task-text');
          sp.className='task-text _hh';
          sp.addEventListener('mouseenter',function(){this.textContent='\u3082\u3046\u3044\u306a\u3044';this.style.color='#aa0000'});
          sp.addEventListener('mouseleave',function(){this.textContent='\u2588\u2588\u2588\u2588\u2588\u2588';this.style.color='transparent'});
        }
      },100);
      return true;
    }
    if(text==='\u30aa\u30de\u30a8\u30ce\u30a6\u30b7\u30ed'){
      document.body.classList.add('_gl');
      setTimeout(function(){document.body.classList.remove('_gl')},2000);
      console.log('%c\u7e67\uff6a\u7e5d\u69ed\u304a\u7e5d\u5f31\u3048\u7e67\uff77\u7e5d\uff6d','color:#aa0000;font-size:20px;font-weight:bold');
      console.log('%c\u3042\u306a\u305f\u306f\u540d\u524d\u3092\u547c\u3093\u3067\u3057\u307e\u3044\u307e\u3057\u305f\u3002','color:#aa0000;font-size:12px');
      return true;
    }
    return false;
  }

  function _seqStep(last){
    var a=_app();if(!a)return;
    var ts=a.tasks;
    var tl=document.getElementById('taskList');

    if(_seq.length===1&&last===_fw[0]){
      setTimeout(function(){
        var i=ts.lastIndexOf(_fw[0]);
        if(i>=0){ts[i]='...'+_fw[0];a.saveTasks();a.renderAll()}
        document.body.style.background=document.body.classList.contains('dark-mode')?'#151515':'#eaeaea';
      },2000);
    }
    if(_seq.length===2&&_seq[0]===_fw[0]&&last===_fw[1]){
      setTimeout(function(){
        var i=ts.lastIndexOf(_fw[1]);
        if(i>=0){ts[i]='\u307f\u3089\u308c\u3066\u308b';a.saveTasks();a.renderAll()}
        document.body.classList.add('_rf');
        setTimeout(function(){document.body.classList.remove('_rf')},300);
      },1000);
    }
    if(_seq.length===1&&last===_rv[0]){
      var items=tl.querySelectorAll('.task-item');
      items.forEach(function(el){
        var tx=el.querySelector('.task-text');
        if(tx&&tx.textContent===_rv[0]){
          el.classList.add('_sk');
          setTimeout(function(){el.classList.remove('_sk')},500);
        }
      });
      document.body.style.background='';
    }
    if(_seq.length===2&&_seq[0]===_rv[0]&&last===_rv[1]){
      document.body.style.background=document.body.classList.contains('dark-mode')?'#222':'#fafafa';
      setTimeout(function(){
        var i=ts.lastIndexOf(_rv[1]);
        if(i>=0){ts[i]='\u307f\u3066\u3066\u304f\u308c\u305f\u306e\uff1f';a.saveTasks();a.renderAll()}
      },1000);
    }
  }

  function _routeA(){
    var a=_app();if(!a)return;
    var h1=document.querySelector('h1');
    document.body.classList.add('_gl');
    setTimeout(function(){h1.textContent='\u30df\u30c4\u30b1\u30bf';h1.style.color='#aa0000'},1000);
    setTimeout(function(){document.body.classList.remove('_gl');document.getElementById('taskList').innerHTML=''},2000);
    setTimeout(function(){location.href='.internal/.cache/.system/.core/_final.html?route=invited'},3000);
  }

  function _routeB(){
    var a=_app();if(!a)return;
    var tl=document.getElementById('taskList');
    document.body.classList.add('_wf');
    setTimeout(function(){document.body.classList.remove('_wf')},500);
    setTimeout(function(){
      tl.querySelectorAll('.task-item').forEach(function(el){el.classList.add('_fo')});
    },500);
    setTimeout(function(){
      var m=document.createElement('div');m.className='_tm';m.textContent='\u3060\u308c\u3060\u3063\u3051\uff1f\n\u5fd8\u308c\u3061\u3083\u3063\u305f\u3051\u3069\u3082\u3046\u3044\u3044\u3084';
      document.body.appendChild(m);
    },2500);
    setTimeout(function(){location.href='.internal/.cache/.system/.core/_final.html?route=sealed'},5000);
  }

  function _checkSeq(text){
    if(_all.indexOf(text)<0){_seq=[];return}

    _seq.push(text);
    var isFw=_seq.every(function(w,i){return w===_fw[i]});
    var isRv=_seq.every(function(w,i){return w===_rv[i]});

    if(!isFw&&!isRv){
      _seq=[text];
      isFw=text===_fw[0];
      isRv=text===_rv[0];
      if(!isFw&&!isRv){_seq=[];return}
    }

    if(isFw&&_seq.length===3){_s.setItem(_r,'invited');_routeA();return}
    if(isRv&&_seq.length===3){_s.setItem(_r,'sealed');_s.setItem(_k,'true');_routeB();return}

    _seqStep(text);
  }

  // Intercept events via capture phase
  _dr(function(){
    var addBtn=document.getElementById('addBtn');
    var taskInput=document.getElementById('taskInput');
    var taskList=document.getElementById('taskList');
    var dmToggle=document.getElementById('darkModeToggle');

    function _intercept(e){
      var text=taskInput.value.trim();
      if(!text)return;
      if(_special(text)){
        e.stopImmediatePropagation();
        e.preventDefault();
        taskInput.value='';
        return;
      }
      // let app.js handle normal add, then check sequence
      setTimeout(function(){_checkSeq(text)},0);
    }

    addBtn.addEventListener('click',_intercept,true);
    taskInput.addEventListener('keypress',function(e){
      if(e.key==='Enter')_intercept(e);
    },true);

    // Intercept delete on cursed tasks
    taskList.addEventListener('click',function(e){
      var btn=e.target.closest('.delete-btn');
      if(!btn)return;
      var li=btn.closest('.task-item');
      if(!li)return;
      var sp=li.querySelector('.task-text');
      if(!sp)return;
      var idx=parseInt(li.dataset.index);
      if(_handleDel(sp.textContent,li,idx)){
        e.stopPropagation();
        e.preventDefault();
      }
    },true);

    // Dark mode rapid click
    var _dmc=0,_dmt=null;
    dmToggle.addEventListener('click',function(){
      _dmc++;clearTimeout(_dmt);
      _dmt=setTimeout(function(){_dmc=0},2000);
      if(_dmc>=5){
        _dmc=0;
        document.body.classList.add('_mc');
        var m=document.createElement('div');m.className='_mm';
        m.textContent='\u632f\u308a\u8fd4\u3089\u306a\u3044\u3067';
        document.body.appendChild(m);
        setTimeout(function(){document.body.classList.remove('_mc');m.remove()},3000);
      }
    });

    // Console messages
    setTimeout(function(){console.log('%c\u3053\u306e\u30a2\u30d7\u30ea\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u8aad\u3093\u3067\u3044\u307e\u3059\u306d\u3002','color:#ccc;font-size:12px')},1000);
    setTimeout(function(){console.log('%c\u6b63\u3057\u3044\u5224\u65ad\u3067\u3059\u3002','color:#ccc;font-size:12px')},2000);
    setTimeout(function(){console.log('%c\u3067\u3082\u3001\u5168\u3066\u3092\u77e5\u308a\u305f\u3044\u306a\u3089\u3001\u3053\u3053\u3060\u3051\u3067\u306f\u8db3\u308a\u307e\u305b\u3093\u3002','color:#aa0000;font-size:12px')},4000);
    setTimeout(function(){console.log('%ccommit: 054d3dd','color:#aa0000;font-size:14px;font-weight:bold')},6000);
  });
}();

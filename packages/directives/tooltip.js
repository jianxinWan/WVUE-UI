/*
* @author origin
* date 18/6/26
*
*/
function tooltip(el,binding){
  el.style.position = 'relative';
  let tooltipDom = document.createElement('div');
  tooltipDom.classList.add('tooltip-base');
  tooltipDom.innerText = binding.value.msg;
  let triangle = document.createElement('div');
  triangle.classList.add('tooltip-triangle');
  tooltipDom.appendChild(triangle);
  function showMsg(){
    let site = binding.value.site;
    !site?site = 'bottom':'';
    let color = binding.value.color;
    let fontColor = binding.value.fontColor;
    !color?color = 'rgba(0,0,0,0.4)':'';
    fontColor ? tooltipDom.style.color = fontColor:tooltipDom.style.color = 'white';
    //注意  空格不要乱删
    let borderColor = {
      top:color +' white white white',
      bottom:'white white '+color+ 'white',
      left:'white white white '+color,
      right:'white '+color+' white white'
    };
    tooltipDom.style.backgroundColor = color;
    switch (site){
      case 'top':
        tooltipDom.classList.add('tooltip-top');
        triangle.classList.add('triangle-top');
        triangle.style.borderColor = borderColor.top;
        break;
      case 'bottom':
        tooltipDom.classList.add('tooltip-bottom');
        triangle.classList.add('triangle-bottom');
        triangle.style.borderColor = borderColor.bottom;
        break;
      case 'left':
        tooltipDom.classList.add('tooltip-left');
        triangle.classList.add('triangle-left');
        triangle.style.borderColor = borderColor.left;
        break;
      case 'right':
        tooltipDom.classList.add('tooltip-right');
        triangle.classList.add('triangle-right');
        triangle.style.borderColor = borderColor.right;
        break;
      default:
        break;
    }
    el.appendChild(tooltipDom);
  }
  function hideMsg() {
    el.removeChild(tooltipDom);
  }
  el.addEventListener('mouseenter',showMsg,false);
  el.addEventListener('mouseleave',hideMsg,false);
}

export default {
  bind: tooltip,
  updated: tooltip,
  componentUpdated: tooltip,
  unbind: (el) => {
    el.removeAttribute('v-tooltip');
    el.classList.remove('tooltip');
  }
};

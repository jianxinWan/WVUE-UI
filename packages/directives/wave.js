/**
 * @author:origin
 * date:18/06/24
 */
function wave(el,binding){
  let addRippleEffect = function(event) {
    let e  = event ||window.event;
    let target = el;
    let rect = target.getBoundingClientRect();
    let ripple = document.createElement('span');
    target.style.position = 'relative';
    target.style.overflow = 'hidden';
    ripple.className = 'ripple';
    binding.value ? ripple.style.backgroundColor = binding.value.color :ripple.style.backgroundColor = 'rgba(0,186,210,.6)';
    ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
    target.appendChild(ripple);
    let top = e.clientY - rect.top - ripple.offsetHeight/2;
    let left = e.clientX - rect.left - ripple.offsetWidth/2;
    ripple.style.top = top + 'px';
    ripple.style.left = left + 'px';
    ripple.classList.add('show');
  };
  el.addEventListener('click',addRippleEffect,false);
}
export  default {
  bind:wave,
  updated:wave,
  componentUpdated:wave,
  unbind:(el)=>{
    el.removeAttribute('v-wave');
    el.classList.remove('wave');
  }
};

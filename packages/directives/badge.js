function directive (el, binding) {
  const defaultConf = {
    color:'#f44336',
    size:'medium',
    fontColor:'white'
  };
  el.classList.add('badge');
  let oDot = document.createElement("span");
  oDot.classList.add("badge-style-base");
  if(binding.value){
    binding.value.color ?oDot.style.backgroundColor=binding.value.color:oDot.style.backgroundColor=defaultConf.color;
    binding.value.size ? oDot.classList.add("badge-style-"+ binding.value.size):oDot.classList.add("badge-style-"+defaultConf.size);
    binding.value.value?oDot.innerHTML=binding.value.value:oDot.innerHTML='';
    binding.value.fontColor?oDot.style.color = binding.value.fontColor:oDot.style.color = defaultConf.fontColor;
    el.appendChild(oDot);
  }
}

export default {
  bind: directive,
  updated: directive,
  componentUpdated: directive,
  unbind: (el) => {
    el.removeAttribute('v-badge');
    el.classList.remove('badge')
  }
}

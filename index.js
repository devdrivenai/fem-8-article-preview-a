const shareBtn = document.querySelector('.share-icon-btn')
const shareBox = document.querySelector('.share-box')

function toggleShareBox(ev) {
  ev.stopPropagation()
  if (shareBox.open) {
    shareBox.close()
  } else {
    shareBox.show()
  }
}

shareBtn.addEventListener('click', toggleShareBox)

function closeDialogOnClickOut(ev){
  if(!shareBox.open) return
  if (ev.target.closest('.share-box')) return
  shareBox.close()
}

document.addEventListener('click', closeDialogOnClickOut)

function closeonEscKey(ev) {
  if(!shareBox.open) return
  const { key } = ev
  if (key !== 'Escape') return
  shareBox.close()
}

document.addEventListener('keyup', closeonEscKey)
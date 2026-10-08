import { defineAppSetup } from '@slidev/types'
import sharedSetup from '../../setup/main'

function hideGotoDialog() {
  const styleId = 'copilottraining-hide-goto-dialog'
  if (document.getElementById(styleId))
    return

  const style = document.createElement('style')
  style.id = styleId
  style.textContent = '#slidev-goto-dialog { display: none !important; }'
  document.head.appendChild(style)
}

export default defineAppSetup((context) => {
  sharedSetup(context)
  if (typeof window !== 'undefined' && context.router) {
    hideGotoDialog()
  }
})

<script setup>
import { computed } from 'vue'
import { isDark } from './useTheme'
import { useSectionChrome } from './useSectionTheme'

const chrome = useSectionChrome(() => 2)
const palette = computed(() => ({
  '--path-bg': isDark.value ? '#161b22' : '#f6f8fa',
  '--path-node': isDark.value ? '#0d1117' : '#ffffff',
  '--path-border': isDark.value ? '#30363d' : '#d1d9e0',
  '--path-text': isDark.value ? '#e6edf3' : '#1f2328',
  '--path-muted': isDark.value ? '#8b949e' : '#59636e',
  '--path-green': isDark.value ? '#3fb950' : '#1a7f37',
  '--path-blue': isDark.value ? '#58a6ff' : '#0969da',
  '--path-purple': isDark.value ? '#bc8cff' : '#8250df',
}))
</script>

<template>
  <div class="h-full flex flex-col relative overflow-hidden px-14" :style="palette">
    <div class="absolute inset-0 bg-gradient-to-br" :class="chrome.ambientBg"></div>
    <div class="relative z-10 flex items-center gap-3 mb-3">
      <span class="px-4 py-1 bg-gradient-to-r border rounded-full text-xs font-semibold" :class="[chrome.pill, chrome.pillText]">
        Execution paths
      </span>
      <div class="flex-1"></div>
      <div class="flex items-center gap-2" aria-label="Slide 1 of 2 in this section">
        <span class="w-2 h-2 rounded-full bg-blue-400"></span>
        <span class="w-2 h-2 rounded-full bg-gray-500/40"></span>
        <span class="text-xs ml-1" style="color: var(--path-muted)">1 of 2</span>
      </div>
    </div>
    <div class="relative z-10 mb-2">
      <h2 class="!text-xl !font-bold !mb-1" style="color: var(--path-text)">Three paths to one final response</h2>
      <p class="!text-xs !m-0" style="color: var(--path-muted)">HydraFusion chooses a pattern for each prompt. These paths are conceptual.</p>
    </div>
    <svg class="relative z-10 w-full flex-1 min-h-0" viewBox="0 0 920 350" role="img" aria-labelledby="hydra-paths-title hydra-paths-desc">
      <title id="hydra-paths-title">HydraFusion Single, Cascade and Critique execution paths</title>
      <desc id="hydra-paths-desc">Single uses one selected model. Cascade drafts, then judges and either accepts or requests repair or escalation. Critique drafts, gets independent review that can use parallel critics, then the original solver revises once. All three paths return a final response.</desc>
      <defs>
        <marker id="hydra-path-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 Z" fill="var(--path-muted)" />
        </marker>
      </defs>
      <g class="lane">
        <rect x="125" y="8" width="785" height="76" rx="12" />
        <rect x="125" y="103" width="785" height="135" rx="12" />
        <rect x="125" y="257" width="785" height="82" rx="12" />
      </g>
      <g class="lane-name">
        <text x="0" y="52" fill="var(--path-green)">Single</text>
        <text x="0" y="151" fill="var(--path-blue)">Cascade</text>
        <text x="0" y="305" fill="var(--path-purple)">Critique</text>
      </g>
      <g class="edge">
        <path d="M 335 46 H 745" />
        <path d="M 305 145 H 350" />
        <path d="M 490 145 H 745" />
        <path d="M 420 169 V 207 H 535" />
        <path d="M 705 207 H 820 V 169" />
        <path d="M 275 298 H 330" />
        <path d="M 500 298 H 555" />
        <path d="M 725 298 H 780" />
      </g>
      <g class="node">
        <rect x="145" y="22" width="190" height="48" rx="8" style="stroke: var(--path-green)" />
        <rect x="745" y="22" width="150" height="48" rx="8" />
        <rect x="145" y="121" width="160" height="48" rx="8" style="stroke: var(--path-blue)" />
        <rect x="350" y="121" width="140" height="48" rx="8" style="stroke: var(--path-blue)" />
        <rect x="745" y="121" width="150" height="48" rx="8" />
        <rect x="535" y="185" width="170" height="44" rx="8" style="stroke: var(--path-blue)" />
        <rect x="145" y="273" width="130" height="50" rx="8" style="stroke: var(--path-purple)" />
        <rect x="330" y="273" width="170" height="50" rx="8" style="stroke: var(--path-purple)" />
        <rect x="555" y="273" width="170" height="50" rx="8" style="stroke: var(--path-purple)" />
        <rect x="780" y="273" width="115" height="50" rx="8" />
      </g>
      <g class="label">
        <text x="240" y="52">Selected model</text>
        <text x="820" y="52">Final response</text>
        <text x="225" y="151">Efficient draft</text>
        <text x="420" y="151">Judge</text>
        <text x="820" y="151">Final response</text>
        <text x="620" y="213">Repair / escalate</text>
        <text x="210" y="304">Draft</text>
        <text x="415" y="294">Independent review</text>
        <text x="640" y="294">Original solver</text>
        <text x="837" y="304">Final</text>
      </g>
      <g class="hint">
        <text x="610" y="133">accept</text>
        <text x="473" y="196">if needed</text>
        <text x="415" y="313">can use parallel critics</text>
        <text x="640" y="313">revises once</text>
      </g>
    </svg>
    <div class="relative z-10 mt-1 text-[9px] leading-snug" style="color: var(--path-muted)">
      Adapted from GitHub Docs, "Using HydraFusion," and the October 14 update. Extra model passes are selective.
    </div>
  </div>
</template>

<style scoped>
.lane rect { fill: var(--path-bg); stroke: var(--path-border); }
.lane-name { font-size: 24px; font-weight: 700; }
.edge path { fill: none; stroke: var(--path-muted); stroke-width: 2; marker-end: url(#hydra-path-arrow); }
.node rect { fill: var(--path-node); stroke: var(--path-border); stroke-width: 1.5; }
.label { fill: var(--path-text); font-size: 18px; text-anchor: middle; }
.hint { fill: var(--path-muted); font-size: 13px; text-anchor: middle; }
</style>

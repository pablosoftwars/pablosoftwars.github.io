export const state = () => ({
  waveActive: true,
})

export const mutations = {
  changeWaveActive(state, val) {
    if (val === true) {
      state.waveActive = true
    } else {
      state.waveActive = false
    }
  },
}

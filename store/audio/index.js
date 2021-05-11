export const state = () => ({
  stateSoundWallpaper: false,
  stateSoundEffect: true,
})

export const mutations = {
  changeStateSoundWallpaper(state) {
    state.stateSoundWallpaper = !state.stateSoundWallpaper
  },
  changeStateSoundEffect(state) {
    state.stateSoundEffect = !state.stateSoundEffect
  },
}

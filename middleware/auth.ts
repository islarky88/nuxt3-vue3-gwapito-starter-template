export default defineNuxtRouteMiddleware((to, from) => {
  // return abortNavigation() - stops the current navigation
  // return abortNavigation(error) - rejects the current navigation with an error
  if (to.params.id === '1') {
    return abortNavigation();
  }
  return navigateTo('/');
});

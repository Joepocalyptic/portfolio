export default function({ route, redirect }) {
  if(route.path.toLowerCase() === "/about" || route.path.toLowerCase() === "/about/") {
    return redirect("/about/desktop")
  }
  if(route.path.toLowerCase() === "/work" || route.path.toLowerCase() === "/work/") {
    return redirect("/work/desktop")
  }
}

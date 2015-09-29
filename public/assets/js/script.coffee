
$w            = $(window)
topScroll     = 60
position      = topScroll
oddScroll     = 0
initScroll    = true
topMenu       = $('#top-menu')
topBar        = $('#top-bar')
topBarContent = $('#top-bar-content')

$w.scroll ->
  scroll = $w.scrollTop()
  oddScroll = scroll if initScroll
  initScroll = false

  position += (oddScroll - scroll)
  position = Math.min(position, topScroll)
  position = Math.max(position, 0)

  topMenu.css 'top', position - topScroll
  topBarContent.css 'top', position

  topBar.css 'height', topBarContent[0].offsetHeight
  oddScroll = scroll

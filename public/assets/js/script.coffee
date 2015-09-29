
$w            = $(window)
subindo       = false
oddScroll     = 0
lastPosition  = 0
oddTop        = 0
topScroll     = 60
upPosition    = topScroll
downPosition  = 0
topMenu       = $('#top-menu')
topBar        = $('#top-bar')
topBarContent = $('#top-bar-content')

$w.scroll ->
  scroll = $w.scrollTop()

  if scroll >= oddScroll
    # SCROLL DOWN
    lastPosition = scroll if subindo
    downPosition = lastPosition - scroll

    if (upPosition + downPosition) > 0
      topMenu.css 'top', (upPosition + downPosition) - topScroll
      topBarContent.css 'top', (upPosition + downPosition)
    else
      topMenu.css 'top', (-1 * topScroll)
      topBarContent.css 'top', 0

    console.log 'lastPosition', lastPosition
    console.log 'scroll', scroll
    console.log 'oddScroll', oddScroll
    console.log 'upPosition', upPosition
    console.log 'downPosition', downPosition
    console.log '-------------------------- descendo'
    subindo = false

  if scroll < oddScroll
    # SCROLL UP
    lastPosition = scroll unless subindo
    upPosition = if (lastPosition - scroll) < topScroll then (lastPosition - scroll) else topScroll
    topMenu.css 'top', upPosition - topScroll
    topBarContent.css 'top', upPosition

    console.log 'lastPosition', lastPosition
    console.log 'scroll', scroll
    console.log 'oddScroll', oddScroll
    console.log 'upPosition', upPosition
    console.log 'downPosition', downPosition
    console.log '########################## subindo'
    subindo = true

  topBar.css 'height', topBarContent[0].offsetHeight
  oddScroll = scroll


###
.directive "floating", ->
  restrict: "C"
  link: (scope, $element, attrs) ->
    elem        = $element
    elemBox     = $('.to-floating')
    elemTop     = 0
    elemHeight  = 0
    isFixed     = false
    firstScroll = true
    $w          = $(window)

    $w.scroll ->
      if(firstScroll)
        elemTop = elem.offset().top
        elemHeight = elem[0].offsetHeight
        firstScroll = false

      elem.css
        minHeight: elemHeight

      scrollTop = $w.scrollTop()
      shouldBeFixed = scrollTop > elemTop
      if shouldBeFixed and not isFixed
        elem.addClass('active')
        elemBox.css
          position: 'fixed'
          top: 0
          zIndex: 300
          width: '100%'
        isFixed = true
      else if not shouldBeFixed and isFixed
        elem.removeClass('active')
        elemBox.css position: 'static'
        isFixed = false
      return
    return
  transclude: true
  replace: true
  template: "<div><div class='to-floating' ng-transclude></div></div>"
###

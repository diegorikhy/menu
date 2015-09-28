
$w = $(window)
$w.scroll ->
  scroll = $w.scrollTop()
  topScroll = 40
  if scroll > topScroll
    $('#top-bar').addClass('fixed')
  if scroll <= topScroll
    $('#top-bar').removeClass('fixed')


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

angular.module 'app', [
  'sc.app.helpers'
]

.factory 'Templates', ->
  previsaoContas:
    show: "templates/show.html"
    form: "templates/form.html"
    formMensal: "templates/form_mensal.html"


.factory 'Financeiro::PrevisaoOrcamentaria', ->
  lista:
    2014: JSON.stringify([{"id": 5,"valor":99.41,"plano_conta_id":1,"mes":1},{"id": 6,"valor":40.63,"plano_conta_id":2,"mes":2},{"id": 7,"valor":11.84,"plano_conta_id":2,"mes":3},{"id": 8,"valor": 35.1,"plano_conta_id":2,"mes":4},{"id": 9,"valor":15.94,"plano_conta_id":1,"mes":5},{"id":10,"valor":15.04,"plano_conta_id":1,"mes":6},{"id":11,"valor":59.06,"plano_conta_id":2,"mes":7},{"id":12,"valor":90.26,"plano_conta_id":2,"mes":8},{"id":13,"valor":14.27,"plano_conta_id":2,"mes":9},{"id":14,"valor":81.77,"plano_conta_id":1,"mes":10},{"id":15,"valor":20.3,"plano_conta_id":1,"mes":11},{"id":16,"valor":91.61,"plano_conta_id":2,"mes":12}])
    2015: JSON.stringify([{"id":17,"valor":57.02,"plano_conta_id":2,"mes":1},{"id":16,"valor":55.02,"plano_conta_id":2,"mes":1},{"id":18,"valor":52.77,"plano_conta_id":2,"mes":2},{"id":19,"valor":68.86,"plano_conta_id":2,"mes":3},{"id":20,"valor":28.04,"plano_conta_id":2,"mes":4},{"id":21,"valor":52.83,"plano_conta_id":2,"mes":5},{"id":22,"valor": 90.1,"plano_conta_id":2,"mes":6},{"id":23,"valor":48.01,"plano_conta_id":1,"mes":7},{"id":24,"valor":13.72,"plano_conta_id":1,"mes":8},{"id":25,"valor":33.56,"plano_conta_id":1,"mes":9},{"id":26,"valor":53.82,"plano_conta_id":1,"mes":10},{"id":27,"valor":22.7,"plano_conta_id":1,"mes":11},{"id":28,"valor":69.54,"plano_conta_id":1,"mes":12}])
    2016: JSON.stringify([{"id":29,"valor":79.68,"plano_conta_id":1,"mes":1},{"id":30,"valor":91.38,"plano_conta_id":2,"mes":2},{"id":31,"valor":22.66,"plano_conta_id":1,"mes":3},{"id":32,"valor": 15.6,"plano_conta_id":1,"mes":4},{"id":33,"valor":51.96,"plano_conta_id":2,"mes":5},{"id":34,"valor": 78.0,"plano_conta_id":1,"mes":6},{"id":35,"valor":54.87,"plano_conta_id":2,"mes":7},{"id":36,"valor":19.58,"plano_conta_id":1,"mes":8},{"id":37,"valor":92.13,"plano_conta_id":1,"mes":9},{"id":38,"valor":38.85,"plano_conta_id":2,"mes":10},{"id":39,"valor":12.5,"plano_conta_id":1,"mes":11},{"id":40,"valor":25.47,"plano_conta_id":1,"mes":12}])

  list: (ano)->
    if @lista[ano] then JSON.parse(@lista[ano]) else []

  save: (data)->
    console.log data
    temp = JSON.parse(@lista[data.ano] || '[]')
    for el in data.itens
      el.id ||= (new Date()).getTime()
      temp.addOrExtend el

    @lista[data.ano] = JSON.stringify temp


.controller 'Financeiro::PrevisaoOrcamentaria::IndexCtrl', [
  '$scope', 'Financeiro::PrevisaoOrcamentaria', 'Templates', 'scToggle', '$scTimezone', '$locale'
  ($scope, Previsao, Templates, toggle, scTimezone, $locale)->
    $scope.Previsao = []
    $scope.templates = Templates
    $scope.formulario = new toggle
    $scope.nomeMesAno = $locale.DATETIME_FORMATS.MONTH

    $scope.filtro =
      ano: parseInt(scTimezone.now.format('YYYY'), 10)
      incAno: ->
        @ano += 1
        $scope.buscar()
      decAno: ->
        @ano -= 1
        $scope.buscar()

    agruparPorMeses = (data)->
      $scope.Previsao = []
      for mes in [1..12]
        mesDesejado = undefined
        mesDesejado = hashMes for hashMes in $scope.Previsao when hashMes.mes == mes
        unless mesDesejado
          mesDesejado = { mes: mes, plano_contas: [] }
          $scope.Previsao.push mesDesejado
        mesDesejado.plano_contas.push item for item in data when item.mes == mes

    $scope.buscar = ->
      agruparPorMeses(Previsao.list($scope.filtro.ano))
    $scope.buscar()

    $scope.totalPrevisao = (previsaoContas)->
      sum = 0
      for item in previsaoContas.plano_contas
        sum = somar(item.valor, sum)
      sum

    $scope.planoContasList = [
      { id: 1, nome: '1. Receitas' }
      { id: 2, nome: '2. Despesas' }
    ]

    ($scope.lacucaracha ||= {})[el.id] = el.nome for el in $scope.planoContasList

    $scope.ano = [
      2014
      2015
      2016
      2017
    ]
]

.controller 'Financeiro::PrevisaoOrcamentaria::ItemCtrl', [
  '$scope', 'scToggle'
  ($scope,   toggle)->
    $scope.init = (previsaoContas)->
      $scope.previsaoContas = previsaoContas
      $scope.previsaoContas.acc = new toggle

    $scope.formularioMensal = new toggle
      onOpen: ->
        $scope.previsaoContas.acc.open()
]

.controller 'Financeiro::PrevisaoOrcamentaria::FormCtrl', [
  '$scope', 'Financeiro::PrevisaoOrcamentaria'
  ($scope, Previsao)->
    $scope.init = (ano)->
      $scope.form.ano = ano
      $scope.buscar()

    $scope.form =
      ano: 2015
      plano_conta_id: 1

    $scope.buscar = ->
      $scope.data = Previsao.list $scope.form.ano
      $scope.atualizarPlanoContas()

    $scope.atualizarPlanoContas = ->
      $scope.form.itens_attributes = []
      for item in $scope.data
        if item.plano_conta_id == $scope.form.plano_conta_id
          $scope.form.itens_attributes.push item
      atualizarAtributosForm()

    $scope.meses = []
    atualizarAtributosForm = ->
      for mes in [1..12]
        idx = mes - 1
        indiceItem = $scope.form.itens_attributes.getIndexByField 'mes', mes
        if indiceItem? and indiceItem >= 0
          console.log 'mes', mes, 'indiceItem', indiceItem, 'idx', idx
          $scope.meses[idx] = $scope.form.itens_attributes[indiceItem]
          $scope.meses[idx].checked = true
        else
          $scope.meses[idx] = angular.extend {}, {mes: mes}
      console.log $scope.meses

    $scope.sugestaoValor = 0
    $scope.aplicarSugestaoValor = ->
      for item in $scope.form.itens_attributes
        item.valor = $scope.sugestaoValor if item._destroy == undefined

    $scope.atualizarMes = (mes)->
      mes.checked = !mes.checked
      if mes.checked
        item._destroy = undefined for item in $scope.form.itens_attributes when item.mes == mes.mes
        $scope.form.itens_attributes.addOrExtend mes
      else
        for item in $scope.form.itens_attributes
          if item.mes == mes.mes
            if item.id
              item._destroy = true
            else
              $scope.form.itens_attributes.removeByField('mes', mes.mes)
            break

    $scope.salvar = ->
      console.log '$scope.meses', $scope.meses
      Previsao.save({ano: $scope.form.ano, itens: $scope.meses})
]

.controller 'Financeiro::PrevisaoOrcamentaria::FormMensalCtrl', [
  '$scope'
  ($scope)->
    $scope.init = (previsaoContas)->
      $scope.form = angular.extend {}, previsaoContas

    $scope.addPrevisaoConta = ->
      $scope.form.plano_contas.push
        valor: 0

    $scope.deletePrevisaoConta = (item)->
      if item.id?
        item._destroy = if item._destroy? then undefined else true
      else
        $scope.form.plano_contas.remove item
]

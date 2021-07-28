moment.locale('ru')

$('#date').html(moment().format('MMMM YYYY'))

const currentMonth = moment().month()
let momentCounter = moment()
    .startOf('month')
    .subtract(
        moment()
            .subtract(1, 'month')
            .endOf('month')
            .day(),
        'days'
    )

for (let day = 0; day < 6 * 7; day++) {
    const isThisMonth = momentCounter.month() === currentMonth
    $('.table > .body').append('<div class="day"></div>')
    if (momentCounter.month() !== currentMonth) {
        $('.table > .body > div').last().addClass('differentMonth')
    }
    $('.table > .body > div').last().loadTemplate(
        'templates/cell.html',
        { date: momentCounter.date() }
    )
    momentCounter.add(1, 'day')
}

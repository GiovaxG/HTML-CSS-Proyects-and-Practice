$(document).ready(function () {
    $('.nav-menu a').on('click', function () {
        $('#nav-toggle').prop('checked', false);
    });

    $('.category-item').on('click', function (event) {
        event.preventDefault();

        const selectedCategory = $(this).data('category');

        $('.category-item')
            .removeClass('item-active')
            .attr('aria-pressed', 'false');
        $(this)
            .addClass('item-active')
            .attr('aria-pressed', 'true');

        $('.product-item').each(function () {
            const matchesCategory = selectedCategory === 'all'
                || $(this).data('category') === selectedCategory;

            $(this).toggle(matchesCategory);
        });
    });
});
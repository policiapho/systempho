<script>
$(document).on("click", ".copy-btn", function () {

    const patente = $("#patente").text().trim();
    const status = $("#status").text().trim();
    const desde = $("#desde").text().trim();

    const texto = `[INFO] Patente: ${patente} - Status: ${status} - Desde: ${desde}`;

    navigator.clipboard.writeText(texto).then(() => {

        const $btn = $(this);
        const original = $btn.html();

        $btn.html('<i class="check icon"></i> Copiado!');

        setTimeout(() => {
            $btn.html(original);
        }, 2000);

    }).catch(() => {
        alert("Erro ao copiar.");
    });

});
</script>

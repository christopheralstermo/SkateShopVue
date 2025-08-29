<template>
  <div class="footer">
    <div class="footer-section">
      <h3>Hjelp og kontakt</h3>
      <ul>
        <li>Alle spørsmål og svar</li>
        <li>Bestilling</li>
        <li>Betaling & sikkerhet</li>
        <li>Fakturabetaling</li>
        <li>Frakt og leveranse</li>
        <li>Hvordan returnerer jeg en vare?</li>
        <li>Hvordan blir jeg refundert ved retur?</li>
        <li>Registrer deg som kunde</li>
        <li>Abonner på nyhetsbrevet</li>
        <li>Produktsikkerhet</li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Gavekort</h3>
      <ul>
        <li>Shop gavekort</li>
        <li>Spørsmål om gavekort</li>
        <li>Innløsing av gavekort</li>
        <li>Spørsmål om rabattkoder</li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Om SkateShop</h3>
      <ul>
        <li>Corporate website</li>
        <li>Ledige stillinger</li>
        <li>Presse</li>
        <li>Investor Relations</li>
        <li>SkateShop Partner</li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Vi sender med</h3>
      <ul>
        <li>&nbsp;</li>
        <li>&nbsp;</li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Betalingsmuligheter</h3>
      <ul>
        <li>&nbsp;</li>
        <li>&nbsp;</li>
        <li>&nbsp;</li>
        <li>&nbsp;</li>
        <li>&nbsp;</li>
        <li>&nbsp;</li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Dine fordeler</h3>
      <ul>
        <li>Fri standardfrakt over 449 kr</li>
        <li>Gratis retur</li>
        <li>30 dagers åpent kjøp</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>
.footer {
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  z-index: 1000;
  box-sizing: border-box;
}

.footer-section {
  margin: 10px;
}

.footer-section h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 5px;
  cursor: pointer;
}

.footer-section li:hover {
  text-decoration: underline;
}
</style>
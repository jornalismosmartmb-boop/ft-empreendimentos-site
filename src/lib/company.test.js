import { describe, expect, test } from "bun:test";
import { company } from "./company";

describe("Dados do cartão CNPJ do Adalberto", () => {
  test("identifica a empresa do cartão", () => {
    expect(company.legalName).toBe("57.497.142 ADALBERTO SANTOS PIRES");
    expect(company.cnpj).toBe("57.497.142/0001-23");
  });
  test("mantém a situação ativa e a data do cartão", () => {
    expect(company.situation).toBe("ATIVA");
    expect(company.situationSince).toBe("30/09/2024");
  });
  test("usa a atividade principal do cartão", () => {
    expect(company.cnae).toBe("49.30-2-02");
  });
  test("usa o endereço do cartão", () => {
    expect(company.address.city).toBe("Dom Basílio");
    expect(company.address.zip).toBe("46.165-000");
  });
  test("usa a natureza jurídica do cartão", () => {
    expect(company.legalNature).toBe("Empresário (Individual) (213-5)");
    expect(company.size).toBe("ME");
  });
  test("preserva o endereço completo do cartão", () => {
    expect(company.address.street).toBe("R Jose Bonifacio, S/N, Casa");
    expect(company.address.district).toBe("Fazendinha");
    expect(company.address.state).toBe("BA");
  });
  test("usa a atividade e os contatos do cartão", () => {
    expect(company.mainActivity).toBe("Transporte rodoviário de carga, exceto produtos perigosos e mudanças, intermunicipal, interestadual e internacional");
    expect(company.phone).toBe("(71) 98257-7846");
    expect(company.email).toBe("emaildoedsonlima@gmail.com");
    expect(company.openingDate).toBe("30/09/2024");
  });
});

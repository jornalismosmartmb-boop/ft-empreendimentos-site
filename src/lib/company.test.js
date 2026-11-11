import { describe, expect, test } from "bun:test";
import { company } from "./company";

describe("Dados do cartão CNPJ de Joao Pedro", () => {
  test("identifica a empresa do cartão", () => {
    expect(company.legalName).toBe("57.494.053 JOAO PEDRO MACARIO ROCHA DA SILVA");
    expect(company.cnpj).toBe("57.494.053/0001-23");
  });

  test("mantém a situação ativa e a data do cartão", () => {
    expect(company.situation).toBe("ATIVA");
    expect(company.situationSince).toBe("30/09/2024");
    expect(company.openingDate).toBe("30/09/2024");
  });

  test("usa a atividade principal do cartão", () => {
    expect(company.cnae).toBe("32.99-0-04");
    expect(company.mainActivity).toBe("Fabricação de painéis e letreiros luminosos");
  });

  test("usa o endereço completo do cartão", () => {
    expect(company.address).toEqual({
      street: "R Salustiano Balbino dos Santos, 84",
      district: "Centro",
      city: "Cansanção",
      state: "BA",
      zip: "48.840-000",
      country: "Brasil",
    });
  });
});
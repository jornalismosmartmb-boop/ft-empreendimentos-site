import { describe, expect, test } from "bun:test";
import { company } from "./company";

describe("Dados do cartão CNPJ de Rangel", () => {
  test("identifica a empresa do cartão", () => {
    expect(company.legalName).toBe("57.499.064 RANGEL ASEVEDO ARAUJO");
    expect(company.cnpj).toBe("57.499.064/0001-04");
  });

  test("mantém a situação ativa e a data do cartão", () => {
    expect(company.situation).toBe("ATIVA");
    expect(company.situationSince).toBe("30/09/2024");
    expect(company.openingDate).toBe("30/09/2024");
  });

  test("usa a atividade de transporte municipal do cartão", () => {
    expect(company.cnae).toBe("49.30-2-01");
    expect(company.mainActivity).toBe("Transporte rodoviário de carga, exceto produtos perigosos e mudanças, municipal");
  });

  test("usa o endereço completo do cartão", () => {
    expect(company.address).toEqual({
      street: "Rua Goias, 1031, Casa",
      district: "Siqueira Campos",
      city: "Aracaju",
      state: "SE",
      zip: "49.075-280",
      country: "Brasil",
    });
  });
});
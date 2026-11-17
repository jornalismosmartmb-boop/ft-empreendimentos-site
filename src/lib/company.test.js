import { describe, expect, test } from "bun:test";
import { company } from "./company";

describe("Dados do cartão CNPJ do Leonardo", () => {
  test("identifica a empresa do cartão", () => {
    expect(company.legalName).toBe("57.500.896 LEONARDO NATAN COSTA PEREIRA");
    expect(company.cnpj).toBe("57.500.896/0001-95");
  });
  test("mantém a situação ativa e a data do cartão", () => {
    expect(company.situation).toBe("ATIVA");
    expect(company.situationSince).toBe("30/09/2024");
  });
  test("usa a atividade principal do cartão", () => {
    expect(company.cnae).toBe("25.39-0-01");
  });
  test("usa o endereço do cartão", () => {
    expect(company.address.city).toBe("Feira de Santana");
    expect(company.address.zip).toBe("44.006-210");
  });
  test("usa a natureza jurídica do cartão", () => {
    expect(company.legalNature).toBe("Empresário (Individual) (213-5)");
    expect(company.size).toBe("ME");
  });
  test("preserva o endereço completo do cartão", () => {
    expect(company.address.street).toBe("Av Eduardo Froes da Mota, 9999");
    expect(company.address.district).toBe("Muchila");
    expect(company.address.state).toBe("BA");
  });
  test("usa a atividade e os contatos do cartão", () => {
    expect(company.mainActivity).toBe("Serviços de usinagem, tornearia e solda");
    expect(company.phone).toBe("(71) 98257-7846");
    expect(company.email).toBe("emaildoedsonlima@gmail.com");
    expect(company.openingDate).toBe("30/09/2024");
  });
});

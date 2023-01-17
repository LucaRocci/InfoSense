package app.infoSense.predicto;

import app.infoSense.predicto.controller.StatisticsController;
import app.infoSense.predicto.entity.*;
import app.infoSense.predicto.service.ContestoService;
import app.infoSense.predicto.service.EserciziService;
import app.infoSense.predicto.service.ProvinceService;
import app.infoSense.predicto.service.StatisticheProvinceService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(StatisticsController.class)
@RunWith(SpringRunner.class)
public class PredictoApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private StatisticheProvinceService statisticheProvinceService;

    @MockBean
    private ProvinceService provinceService;

    @MockBean
    private EserciziService eserciziService;

    @MockBean
    private ContestoService contestoService;

    @Test
    public void testApiListProvince() throws Exception {

        Regioni r = new Regioni(1L,"Piemonte");
       ArrayList<Province> provinceTest = new ArrayList<>();
       provinceTest.add(Province.builder().idRegione(r).idProvincia(1L).nome("Torino").build());
       provinceTest.add(Province.builder().idRegione(r).idProvincia(2L).nome("Alessandria").build());
       provinceTest.add(Province.builder().idRegione(r).idProvincia(3L).nome("Genova").build());

       List<String>  expected = new ArrayList<>();
       expected.add("Torino");
       expected.add("Alessandria");
       expected.add("Genova");
       given(provinceService.findNomiProvince()).willReturn(expected);

        ResultActions response = mockMvc.perform(get("/statistics/province")
                .contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
    }

    @Test
    public void testApiListStructures() throws Exception{

        List<Esercizi> eserciciTest = new ArrayList<>();
        eserciciTest.add(Esercizi.builder().idEsercizio(1L).nomeEsercizio("albergo").build());
        eserciciTest.add(Esercizi.builder().idEsercizio(2L).nomeEsercizio("campeggio").build());

        List<String> expected = new ArrayList<>();
        expected.add("albergo");
        expected.add("campeggio");
        given(eserciziService.findNomiEsercizi()).willReturn(expected);

        ResultActions resultActions = mockMvc.perform(get("/statistics/structures")
                .contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
    }

    @Test
    public void testApiGetDataProvince() throws Exception{

        List<StatisticheProvince> list = new ArrayList<>();

       // list.add(StatisticheProvince.builder().id(1L).valore(1234).anno(2021).mese(1).idContesto(2).ibuild());



    }

}

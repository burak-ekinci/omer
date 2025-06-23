import { useState } from "react";

const questions = [
  {
    question:
      "1. Aşağıdakilerden hangisi obezite gelişiminde rol oynayan hormonal bir faktördür?",
    options: [
      "A) Yetersiz su tüketimi",
      "B) Artmış leptin duyarlılığı",
      "C) İnsülin direnci",
      "D) Yüksek protein alımı",
      "E) Artan fiziksel aktivite",
    ],
    answer: 2,
  },
  {
    question:
      "2. Aşağıdaki bireylerden hangisine farmakolojik tedavi önerilmesi en uygundur?",
    options: [
      "A) BKİ: 24, bel çevresi: 85 cm, sağlıklı birey",
      "B) BKİ: 27, bel çevresi: 92 cm, ek hastalığı yok",
      "C) BKİ: 32, tip 2 diyabet tanısı olan birey",
      "D) BKİ: 28, düzenli egzersiz yapan birey",
      "E) BKİ: 30'un altında, sadece diyet yapan birey",
    ],
    answer: 2,
  },
  {
    question:
      "3. Obez bireylerde leptin düzeyleri genellikle yüksektir. Bu durumun farmakoterapideki önemi nedir?",
    options: [
      "A) Leptin üretimini artıran ilaçlar obezite tedavisinde etkilidir",
      "B) Leptin reseptörlerini bloke eden ilaçlar tercih edilir",
      "C) Leptin duyarsızlığına yönelik tedaviler araştırılmaktadır",
      "D) Leptin düzeyleri tedaviyle doğrudan artırılmalıdır",
      "E) Leptin sadece estetik cerrahide önemlidir.",
    ],
    answer: 2,
  },
  {
    question:
      "4.Aşağıdaki ilaç gruplarından hangisi obezite tedavisinde istenmeyen kilo artışına neden olabilir?",
    options: [
      "A) GLP-1 agonistleri",
      "B) Metformin",
      "C) Antidepresanlar (örn. SSRI'lar)",
      "D) Orlistat",
      "E) Liraglutid",
    ],
    answer: 2,
  },
  {
    question:
      "5.Aşağıdaki ilaçlardan hangisi doğrudan obezite tedavisinde kullanılan onaylı bir farmakoterapi ajanıdır?",
    options: [
      "A) Amlodipin",
      "B) Liraglutid",
      "C) Atorvastatin",
      "D) Sertralin",
      "E) Diazepam",
    ],
    answer: 1,
  },
  {
    question:
      "6. Stevens-Johnson Sendromu (SJS) tanısı konulan bir hastada sistemik kortikosteroid tedavisi başlanması planlanıyor.",
    options: [
      "A) Yüksek doz kortikosteroid uzun süreli olarak devam ettirilmelidir.",
      "B) Kortikosteroid tedavisi kontrendikedir.",
      "C) Kortikosteroid tedavisi sadece topikal olarak verilmelidir.",
      "D) Kullanılacaksa, hastalık ilerlemesi durduktan sonra hızla kesilmelidir.",
      "E) Kortikosteroid yerine doğrudan oral antihistaminik başlanmalıdır.",
    ],
    answer: 3,
  },
  {
    question:
      "7.Aşağıdaki durumlardan hangisinde sistemik destek tedavisi verilmesi ZORUNLU hale gelebilir?",
    options: [
      "A) Hafif makülopapüler döküntü",
      "B) Ürtiker ile sınırlı ilaç reaksiyonu",
      "C) Sabit ilaç erüpsiyonu",
      "D) Toksik Epidermal Nekroliz (TEN)",
      "E) Fotoalerjik reaksiyon",
    ],
    answer: 1,
  },
  {
    question:
      "8. Bir hastada ilaca bağlı gelişen yaygın makülopapüler döküntü 3 gün içerisinde düzelmeye başlamıştır. Bu durumda aşağıdaki ifadelerden hangisi en olasıdır?",
    options: [
      "A) Hastaya sistemik antibiyotik başlanmıştır.",
      "B) Şüpheli ilaç kesilmiş ve reaksiyon gerilemiştir.",
      "C) Reaksiyon tedavisiz kendiliğinden iyileşmiştir.",
      "D) Topikal antifungal tedavi uygulanmıştır.",
      "E) Hastaya fototerapi uygulanmıştır.",
    ],
    answer: 2,
  },
  {
    question:
      "9. Aşağıdaki ilaç gruplarından hangisi hem fototoksik hem de fotoalerjik reaksiyon oluşturabilir ve bu nedenle dikkatli kullanılması gerekir?",
    options: [
      "A) Antikolinerjikler",
      "B) Beta blokerler",
      "C) Antibiyotikler (örneğin sülfonamidler, tetrasiklinler)",
      "D) Antihipertansifler",
      "E) Antipsikotikler",
    ],
    answer: 3,
  },
  {
    question:
      "10. Ciltte kabarcıklar, yaygın epidermal ayrılma ve mukozal tutulum gözlenen bir hastada aşağıdaki tedavi planlarından hangisi en uygundur?",
    options: [
      "A) Antifungal tedavi ve lokal nemlendiriciler",
      "B) Antihistaminik tedavi ve güneşten kaçınma",
      "C) Oral antibiyotik ve topikal kortikosteroid",
      "D) Şüpheli ilacın kesilmesi, sıvı-elektrolit desteği ve IVIG tedavisi",
      "E) Oral steroid ve lokal antiseptik banyolar",
    ],
    answer: 1,
  },
  {
    question:
      "11. Aşağıdaki ilaçlardan hangisi Alzheimer hastalığında asetilkolinesteraz inhibitörü olarak kullanılır?",
    options: [
      "A) Memantin",
      "B) Donepezil",
      "C) Haloperidol",
      "D) Sertralin",
      "E) Lorazepam",
    ],
    answer: 1,
  },
  {
    question:
      "12. Memantin'in Alzheimer hastalığındaki etki mekanizması aşağıdakilerden hangisidir?",
    options: [
      "A) Dopamin salınımını artırmak",
      "B) NMDA reseptör antagonizması",
      "C) Serotonin geri alımını inhibe etmek",
      "D) Asetilkolin reseptörlerini uyarıcı etki",
      "E) GABA-A reseptörlerini modüle etmek",
    ],
    answer: 2,
  },
  {
    question:
      "13. Alzheimer tedavisinde kullanılan asetilkolinesteraz inhibitörlerinin ortak yan etkisi aşağıdakilerden hangisidir?",
    options: [
      "A) Hiperglisemi",
      "B) Hipotansiyon",
      "C) Gastrointestinal bozukluklar",
      "D) Nefrotoksisite",
      "E) Cilt döküntüleri",
    ],
    answer: 2,
  },
  {
    question:
      "14. Alzheimer hastalığında bilişsel semptomların yavaşlatılması amacıyla kullanılan ilaç çiftlerinden hangisi birlikte kombine tedavide kullanılabilir?",
    options: [
      "A) Donepezil – Haloperidol",
      "B) Memantin – Rivastigmin",
      "C) Sertralin – Memantin",
      "D) Lorazepam – Donepezil",
      "E) Fluoksetin – Rivastigmin",
    ],
    answer: 1,
  },
  {
    question:
      "15. Aşağıdakilerden hangisi Alzheimer teşhisinde kullanılan bir biyobelirteç değildir?",
    options: [
      "A) Beta-Amiloid (Aβ 42)",
      "B) Fosforlanmış Tau",
      "C) Nörofilament Hafif Zinciri (NfL)",
      "D) Hemoglobin A1c",
      "E) Toplam Tau",
    ],
    answer: 3,
  },
  {
    question:
      "16. Aşağıdakilerden hangisi Alzheimer hastalığı ile ilgili doğru bir ifadedir?",
    options: [
      "A) Alzheimer tamamen genetik geçişli bir hastalıktır.",
      "B) Alzheimer, yaşlanmanın kaçınılmaz bir sonucudur.",
      "C) Alzheimer demansın en nadir görülen tipidir.",
      "D) Alzheimer, patolojik bir süreçtir ve yaşlanmanın doğal sonucu değildir.",
      "E) Alzheimer bulaşıcı bir hastalıktır.",
    ],
    answer: 3,
  },
  {
    question:
      "17. Alzheimer hastalarında kullanılan Memantin'in etki mekanizması aşağıdakilerden hangisidir?",
    options: [
      "A) Kolinesteraz aktivasyonunu artırır",
      "B) NMDA reseptör antagonisti olarak etki eder",
      "C) GABA reseptörlerini uyarır",
      "D) Dopamin salınımını artırır",
      "E) Serotonin geri alımını inhibe eder",
    ],
    answer: 1,
  },
  {
    question:
      "18. Alzheimer hastalığında kullanılan kolinesteraz inhibitörlerinin ortak farmakolojik etkisi aşağıdakilerden hangisidir?",
    options: [
      "A) Dopamin salınımını artırmak",
      "B) NMDA reseptörlerini bloke etmek",
      "C) Asetilkolin yıkımını engelleyerek sinaptik düzeyini artırmak",
      "D) Serotonin düzeylerini düşürmek",
      "E) GABA salınımını artırmak",
    ],
    answer: 2,
  },
  {
    question:
      "19. Alzheimer hastalığında rivastigminin oral ve transdermal formları vardır. Transdermal formunun tercih edilme nedeni en çok aşağıdakilerden hangisidir?",
    options: [
      "A) Daha hızlı etki göstermesi",
      "B) Daha düşük maliyetli olması",
      "C) Gastrointestinal yan etkilerin azaltılması",
      "D) Uyku düzenleyici etkisinin olması",
      "E) Serotonin düzeylerini artırması",
    ],
    answer: 2,
  },
  {
    question:
      "20. Aşağıdakilerden hangisi Alzheimer hastalarında farmakoterapiye başlamadan önce mutlaka göz önünde bulundurulması gereken faktörlerden biridir?",
    options: [
      "A) Yaşın 85'in üzerinde olması",
      "B) Ailede depresyon öyküsü bulunması",
      "C) Hasta ve bakıcı uyumu ve tedaviye erişim",
      "D) Hastanın tansiyon düzeyi",
      "E) Cinsiyet",
    ],
    answer: 2,
  },
  {
    question:
      "21. Beyinde dopamin enerjik nöronların kaynağı olarak bilinen bölge aşağıdakilerden hangisidir?",
    options: [
      "A) Striatum",
      "B) Substania Nigra",
      "C) Talamus",
      "D) Ön beyin",
      "E) Beyincik",
    ],
    answer: 1,
  },
  {
    question:
      "22. Aşağıdakilerden hangisi parkinson belirtilerinden biri değildir?",
    options: [
      "A) Rijidite",
      "B) Tremor",
      "C) Duruş bozukluğu",
      "D) Kaslarda sertlik",
      "E) Hİpertansiyon",
    ],
    answer: 4,
  },
  {
    question:
      "23. Aşağıdakilerden hangisi parkinson hastalığında hangisi kullanılır?",
    options: [
      "A) azipar",
      "B) monoset",
      "C) aripa",
      "D) hipersar plus",
      "E) ürorec",
    ],
    answer: 0,
  },
  {
    question:
      "24. Soru aşağıdakilerden hangisi parkinson tedavisinde kullanılan ilaç gruplarından biridir?",
    options: [
      "A) MaO-B inhibitörleri",
      "B) Diüretikler",
      "C) Antibiyotikler",
      "D) Beta blokörler",
      "E) ACE inhibitörleri",
    ],
    answer: 0,
  },
  {
    question:
      "25. Aşağıdakilerden hangisi parkinson tedavisinde kullanılan dopalevonun ciddi yan etkilerinden biridir?",
    options: [
      "A) Bulantı",
      "B) Baş dönmesi",
      "C) İştah kaybı",
      "D) Kas krampları",
      "E) Halüsinasyonlar",
    ],
    answer: 4,
  },
  {
    question:
      "26. Yukarıdakilerden hangisi hipertansiyon için risk faktörlerindendir?",
    options: ["A) 1 ve 3", "B) 2 ve 4", "C) Hepsi", "D) 2,3 ve 4", "E) 1,2,3"],
    answer: 2,
  },
  {
    question:
      "27. Aşağıdaki ilaçlardan hangisi böbrek yetmezliği olan hipertansiyon hastalarında tercih edilir?",
    options: ["A) Klortiyazid", "B) Metoprolol", "C) Prazosin", "D) Metildopa"],
    answer: 0,
  },
  {
    question:
      "28. Aşağıdakilerden hangisi hipertansiyonda kullanılan ACE inhibitörü ilaçlardan değildir?",
    options: ["A) Enalapril", "B) Ramipril", "C) Lisinopril", "D) Telmisartan"],
    answer: 3,
  },
  {
    question:
      "29. Orta şiddetli hipertansiyon tedavisinde önerilen ilaç kombinasyon tedavisine Örneklerindendir?",
    options: ["A) 1", "B) 2", "C) 3", "D) 4"],
    answer: 2,
  },
  {
    question:
      "30. Aşağıdakilerdn hangisi gebelik hipertansiyon tedavisinde kullanılan ilaçtır?",
    options: [
      "A) Tiyazid+ACE-ARB",
      "B) CCB+ACEi-ARB",
      "C) BETA BLOKER+DİÜRETİK",
      "D) 2 ve 3",
    ],
    answer: 1,
  },
  {
    question:
      "31. Aşağıdakilerden hangisi alerjik rinit belirtilerinden değildir?",
    options: [
      "A) Burunda kaşıntı",
      "B) Horlama",
      "C) Kronik Öksürük",
      "D) Hazımsızlık",
      "E) Boğazda gıcık",
    ],
    answer: 3,
  },
  {
    question:
      "32. Yukarıda verilenlerden hangileri alerjik rinit tiplerindendir?",
    options: [
      "A) II ve III",
      "B) I ve III",
      "C) I ve IV",
      "D) I, II,III",
      "E) I,II,III,IV",
    ],
    answer: 3,
  },
  {
    question:
      "33. Aşağıdakilerden hangisi alerjik rinitte kullanılan ilaç gruplarından değildir?",
    options: [
      "A) Antihistaminikler",
      "B) Dekonjestanlar",
      "C) Diüretikler",
      "D) Nazal Kortikosteroidler",
      "E) Montelukast",
    ],
    answer: 2,
  },
  {
    question: "34. Hangisi alerjik rinit sebeplerinden biri değildir?",
    options: [
      "A) Ev tozları",
      "B) İlaçlar",
      "C) Hayvan türleri",
      "D) Polenler",
      "E) Böcekler",
    ],
    answer: 4,
  },
  {
    question:
      "35. Hangisi nazal kortikosteroidlerin özelliklerinden biri değildir?",
    options: [
      "A) İnflamasyonu azaltır",
      "B) Hapşırma, burun akıntısı ve kaşıntıyı giderir",
      "C) Kalıcı ve mevsimsel rinit için etkilidir",
      "D) Etkisi birkaç gün içinde görülür ve en yüksek yanıt ilk günlerde görülür",
      "E) Yan etkileri hafiftir (batma, hafif baş ağrısı vs.)",
    ],
    answer: 3,
  },
  {
    question:
      "36. Gastroözofageal Reflü Hastalığı (GÖRH) tedavisinde en güçlü mide asidi baskılayıcı ilaç grubu aşağıdakilerden hangisidir?",
    options: [
      "A) Antiasitler",
      "B) H2 reseptör antagonistleri",
      "C) Prostaglandin analogları",
      "D) Proton pompa inhibitörleri (PPI'lar)",
      "E) Antikolinerjikler",
    ],
    answer: 3,
  },
  {
    question:
      "37. Aşağıdaki hasta davranışlarından hangisi, bifosfonat kullanan bireyde yemek borusu tahriş riskini artırır?",
    options: [
      "A) İlacı yemekle birlikte almak",
      "B) İlacı sabah aç karna almak ve ardından 30 dakika dik kalmak",
      "C) İlacı yatmadan hemen önce içmek",
      "D) İlacı bol su ile içmek",
      "E) LES'in fonksiyonunu arttırırlar",
    ],
    answer: 2,
  },
  {
    question:
      "38. Aşağıdaki ilaçlardan hangisi LES (alt özofagus sfinkteri) basıncını azaltarak reflü şikayetlerini artırabilir?",
    options: [
      "A) Omeprazol",
      "B) Ranitidin",
      "C) Kalsiyum kanal blokeri",
      "D) Antiasit",
      "E) Famotidin",
    ],
    answer: 2,
  },
  {
    question:
      "39. GÖRH tedavisinde amaçlanan aşağıdaki hedeflerden hangisi yanlıştır?",
    options: [
      "A) Mide asidi üretimini azaltmak",
      "B) LES fonksiyonunu güçlendirmek",
      "C) Özofagus mukozasını onarmak",
      "D) Mide boşalmasını geciktirmek",
      "E) Reflü semptomlarını azaltmak",
    ],
    answer: 2,
  },
  {
    question:
      "40. Gut hastalığının akut atak tedavisinde aşağıdaki ilaçlardan hangisi birinci basamak tedavi olarak en sık kullanılır?",
    options: [
      "A) Allopurinol",
      "B) Kolşisin",
      "C) Febuksostat",
      "D) Probenesid",
      "E) Azatioprin",
    ],
    answer: 3,
  },
  {
    question:
      "42. Aşağıdaki ilaçlardan hangisi ksantin oksidaz inhibitörü olup, ürik asit üretimini azaltarak gut tedavisinde kullanılır?",
    options: [
      "A) Probenesid",
      "B) Kolşisin",
      "C) Allopurinol",
      "D) Rasburikaz",
      "E) Aspirin",
    ],
    answer: 2,
  },
  {
    question:
      "43. Ürik asit düşürücü tedaviye başlarken, aşağıdaki ilaçlardan hangisi ani ürik asit düzeyi değişikliklerinin neden olabileceği gut ataklarını önlemek için profilaktik olarak verilebilir?",
    options: [
      "A) Metotreksat",
      "B) Kolşisin",
      "C) Paracetamol",
      "D) Simetidin",
      "E) Lisinopril",
    ],
    answer: 1,
  },
  {
    question:
      "44. Gut tedavisinde kullanılan kolşisinin en sık görülen yan etkisi aşağıdakilerden hangisidir?",
    options: [
      "A) Hipoglisemi",
      "B) Diyare (ishal)",
      "C) Kaşıntı",
      "D) Hipotansiyon",
      "E) Retinopati",
    ],
    answer: 1,
  },
  {
    question:
      "45. Aşağıdakilerden hangisi yüksek dozlarda alındığında ürik asit düzeyini artırarak gut atağını tetikleyebilir?",
    options: [
      "A) Aspirin",
      "B) İbuprofen",
      "C) Paracetamol",
      "D) Metformin",
      "E) Ranitidin",
    ],
    answer: 0,
  },
  {
    question:
      "46. Aşağıdakilerden hangisi demir eksikliği anemisinin tedavisinde ilk basamakta kullanılan ilaçlardan biridir?",
    options: [
      "A) Siyanokobalamin",
      "B) Folik asit",
      "C) Ferröz sülfat",
      "D) Eritropoietin",
      "E) Desferroksamin",
    ],
    answer: 2,
  },
  {
    question:
      "47. Aşağıdaki durumların hangisinde parenteral demir tedavisi tercih edilmelidir?",
    options: [
      "A) Hafif demir eksikliği anemisi",
      "B) Oral demir intoleransı olan hastalarda",
      "C) Vitamin B12 eksikliği",
      "D) Talasemi taşıyıcılığı",
      "E) Hemolitik anemi",
    ],
    answer: 1,
  },
  {
    question:
      "48. Megaloblastik aneminin farmakolojik tedavisinde hangisi birlikte verilmelidir?",
    options: [
      "A) Demir + Eritropoietin",
      "B) Siyanokobalamin + Folik asit",
      "C) Folik asit + Demir",
      "D) Demir + B6 vitamini",
      "E) Eritropoietin + B6 vitamini",
    ],
    answer: 1,
  },
  {
    question:
      "49. Eritropoietin tedavisi en çok hangi hasta grubunda endikedir?",
    options: [
      "A) Akut lösemili hastalar",
      "B) Kronik böbrek yetmezliği hastaları",
      "C) Talasemi taşıyıcıları",
      "D) G6PD eksikliği olanlar",
      "E) Sirotik hastalar",
    ],
    answer: 1,
  },
  {
    question:
      "50. Aşağıdaki ilaçlardan hangisi demir preparatları ile birlikte alındığında demir emilimini azaltır?",
    options: [
      "A) C vitamini",
      "B) Askorbik asit",
      "C) Antiasitler",
      "D) Sitrik asit",
      "E) E vitamini",
    ],
    answer: 2,
  },
  {
    question:
      "51. Vitamin B12 eksikliği tedavisinde kullanılan başlıca farmasötik form hangisidir?",
    options: [
      "A) Oral folik asit",
      "B) Siyanokobalamin",
      "C) Ferröz glukonat",
      "D) Eritropoietin",
      "E) Demir dekstran",
    ],
    answer: 1,
  },
  {
    question:
      "52. Aşağıdakilerden hangisi demir tedavisinin yaygın bir yan etkisidir?",
    options: [
      "A) Hiperkalsemi",
      "B) Kabızlık",
      "C) Anksiyete",
      "D) Hipoglisemi",
      "E) Hiponatremi",
    ],
    answer: 1,
  },
  {
    question:
      "53. Aşağıdakilerden hangisi demir yüklenmesi tedavisinde kullanılan şelatör bir ajandır?",
    options: [
      "A) Ferröz sülfat",
      "B) Eritropoietin",
      "C) Deferasiroks",
      "D) Siyanokobalamin",
      "E) Folik asit",
    ],
    answer: 2,
  },
  {
    question:
      "54. Folik asit eksikliğine bağlı anemide, aşağıdaki durumlardan hangisi genellikle bulunmaz?",
    options: [
      "A) Makrositoz",
      "B) Nörolojik semptomlar",
      "C) Yorgunluk",
      "D) Dil papillalarının kaybı",
      "E) Retikülosit sayısında azalma",
    ],
    answer: 1,
  },
  {
    question:
      "55. Kronik hastalık anemisinde en sık tercih edilen tedavi yaklaşımı aşağıdakilerden hangisidir?",
    options: [
      "A) Demir sülfat",
      "B) Vitamin B12",
      "C) Eritropoietin analogları",
      "D) Folik asit",
      "E) Plazmaferez",
    ],
    answer: 2,
  },
  {
    question:
      "56. Aşağıdakilerden hangisi bağımlılık yapma potansiyeline sahip sedatiflerden biri değildir?",
    options: [
      "A) Diazepam",
      "B) Alprazolam",
      "C) Simvastatin",
      "D) Lorazepam",
      "E) Klordiazepoksit",
    ],
    answer: 2,
  },
  {
    question:
      "57. Opioid kullanım bozukluğunda doz aşımı tedavisi için hangisi kullanılabilir?",
    options: [
      "A) Nalokson",
      "B) Digoksin",
      "C) Propafenon",
      "D) Metotreksat",
      "E) Naproksen",
    ],
    answer: 0,
  },
  {
    question:
      "58. Opioid uygulanmasının yaygın yan etkileri arasında hangisi bulunmaz?",
    options: [
      "A) Sedasyon",
      "B) Konstipasyon",
      "C) Tolerans",
      "D) Bağımlılık",
      "E) Diyare",
    ],
    answer: 4,
  },
  {
    question:
      "59. Aşağıdaki ilaç gruplarından hangisi anksiyete bozukluklarının uzun süreli tedavisinde birinci basamak olarak tercih edilir?",
    options: [
      "A) Benzodiazepinler",
      "B) Antipsikotikler",
      "C) SSRI (Selektif serotonin geri alım inhibitörleri)",
      "D) TCA (Trisiklik antidepresanlar)",
      "E) Anksiyolitikler",
    ],
    answer: 2,
  },
  {
    question:
      "60. Valproik asit (sodyum valproat) ile ilgili hangisi doğrudur?",
    options: [
      "A) Sadece depresif dönemlerin tedavisinde etkilidir.",
      "B) Bipolar bozuklukta akut mani tedavisinde kullanılır.",
      "C) Hipomanik dönemde kullanımı kontrendikedir.",
      "D) Yalnızca tedaviye dirençli depresyonda kullanılır.",
      "E) Yalnızca epilepsi tedavisinde etkilidir.",
    ],
    answer: 1,
  },
  {
    question:
      "61. Aşağıdakilerden hangisi akne vulgaris'in patofizyolojisinde yer alan dört ana süreçten biri DEĞİLDİR?",
    options: [
      "A) Foliküler hiperkeratinizasyon",
      "B) Aşırı sebum üretimi",
      "C) Propionibacterium acnes kolonizasyonu",
      "D) Kollajen üretiminin artışı",
      "E) Enflamatuar mediyatör salınımı",
    ],
    answer: 3,
  },
  {
    question:
      "62. Aşağıdaki lezyonlardan hangisi non-inflamatuvar akne lezyonları arasında yer alır?",
    options: [
      "A) Nodül",
      "B) Püstül",
      "C) Papül",
      "D) Açık komedon",
      "E) Enflamatuvar makül",
    ],
    answer: 3,
  },
  {
    question:
      "63. Aşağıdakilerden hangisi akne oluşumunu artıran çevresel veya yaşam tarzı faktörlerinden biri değildir?",
    options: [
      "A) Yüksek glisemik indeksli besinler",
      "B) Stres ve düzensiz uyku",
      "C) Süt ve süt ürünleri tüketimi",
      "D) Güneş ışınları",
      "E) Yüksek oranda sebze ve meyve tüketimi",
    ],
    answer: 4,
  },
  {
    question:
      "64.Aşağıdakilerden hangisi sistemik antibiyotiklerden biri DEĞİLDİR?",
    options: [
      "A) Doksisiklin",
      "B) Azitromisin",
      "C) İzotretinoin",
      "D) Eritromisin",
      "E) Minosiklin",
    ],
    answer: 2,
  },
  {
    question:
      "65.Akne vulgaris tedavisinde kullanılan topikal retinoidlerden biri aşağıdakilerden hangisidir?",
    options: [
      "A) Azelaik asit",
      "B) Tretinoin",
      "C) Klindamisin",
      "D) Benzoil peroksit",
      "E) Dapson",
    ],
    answer: 1,
  },
  {
    question:
      "66.70 yaşında bir kadın hasta, influenza nedeniyle hastaneye yatırılıyor. Şiddetli solunum sıkıntısı ve pnömoni bulguları var. Hızlı bir şekilde intravenöz antiviral tedavi başlanması planlanıyor. Bu hasta için en uygun tedavi seçeneği aşağıdakilerden hangisidir?",
    options: [
      "A) Oseltamivir",
      "B) Zanamivir",
      "C) Peramivir",
      "D) Rimantadin",
      "E) Asiklovir",
    ],
    answer: 2,
  },
  {
    question:
      "67.45 yaşında bir erkek hasta, influenza tedavisi için antiviral ilaç reçete ediliyor. İlacın virüsün yayılmasını önlemek için nöraminidaz enzimini inhibe ettiği biliniyor. Bu hasta için reçete edilen ilaç aşağıdakilerden hangisi olabilir?",
    options: [
      "A) Oseltamivir",
      "B) Ampisilin",
      "C) Metformin",
      "D) Losartan",
      "E) Omeprazol",
    ],
    answer: 0,
  },
  {
    question:
      "68.65 yaşında bir erkek hasta, ani başlayan yüksek ateş, şiddetli kas ağrıları ve kuru öksürük şikayetleriyle başvuruyor. Influenza A tanısı konuluyor. Hasta, kronik obstrüktif akciğer hastalığı (KOAH) nedeniyle takip ediliyor. Bu hasta için en uygun antiviral tedavi seçeneği aşağıdakilerden hangisidir?",
    options: [
      "A) Ampisilin",
      "B) Zanamivir",
      "C) Asiklovir",
      "D) Penisilin",
      "E) Sefalosporin",
    ],
    answer: 1,
  },
  {
    question:
      "69.8 yaşında bir kız çocuğu, 39°C ateş, boğaz ağrısı ve halsizlik şikayetleriyle getiriliyor. Hızlı influenza testi pozitif çıkıyor. Belirtilerin başlamasından 36 saat sonra tedaviye başlanıyor. Bu çocuk için en uygun tedavi seçeneği aşağıdakilerden hangisidir?",
    options: [
      "A) Oseltamivir",
      "B) Tetrasiklin",
      "C) Parasetamol",
      "D) İbuprofen",
      "E) Amoksisilin",
    ],
    answer: 0,
  },
  {
    question:
      "70.32 yaşında hamile bir kadın, influenza benzeri semptomlarla başvuruyor. Testler sonucunda influenza B tanısı konuluyor. Hastanın ateşi 38.5°C ve öksürüğü şiddetli. Bu hasta için en güvenli antiviral tedavi seçeneği aşağıdakilerden hangisidir?",
    options: [
      "A) Zanamivir",
      "B) Peramivir",
      "C) Rimantadin",
      "D) Tetrasiklin",
      "E) Siprofloksasin",
    ],
    answer: 0,
  },
  {
    question:
      "71.Aşağıdaki antiviral ilaçlardan hangisi nöraminidaz inhibitörü olarak influenza tedavisinde kullanılmaz?",
    options: [
      "A) Oseltamivir",
      "B) Zanamivir",
      "C) Peramivir",
      "D) Rimantadin",
      "E) Ampisilin",
    ],
    answer: 4,
  },
  {
    question:
      "72.Influenza tedavisinde kullanılan nöraminidaz inhibitörlerinin etki mekanizması aşağıdakilerden hangisidir?",
    options: [
      "A) Virüsün hücreye girişini engellemek",
      "B) Virüsün RNA replikasyonunu inhibe etmek",
      "C) Nöraminidaz enzimini inhibe ederek virüsün yayılmasını önlemek",
      "D) Bağışıklık sistemini direkt uyarmak",
      "E) Virüsün kapsid proteinlerini parçalamak",
    ],
    answer: 2,
  },
  {
    question:
      "73.Aşağıdaki ilaçlardan hangisi inhalasyon yoluyla uygulanan bir nöraminidaz inhibitörüdür?",
    options: [
      "A) Oseltamivir",
      "B) Peramivir",
      "C) Zanamivir",
      "D) Rimantadin",
      "E) Asiklovir",
    ],
    answer: 2,
  },
  {
    question:
      "74.Antiviral tedavinin influenza hastalarında en etkili olabilmesi için ne zaman başlanmalıdır?",
    options: [
      "A) Belirtiler başladıktan 1 hafta sonra",
      "B) Belirtiler başladıktan 48 saat içinde",
      "C) Sadece hastaneye yatış gerektiren durumlarda",
      "D) Aşılamadan hemen sonra",
      "E) Kuluçka döneminde",
    ],
    answer: 1,
  },
  {
    question:
      "75.Aşağıdaki gruplardan hangisi influenza için nöraminidaz inhibitörü tedavisinde öncelikli olarak önerilmez?",
    options: [
      "A) 65 yaş üstü bireyler",
      "B) Kronik akciğer hastalığı olanlar",
      "C) Bağışıklık sistemi baskılanmış hastalar",
      "D) Grip aşısı olan sağlıklı genç yetişkinler",
      "E) Hamile kadınlar",
    ],
    answer: 3,
  },
  {
    question:
      "76.Aşağıdakilerden hangisi Sınıf 1 antiaritmik ilaçlardan biri değildir?",
    options: [
      "A) Lidokain",
      "B) Kinidin",
      "C) Flekainid",
      "D) Verapamil",
      "E) Disopiramid",
    ],
    answer: 3,
  },
  {
    question:
      "77.Beta blokerlerin aritmi tedavisindeki temel etkisi aşağıdakilerden hangisidir?",
    options: [
      "A) Kalp hızını artırmak",
      "B) AV düğüm ileti hızını artırmak",
      "C) Kalp hızını azaltmak",
      "D) Kalp hızını azaltmak",
      "E) Sodyum kanalını bloke etmek",
    ],
    answer: 3,
  },
  {
    question:
      "78.QT aralığını uzatarak ciddi aritmilere neden olabilecek ilaç sınıfı aşağıdakilerden hangisidir?",
    options: [
      "A) Sınıf 1A",
      "B) Sınıf 2",
      "C) Sınıf 3",
      "D) Sınıf 4",
      "E) Diüretikler",
    ],
    answer: 2,
  },
  {
    question:
      "79.Aşağıdaki ilaçlardan hangisi supraventriküler taşikardide en etkili antiaritmik ajandır?",
    options: [
      "A) Digoksin",
      "B) Diltiazem",
      "C) Adenozin",
      "D) Amiodaron",
      "E) Sotalol",
    ],
    answer: 2,
  },
  {
    question: "80.Amiodaron ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
    options: [
      "A) Kısa etkili bir beta bloker ajandır",
      "B) Sınıf 1B grubunda yer alır",
      "C) QT aralığını kısaltır",
      "D) En uzun etkili antiaritmik ilaçlardan biridir",
      "E) Yalnız atriyal fibrilasyonda kullanılır",
    ],
    answer: 3,
  },
  {
    question:
      "81.Aşağıdaki ilaç çiftlerinden hangisi, radyoterapi sırasında radyosensitizer olarak kullanılarak tedavinin etkinliğini artırabilir?",
    options: [
      "A) Gefitinib – Erlotinib",
      "B) Cisplatin – Prosiklit",
      "C) Osimertinib – Crizotinib",
      "D) Atezolizumab – Nivolumab",
      "E) Paclitaxel – Docetaxel",
    ],
    answer: 1,
  },
  {
    question:
      "82.EGFR mutasyonu pozitif bir akciğer kanseri hastasında, aşağıdakilerden hangisi ilk basamak hedefe yönelik tedavi seçeneklerinden biridir?",
    options: [
      "A) Nivolumab",
      "B) Crizotinib",
      "C) Erlotinib",
      "D) Pembrolizumab",
      "E) Alectinib",
    ],
    answer: 2,
  },
  {
    question:
      "83.Kemoterapinin akciğer kanseri tedavisindeki temel etki mekanizması aşağıdakilerden hangisidir?",
    options: [
      "A) Bağışıklık sistemini uyararak kanser hücrelerini hedefler",
      "B) DNA replikasyonunu veya hücre bölünmesini engeller",
      "C) Spesifik sinyal yollarını bloke eder",
      "D) Kanser hücrelerinin PD-L1 ekspresyonunu azaltır",
      "E) Kanser hücrelerine oksidatif stres uygular.",
    ],
    answer: 1,
  },
  {
    question:
      "84.Aşağıdaki tedavilerden hangisi, genetik mutasyon taşıyan akciğer kanseri hastalarında kişiselleştirilmiş bir yaklaşım sunar ve genellikle daha az yan etkilidir?",
    options: [
      "A) Kemoterapi",
      "B) Radyoterapi",
      "C) Cerrahi",
      "D) Hedefe Yönelik Tedavi",
      "E) İmmünoterapi",
    ],
    answer: 3,
  },
  {
    question:
      "85.İmmünoterapiyle ilgili olarak aşağıdaki ifadelerden hangisi doğrudur?",
    options: [
      "A) Sadece erken evre hastalarda kullanılır",
      "B) Tümör hücresinin DNA'sına direkt hasar verir",
      "C) PD-1 veya PD-L1 inhibitörleri kullanılarak bağışıklık sistemi aktive edilir",
      "D) EGFR mutasyonlarını baskılayarak etki gösterir",
      "E) Kanserli dokunun fiziksel olarak çıkarılmasıdır",
    ],
    answer: 2,
  },
  {
    question:
      "86. 1. Suportif 2. Semptomatik 3. Spesifik 4. İdiyopatik Yukarıdakilerden hangileri diyarenin tedavisinde kullanılan tedavi yöntemlerindendir? ",

    options: ["A) 1", "B) 1 ve 2", "C) 1, 2 ve 3", "D) hepsi", "E) 2 ve 4"],
    answer: 2,
  },
  {
    question: "87.Diyarenin semptomatik tedavisinde hangisi kullanılmaz?",
    options: [
      "A) opiatlar",
      "B) sentetik antidiyareikler",
      "C) antikolinerjikler",
      "D) adsorbanlar",
      "E) magnezyum tuzları",
    ],
    answer: 4,
  },
  {
    question: "88.Aşağıdakilerden hangisi yanlıştır?",
    options: [
      "A) Kaolin doğal hidrate alüminyum silikat olup toz tablet süspansiyon şeklinde kullanılır",
      "B) Pektin elma ve turunçgillerin kabuğundan elde edilen bir polimerdir",
      "C) Opiadların başlıcaları morfin ve kodeindir",
      "D) Opium tentürü % 55 morfin içerir",
      "E) Loperamit hcl kısmi bağırsak tıkanıklığı olan hastalarda kontrendikedir",
    ],
    answer: 3,
  },
  {
    question:
      "89. 1- Sekretuvar Diyare 2- Osmotik Diyare 3- Enflamatuvar (Eksüdatif) Diyare 4- Motilite Bozukluklarına Bağlı Diyare Yukarıdakilerden hangisi yada hangileri diyarenin mekanizmalarındandır? ",
    options: ["A) 1 ve 2", "B) 2 ve 3", "C) 1,2 ve 3", "D) 1 ve 3", "E) Hepsi"],
    answer: 4,
  },
  {
    question:
      "90.Aşağıdakilerden hangisi Sekretuvar Diyarenin nedenlerinden değildir?",
    options: [
      "A) Tümörlerden Salınan Peptitler",
      "B) Safra Tuzları ve Laksatifler",
      "C) Viral Ajanlar",
      "D) Bakteriyal Toksinler",
      "E) Grip",
    ],
    answer: 4,
  },
  {
    question:
      "91. 1. Aşağıdakilerden hangisi Tip 1 diyabetin temel özelliklerinden biridir? ",
    options: [
      "A) İnsülin direnci ve obezite",
      "B) Hipoglisemiye yatkınlık",
      "C) Otoimmün beta hücre yıkımı",
      "D) Hiperinsülinemi",
      "E) Genetik olmayan faktörlerle gelişim",
    ],
    answer: 4,
  },
  {
    question:
      "92.Tip 2 diyabetle ilgili aşağıdaki ifadelerden hangisi yanlıştır? ",
    options: [
      "A) Genellikle erişkin yaşta başlar",
      "B) Ketoasidoz sık görülür",
      "C) İnsülin direnci rol oynar",
      "D) Mikrovasküler komplikasyon riski taşır",
      "E) Hiperozmolar koma gelişebilir",
    ],
    answer: 1,
  },
  {
    question:
      "93.Aşağıdaki hormonlardan hangisi GLP-1 reseptör agonistlerinin etkileri arasında yer almaz? ",
    options: ["A) İnsülin", "B) Glukagon", "C) Grelin", "D) Gastrin", "E) GIP"],
    answer: 3,
  },
  {
    question:
      "94.Metformin ile ilgili olarak aşağıdakilerden hangisi doğrudur? ",
    options: [
      "B) Kilo alımına neden olur",
      "C) Laktik asidoz riski taşır",
      "D) Pankreas beta hücrelerini uyarır",
      "E) Sadece intravenöz uygulanır",
    ],
    answer: 2,
  },
  {
    question:
      "95.Gestasyonel diyabetin taraması hangi haftalar arasında önerilmektedir? ",
    options: [
      "A) 12-14. haftalar",
      "B) 16-18. haftalar",
      "C) 20-22. haftalar",
      "D) 24-28. haftalar",
      "E) 30-34. haftalar",
    ],
    answer: 3,
  },
  {
    question:
      "96.Aşağıdakilerden hangisi mikrovasküler komplikasyonlardan biri değildir? ",
    options: [
      "A) Nefropati",
      "B) Retinopati",
      "C) Periferik nöropati",
      "D) Koroner arter hastalığı",
      "E) Diyabetik ayak ülseri",
    ],
    answer: 3,
  },
  {
    question:
      "97.DPP-4 inhibitörleri ile ilgili olarak aşağıdakilerden hangisi yanlıştır? ",
    options: [
      "A) GLP-1'in yıkımını engellerler",
      "B) Hipoglisemi riski düşüktür",
      "C) Oral yolla kullanılır",
      "D) Kilo alımına neden olur",
      "E) Günde 1 kez alınabilir",
    ],
    answer: 3,
  },
  {
    question:
      "98.İnsülinin 1800 kuralına göre düzeltme dozu hesaplanırken ne dikkate alınır? ",
    options: [
      "A) Vücut kitle indeksi",
      "B) Kan şekeri seviyesi ve hedef farkı",
      "C) HbA1c değeri",
      "D) Karbonhidrat alımı",
      "E) Pankreas rezervi",
    ],
    answer: 1,
  },
  {
    question:
      "99.Aşağıdakilerden hangisi inhaler insülinin avantajlarından biridir? ",
    options: [
      "A) Astım hastalarında güvenle kullanılır",
      "B) Hipoglisemi riski düşüktür",
      "C) Buzdolabında saklanmasına gerek yoktur",
      "D) Uzun etkili insülindir",
      "E) Genellikle Tip 1 diyabette tercih edilir",
    ],
    answer: 2,
  },
  {
    question:
      "100.SGLT-2 inhibitörleri hangi organ üzerinden etki ederek glukoz düzeyini düşürür? ",

    options: [
      "A) Karaciğer",
      "B) Pankreas",
      "C) Kas dokusu",
      "D) Bağırsak",
      "E) Böbrek",
    ],
    answer: 4,
  },
  {
    question:
      "101.Migrenin farmakolojik tedavisinde aşağıdaki grup ilaçlardan hangisi kullanılmaz ",
    options: [
      "A) anti-emetikler",
      "B) ergot alkaloid türevleri",
      "C) analjezikler",
      "D) anti-konvülzanlar",
      "E) opioidler",
    ],
    answer: 3,
  },
  {
    question:
      "102.Aşağıdakilerden hangisi migrenin farmakolojik olmayan tedavileri arasında yer almaz ? ",
    options: [
      "A) Gevşeme terapisi",
      "B) Tetikleyici lerden kaçınmak",
      "C) kognitif davranışçı terapi",
      "D) sumatriptan kullanımı",
      "E) stres yönetimi",
    ],
    answer: 3,
  },
  {
    question:
      "103.Migrenin çözülme fazında aşağıdakilerden hangisi sıklıkla görülür? ",
    options: [
      "A) görsel aura",
      "B) kusma",
      "C) halsizlik",
      "D) fotofobi",
      "E) baş dönmesi",
    ],
    answer: 2,
  },
  {
    question:
      "104.Aşağıdakilerden hangisi migrenin baş ağrısı ( atak ) fazında en sık görülen  semptomlardan biri değildir ? ",

    options: [
      "A) Tek taraflı zonklayıcı baş ağrısı",
      "B) Bulantı ve kusma",
      "C) Fotofobi",
      "D) Görme kaybı",
      "E) Ses hassasiyeti",
    ],
    answer: 3,
  },
  {
    question:
      "105.Aşağıdakilerden hangisi CGRP antagonistlerinin avantajlarından biri değildir ? ",
    options: [
      "A) Aylık enjeksiyon şeklinde uygulanabilir",
      "B) Daha az yan etki profiline sahiptir",
      "C) Geleneksel tedavilere dirençli hastalarda kullanılabilir",
      "D) Genellikle intravenöz anestezi ile uygulanır",
      "E) Hasta uyumunu arttırabilir.",
    ],
    answer: 3,
  },
  {
    question:
      "106.Aşağıdakilerden hangisi glokom tedavisinde aköz hümör üretimini azaltarak etki gösteren bir ilaç değildir? ",
    options: [
      "A) Betoksolol",
      "B) Brinzolamid",
      "C) Latanoprost",
      "D) Apraklonidin",
      "E) Timolol",
    ],
    answer: 2,
  },
  {
    question:
      "107.Kapalı açılı glokomu olan bir hastada göz içi basıncını akut şekilde artırabileceği için aşağıdaki ilaç gruplarından hangisi öncelikle kaçınılması gereken ilaçlar arasında yer alır? ",
    options: [
      "A) Beta blokerler",
      "B) Antikolinerjikler",
      "C) Prostaglandin analogları",
      "D) Karbonik anhidraz inhibitörleri",
      "E) Kolinerjik agonistler",
    ],
    answer: 1,
  },
  {
    question:
      "108.Glokom hastalarında hasta uyumunu olumsuz etkileyen en önemli nedenlerden biri aşağıdakilerden hangisidir? ",
    options: [
      "A) Tedavide kullanılan ilaçların kısa etkili olması",
      "B) İlaçların yalnızca intravenöz yolla uygulanabilmesi",
      "C) Glokomun asemptomatik seyretmesi",
      "D) Tüm hastalarda cerrahi girişim zorunlu olması",
      "E) Glokomun akut enfeksiyonlara neden olması",
    ],
    answer: 2,
  },
  {
    question:
      "109.Aşağıdakilerden hangisi farmakoterapiye yanıt vermeyen konjenital glokomun tedavisinde tercih edilen ilk basamak tedavi yöntemidir? ",
    options: [
      "A) Prostaglandin analogları",
      "B) Beta blokerler",
      "C) Trabekülektomi",
      "D) Cerrahi girişim",
      "E) Karbonik anhidraz inhibitörleri",
    ],
    answer: 3,
  },
  {
    question:
      "110.Aşağıdaki ilaçlardan hangisi kapalı açılı glokomlu bir hastada göz içi basıncını artırma riski taşıdığı için dikkatle kullanılmalıdır? ",
    options: [
      "A) Timolol",
      "B) Brimonidin",
      "C) Sempatomimetikler",
      "D) Latanoprost",
      "E) Ekotiyofat",
    ],
    answer: 2,
  },
  {
    question:
      "111.Narkolepsinin farmakolojik tedavisiyle ilgili aşağıdakilerden hangisi yanlıştır? ",
    options: [
      "A) Amfetaminler ve metilfenidat GAU (Gündüz Aşırı Uykululuk) tedavisinde kullanılırlar",
      "B) Modafinil GAU'nun (Gündüz Aşırı Uykululuk) standart tedavisidir ancak katapleksiyi tedavi etmez.",
      "C) Atomoksetin çocuklarda katapleksi ve uyku halini iyileştirebilir.",
      "D) Sodyum oksibat GAU (Gündüz Aşırı Uykululuk) halini iyileştiriri. Katapleksiyi azaltır.",
      "E) Benzodiazepinler GAU (Gündüz Aşırı Uykululuk) tedavisinde kullanılarak katapleksiyi azaltır.",
    ],
    answer: 4,
  },
  {
    question:
      "112.Aşağıdakilerden hangisi insomnia tedavisinde kullanılan ilaç gruplarından değildir? ",
    options: [
      "A) Amfetaminler",
      "B) Benzodiazepinler",
      "C) Antidepresanlar",
      "D) Antihistaminikler",
      "E) Oreksin reseptör antagonistleri",
    ],
    answer: 0,
  },
  {
    question:
      "113. İnsomnia tedavisinde yer alan benzodiazepin grubu ilaçlardan hangisi 6 aya kadar gece kullanılabilen FDA tarafından uzun süreli insomnia tedavisi için uygun görülen ilk uyku ilacıdır? ",
    options: [
      "A) Zolpidemin",
      "B) Eszoplikon",
      "C) Zaleplon",
      "D) Triazolam",
      "E) Kuazepam",
    ],
    answer: 1,
  },
  {
    question:
      "114.Aşağıdakilerden hangisi tıkayıcı uyku apnesi (TUA) için doğrudur?1. TUA hayatı tehdit eden ve tekrarlayan solunum durması ile karakterize bir hastalıktır. 2. TUA obezite veya üst solunum yolu lezyonları, bademciklerin büyümesi, amiloidoz ve hipotiroidizm kaynaklı olabilir. 3. TUA hastaları genellikle Gündüz Aşırı Uykululuk (GAU) halinden şikayet ederler.  4. İlaç tedavisi yoktur. Uykuyu kötüleştiren ilaçlardan kaçınılmalıdır.  ",
    options: [
      "A) I ve II",
      "B) I, II ve III",
      "C) Yalnız IV",
      "D) I,II,III ve IV",
      "E) Hiçbiri",
    ],
    answer: 3,
  },
  {
    question:
      "115.Sedatif, anksiyolitik,kas gevşetici ve antikonvülsan özelliklere sahip oldukları için ikinci evre uykusunu arttırırlar ,REM ve delta uykusunu azaltırlar. Yukarıda bilgisi verilen ilaç grubu nedir ve hangi hastalığın tedavisinde kullanılır? ",
    options: [
      "A) Benzodiazepinler – Tıkayıcı uyku apnesi",
      "B) Oreksin reseptör antagonistleri – İnsomnia",
      "C) Benzodiazepin hipnotikleri – İnsomnia",
      "D) Amfetaminler – Narkolepsi",
      "E) Antidepresanlar – Narkolepsi",
    ],
    answer: 2,
  },
  {
    question:
      "116.Aşağıdakilerden hangisi kabızlığa neden olabilen ilaç gruplarından biridir? ",
    options: [
      "A) Beta blokerler",
      "B) Antibiyotikler",
      "C) Opioid analjezikler",
      "D) Antikoagülanlar",
      "E) Antihipertansiflerin ACE inhibitörleri",
    ],
    answer: 2,
  },
  {
    question: "117.Aşağıdakilerden hangisi osmotic laksatif örneğidir? ",
    options: [
      "A) Senna",
      "B) Dokusat sodyum ",
      "C) Laktuloz",
      "D) Prukaloprid",
      "E) Domperidon",
    ],
    answer: 2,
  },
  {
    question:
      "118. 5-HT4 reseptör agonistlerinin konstipasyon tedavisindeki etkisi aşağıdakilerden hangisiyle açıklanır? ",

    options: [
      "A) Su emilimini artırması",
      "B) Bağırsak kaslarını gevşetmesi",
      "C) Bağırsak hareketliliğini artırması",
      "D) Yağ emilimini azaltması",
      "E) Asit salgısını inhibe etmesi",
    ],
    answer: 2,
  },
  {
    question:
      "119. Aşağıdakilerden hangisi doğal bir uyarıcı laksatif olarak kullanılmaktadır? ",
    options: [
      "A) Rezene",
      "B) Sinameki",
      "C) Papaya",
      "D) Keten tohumu",
      "E) Ispanak",
    ],
    answer: 1,
  },
  {
    question:
      "120. Aşağıdakilerden hangisi konstipasyonun farmakolojik tedavisinde prokinetik ilaçlar grubundandır? ",
    options: [
      "A) Alvimopan",
      "B) Psyllium",
      "C) Metoklopramid",
      "D) Laktuloz",
      "E) Dokusat sodyum",
    ],
    answer: 2,
  },
  {
    question:
      "121. Benzodiazepinlerin uzun süreli kullanımında en çok dikkat edilmesi gereken durum aşağıdakilerden hangisidir? ",
    options: [
      "A) Cilt döküntüsü",
      "B) Glokom riski",
      "C) Psödoparkinsonizm",
      "D) Bağımlılık gelişimi",
      "E) Hipoglisemi",
    ],
    answer: 3,
  },
  {
    question:
      "122. Aşağıdaki ilaçlardan hangisi serotonin ve noradrenalin geri alım inhibitörü (SNRI) grubundadır? ",
    options: [
      "A) Sertralin",
      "B) Fluoksetin",
      "C) Venlafaksin",
      "D) Klomipramin",
      "E) Buspiron",
    ],
    answer: 2,
  },
  {
    question:
      "123. Beta blokerler anksiyete tedavisinde en çok hangi belirtilerin kontrolünde kullanılır? ",
    options: [
      "A) Uyku problemleri",
      "B) Depresif duygu durum",
      "C) Fiziksel belirtiler (çarpıntı, titreme)",
      "D) Takıntılı düşünceler",
      "E) Sosyal çekinme",
    ],
    answer: 2,
  },
  {
    question:
      "124. Aşağıdakilerden hangisi SSRI grubu ilaçlara örnek değildir? ",
    options: [
      "A) Paroksetin",
      "B) Sitalopram",
      "C) Duloksetin",
      "D) Sertralin",
      "E) Fluoksetin",
    ],
    answer: 2,
  },
  {
    question:
      "125. Trisiklik antidepresanlarla ilgili aşağıdaki ifadelerden hangisi doğrudur? ",

    options: [
      "A) İlk tercih olarak anksiyete tedavisinde sık kullanılır.",
      "B) Uyku düzenini tamamen düzeltir.",
      "C) Göz içi basıncı artırabileceği için glokomda dikkatli kullanılmalıdır.",
      "D) Herhangi bir yan etkisi yoktur.",
      "E) SNRI grubuyla birlikte güvenle kullanılır.",
    ],
    answer: 2,
  },
  {
    question:
      "126. Buspiron ile ilgili aşağıdaki ifadelerden hangisi yanlıştır? ",
    options: [
      "A) Etkisi hızlı başlar, 1-2 günde hissedilir.",
      "B) Sersemlik ve baş dönmesine neden olabilir.",
      "C) 3-4 hafta içinde etkisini gösterir.",
      "D) Epilepsi hastalarında kontrendikedir.",
      "E) Anksiyete tedavisinde kullanılan bir azapiron türevidir.",
    ],
    answer: 0,
  },
  {
    question:
      "127.Aşağıdaki ilaçlardan hangisi anksiyete tedavisinde yaygın olarak kullanılmasına rağmen bağımlılık riski nedeniyle son yıllarda daha az tercih edilmektedir? ",
    options: [
      "A) Fluoksetin",
      "B) Risperidon",
      "C) Diazepam",
      "D) Venlafaksin",
      "E) Buspiron",
    ],
    answer: 2,
  },
  {
    question:
      "128. Anksiyete bozukluklarında genellikle düşük dozlarda kullanılan antipsikotiklerden biri aşağıdakilerden hangisidir? ",
    options: [
      "A) Haloperidol",
      "B) Olanzapin",
      "C) Amitriptilin",
      "D) Propranolol",
      "E) Sitalopram",
    ],
    answer: 1,
  },
  {
    question:
      "129. Aşağıdakilerden hangisi SNRI'ların sık görülen yan etkilerinden biri değildir? ",
    options: [
      "A) Tansiyon artışı",
      "B) Ağız kuruluğu",
      "C) Uyku hali",
      "D) Terleme",
      "E) Cinsel isteksizlik",
    ],
    answer: 2,
  },
  {
    question:
      "130. Anksiyete bozukluklarının tedavisinde en sık kullanılan farmakolojik ajanlardan biri olan seçici serotonin geri alım inhibitörlerinin (SSRI) etki mekanizması nedir? ",
    options: [
      "A) Serotonin reseptörlerini doğrudan aktive eder",
      "B) Serotoninin presinaptik nörona geri alımını sağlayan 5-HTT proteinini inhibe ederek kullanılabilir serotonin seviyesini arttırır",
      "C) GABA reseptörlerini inhibe eder",
      "D) Dopamin salınımını artırır",
      "E) Norepinefrin geri alımını tamamen durdurur",
    ],
    answer: 1,
  },
  {
    question:
      "131. Anksiyete bozukluklarının tedavisinde kullanılan serotonin-norepinefrin geri alım inhibitörlerinin (SNRI) etki mekanizması nedir? ",
    options: [
      "A) Beyindeki serotonin ve norepinefrin seviyelerini artırarak nörotransmisyonu düzenler",
      "B) GABA reseptörlerini aktive eder",
      "C) Dopamin salınımını inhibe eder",
      "D) Histamin reseptörlerini bloke eder",
      "E) Sadece serotonin reseptörlerini doğrudan aktive eder",
    ],
    answer: 0,
  },
  {
    question:
      "132. Anksiyete tedavisinde antidepresanların benzodiazepinlere kıyasla avantajı nedir? ",
    options: [
      "A) Daha hızlı etki gösterirler",
      "B) Daha az yan etkiye sahiptirler",
      "C) Uzun süreli tedavi için daha uygundurlar ve bağımlılık riski düşüktür",
      "D) Sadece akut ataklarda etkilidirler",
      "E) GABA reseptörlerini doğrudan etkilerler.",
    ],
    answer: 2,
  },
  {
    question:
      "133. KOAH tedavisinde kısa etkili inhaler beta-2 agonistler ve antikolinerjikler hangi amaçla kullanılır? ",
    options: [
      "A) Hastalığın ilerlemesini durdurmak",
      "B) Alevlenme dönemlerinde bronkodilatasyon sağlamak",
      "C) Uzun süreli inflamasyonu baskılamak",
      "D) Mukus üretimini artırmak",
      "E) Solunum kaslarını güçlendirmek",
    ],
    answer: 1,
  },
  {
    question:
      "134.Aşağıdakilerden hangisi KOAH tedavisinde uzun etkili antikolinerjik ilaçlara örnektir? ",
    options: [
      "A) Salbutamol",
      "B) Teofilin",
      "C) Tiotropium",
      "D) Budesonid",
      "E) Formoterol",
    ],
    answer: 2,
  },
  {
    question:
      "135. Aşağıdakilerden hangisi KOAH farmakolojik olmayan tedavi seçeneklerinden biri değildir? ",
    options: [
      "A) Sigaranın bırakılması",
      "B) Pulmoner rehabilitasyon",
      "C) Uzun etkili beta-2 agonist kullanımı",
      "D) Pnömoni aşısı",
      "E) Düzenli egzersiz",
    ],
    answer: 2,
  },
  {
    question:
      "136. KOAH'ta inhale kortikosteroidler hangi hasta grubunda özellikle önerilir? ",
    options: [
      "A) Hafif KOAH (Evre A)",
      "B) Sık alevlenme",
      "C) Yeni tanı alan tüm hastalar",
      "D) Sigara kullanmayan hastalar",
      "E) Düzenli egzersiz",
    ],
    answer: 1,
  },
  {
    question:
      "137. Fiziksel tedaviyi artırmak, pulmoner rehabilitasyon, evde uzun süreli noninvazif mekanik ventilasyon ve sigaranın bırakılması KOAH'da kullanılan farmakolojik olmayan tedavi yöntemlerindendir. Bu maddelerden hangisi/hangileri doğrudur? ",
    options: [
      "A) Yalnız I",
      "B) I ve II",
      "C) I, II ve III",
      "D) Hepsi",
      "E) Hiçbiri",
    ],
    answer: 3,
  },
];

export default function App() {
  const [selected, setSelected] = useState({});

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "#ffffff",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2d3748",
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "40px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          insta: lambdavnc (hertürlü yazılım işleri itinayla yapılır...)
        </h1>

        {questions.map((q, qi) => (
          <div
            key={qi}
            style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "16px",
              padding: "30px",
              marginBottom: "30px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
              transition: "all 0.3s ease",
            }}
          >
            <h2
              style={{
                color: "#2d3748",
                fontSize: "1.2rem",
                fontWeight: "600",
                marginBottom: "20px",
                lineHeight: "1.6",
                textAlign: "left",
              }}
            >
              {q.question}
            </h2>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {q.options.map((opt, oi) => {
                const isSelected = selected[qi] === oi;
                const isCorrect = q.answer === oi;
                const showResult = selected[qi] !== undefined;

                return (
                  <button
                    key={oi}
                    onClick={() => setSelected({ ...selected, [qi]: oi })}
                    style={{
                      padding: "16px 20px",
                      borderRadius: "12px",
                      border: "2px solid",
                      backgroundColor: showResult
                        ? isCorrect
                          ? "#d1fae5"
                          : isSelected
                          ? "#fee2e2"
                          : "#ffffff"
                        : isSelected
                        ? "#e0e7ff"
                        : "#ffffff",
                      borderColor: showResult
                        ? isCorrect
                          ? "#10b981"
                          : isSelected
                          ? "#ef4444"
                          : "#e2e8f0"
                        : isSelected
                        ? "#6366f1"
                        : "#e2e8f0",
                      color: showResult
                        ? isCorrect
                          ? "#065f46"
                          : isSelected
                          ? "#991b1b"
                          : "#4a5568"
                        : isSelected
                        ? "#4338ca"
                        : "#4a5568",
                      cursor: "pointer",
                      textAlign: "left",
                      fontSize: "1rem",
                      fontWeight: isSelected ? "600" : "500",
                      transition: "all 0.2s ease",
                      transform: isSelected ? "translateX(4px)" : "none",
                      boxShadow: isSelected
                        ? "0 4px 12px rgba(0,0,0,0.1)"
                        : "0 2px 4px rgba(0,0,0,0.05)",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.target.style.backgroundColor = "#f1f5f9";
                        e.target.style.borderColor = "#cbd5e1";
                        e.target.style.transform = "translateX(2px)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.target.style.backgroundColor = "#ffffff";
                        e.target.style.borderColor = "#e2e8f0";
                        e.target.style.transform = "none";
                      }
                    }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {selected[qi] !== undefined && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor:
                    selected[qi] === q.answer ? "#d1fae5" : "#fee2e2",
                  border: `2px solid ${
                    selected[qi] === q.answer ? "#10b981" : "#ef4444"
                  }`,
                  textAlign: "center",
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: selected[qi] === q.answer ? "#065f46" : "#991b1b",
                }}
              >
                {selected[qi] === q.answer ? "✅ Doğru!" : "❌ Yanlış!"}
                {selected[qi] !== q.answer && (
                  <div style={{ marginTop: "8px", fontSize: "0.9rem" }}>
                    Doğru cevap: {q.options[q.answer]}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            padding: "20px",
            backgroundColor: "#f8fafc",
            borderRadius: "16px",
            border: "1px solid #e2e8f0",
          }}
        >
          <p style={{ color: "#64748b", fontSize: "1rem", margin: 0 }}>
            Toplam {Object.keys(selected).length} / {questions.length} soru
            cevaplandı
          </p>
          {Object.keys(selected).length === questions.length && (
            <p
              style={{
                color: "#059669",
                fontSize: "1.1rem",
                fontWeight: "600",
                marginTop: "10px",
                margin: "10px 0 0 0",
              }}
            >
              🎉 Tüm soruları tamamladınız!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";

const questions = [
  {
    question:
      "1. Azot vücutta en çok hangi yapıların sentezinde temel bileşen olarak yer alır?",
    options: [
      "A) Yağ asitleri",
      "B) Mineraller",
      "C) Amino asitler",
      "D) Karbonhidratlar",
      "E) Vitaminler",
    ],
    answer: 2,
  },
  {
    question:
      "2. Aşağıdaki açıklamalardan hangisi Üre Döngüsü’nün bir özelliği değildir?",
    options: [
      "A) Karaciğerde gerçekleşir",
      "B) Amonyağı daha toksik bir maddeye dönüştürür",
      "C) Mitokondri ve sitoplazmada iki evresi vardır",
      "D) Amonyak, üreye çevrilerek vücuttan atılır",
      "E) Protein metabolizmasının atık ürünlerini uzaklaştırır",
    ],
    answer: 1,
  },
  {
    question:
      "3. Aşağıdaki azotlu bileşiklerden hangisi enerji metabolizmasında yer alır?",
    options: [
      "A) Serotonin",
      "B) Kreatin",
      "C) Arginin",
      "D) Tirozin",
      "E) Urasil",
    ],
    answer: 1,
  },
  {
    question:
      "4. Aşağıdakilerden hangisi yüksek BUN (Kan Üre Azotu) seviyesinin olası bir nedeni değildir?",
    options: [
      "A) Böbrek yetmezliği",
      "B) Dehidrasyon",
      "C) Aşırı protein tüketimi",
      "D) Aşırı sıvı alımı",
      "E) Bazı ilaçların yan etkisi",
    ],
    answer: 3,
  },
  {
    question:
      "5. Azot metabolizmasında glutamin sentetaz enziminin rolü aşağıdakilerden hangisidir?",
    options: [
      "A) Üre sentezini doğrudan gerçekleştiren enzimdir",
      "B) Glutaminden glutamat sentezler",
      "C) Amonyağı doğrudan DNA’ya bağlar",
      "D) Glutamattan glutamin sentezini katalizleyerek azotu biyomoleküllere entegre eder",
      "E) Amonyağın kana geçişini sağlayan taşıyıcıdır",
    ],
    answer: 3,
  },
  {
    question:
      "6. Aşağıdakilerden hangisi kalsiyumun vücuttaki başlıca görevlerinden biri değildir?",
    options: [
      "A) Kas kasılması",
      "B) Sinir iletimi",
      "C) Kalp ritminin düzenlenmesi",
      "D) DNA ve RNA sentezi",
      "E) Kan pıhtılaşması",
    ],
    answer: 3,
  },
  {
    question: "7. Kalsiyum homeostazını düzenleyen hormonlardan biri değildir:",
    options: [
      "A) Paratiroid Hormonu (PTH)",
      "B) Kalsitonin",
      "C) D vitamini (Kalsitriol)",
      "D) Aldosteron",
      "E) Hepsi",
    ],
    answer: 3,
  },
  {
    question: "8. Magnezyum vücutta en çok hangi bölgede bulunur?",
    options: [
      "A) Karaciğer",
      "B) Kemikler",
      "C) Kan plazması",
      "D) Beyin",
      "E) Bağırsaklar",
    ],
    answer: 1,
  },
  {
    question:
      "9. Aşağıdaki yöntemlerden hangisi serbest (iyonize) kalsiyum tayininde kullanılır?",
    options: [
      "A) o-Cresolphthalein Complexone",
      "B) Arsenazo III",
      "C) İyon Seçici Elektrot",
      "D) Xylidyl Blue",
      "E) Calmagite",
    ],
    answer: 2,
  },
  {
    question:
      "10. Magnezyum tayininde kullanılan reaktiflerden biri aşağıdakilerden hangisidir?",
    options: [
      "A) Arsenazo III",
      "B) Calcein",
      "C) Calmagite",
      "D) Bromfenol Mavisi",
      "E) Hematoksilin",
    ],
    answer: 2,
  },
  {
    question:
      "11. Demir mineralinin insan vücudundaki temel işlevi aşağıdakilerden hangisidir?",
    options: [
      "A) Kan şekerini düzenlemek",
      "B) Oksijen taşınması ve enerji üretimini sağlamak",
      "C) Kemik yoğunluğunu artırmak",
      "D) Sinir sinyallerinin iletilmesini hızlandırmak",
      "E) Bağışıklık hücrelerinin üretimini yönetmek",
    ],
    answer: 1,
  },
  {
    question:
      "12. Demirin ince bağırsaklardan emilebilmesi için hangi forma dönüşmesi gerekir?",
    options: [
      "A) Ferritin (Fe⁺³)",
      "B) Ferröz demir (Fe⁺²)",
      "C) Hemosiderin",
      "D) Transferrin bağlı demir",
      "E) Lipozomal demir",
    ],
    answer: 1,
  },
  {
    question:
      "13. Aşağıdakilerden hangisi, demirin vücuttaki temel depo proteinidir?",
    options: [
      "A) Hemoglobin",
      "B) Transferrin",
      "C) Ferritin",
      "D) Miyoglobin",
      "E) Sitokrom",
    ],
    answer: 2,
  },
  {
    question:
      "14. C vitamininin (askorbik asit) demir metabolizmasındaki rolü nedir?",
    options: [
      "A) Ferritin yapımını engeller",
      "B) Non-hem demiri Fe⁺² formuna indirgeyerek emilimi artırır",
      "C) Demirin idrarla atılımını hızlandırır",
      "D) Hem demirinin emilimini baskılar",
      "E) Transferrin sentezini azaltır",
    ],
    answer: 1,
  },
  {
    question:
      "15. Demir eksikliği durumunda ortaya çıkabilecek klinik bulgular arasında aşağıdakilerden hangisi yer **almaz**?",
    options: [
      "A) Halsizlik ve solgun cilt",
      "B) DNA/RNA sentezinde bozulma",
      "C) Tırnak kırılması ve saç dökülmesi",
      "D) Karaciğer enzimlerinde kalıcı artış",
      "E) Anormal besin istekleri (toprak, buz)",
    ],
    answer: 3,
  },
  {
    question: "16. Fosfat vücutta en çok hangi yapıda bulunur?",
    options: ["A) Kas", "B) Kan", "C) Kemik", "D) Karaciğer", "E) Mide"],
    answer: 2,
  },
  {
    question:
      "17. Fosfat seviyesini düşüren hormon aşağıdakilerden hangisidir?",
    options: [
      "A) D vitamini",
      "B) Parathormon",
      "C) Adrenalin",
      "D) Glukagon",
      "E) Tiroksin",
    ],
    answer: 1,
  },
  {
    question: "18. Kanda fosfat miktarı hangi yöntemle ölçülür?",
    options: [
      "A) Termometreyle",
      "B) Mikroskopla",
      "C) Spektrofotometri ile",
      "D) Stetoskopla",
      "E) Ultrasonla",
    ],
    answer: 2,
  },
  {
    question: "19. Fosfat eksikliği olan bir kişide hangisi görülmez?",
    options: [
      "A) Kemikzayıflığı",
      "B) Kas güçsüzlüğü",
      "C) Diş problemleri",
      "D) Yüksek tansiyon",
      "E) Halsizlik",
    ],
    answer: 3,
  },
  {
    question: "20. Fosfat hangi besinde fazlaca bulunur?",
    options: [
      "A) Şeker",
      "B) Et ve süt ürünleri",
      "C) Gazlı içecekler",
      "D) Yağ",
      "E) Tuz",
    ],
    answer: 1,
  },
  {
    question:
      "21. Aşağıdakilerden hangisi hiponatremi belirtilerinden biri değildir?",
    options: [
      "A) Kas krampları",
      "B) Konfüzyon",
      "C) Yüksek kan basıncı",
      "D) Baş ağrısı",
      "E) Nöbetler",
    ],
    answer: 2,
  },
  {
    question:
      "22. Na⁺/K⁺-ATPaz pompası hakkında aşağıdakilerden hangisi yanlıştır?",
    options: [
      "A) Hücre içinden 3 Na⁺ dışarı pompalanır",
      "B) Hücre dışından 2 K⁺ içeri alınır",
      "C) ATP harcayarak aktif taşıma yapar",
      "D) Hücre içi potasyumun düşük tutulmasını sağlar",
      "E) Membran potansiyelinin korunmasında rol oynar",
    ],
    answer: 3,
  },
  {
    question:
      "23. Hiperkalemi tedavisinde kullanılan ilaçlardan biri olan glukoz ve insülinin amacı nedir?",
    options: [
      "A) Böbreklerden potasyum atılımını artırmak",
      "B) Potasyumun hücre dışına çıkmasını sağlamak",
      "C) Potasyumun hücre içine geçişini kolaylaştırmak",
      "D) Kalp kasını güçlendirmek",
      "E) Klor seviyesini düzenlemek",
    ],
    answer: 2,
  },
  {
    question:
      "24. Aşağıdakilerden hangisi sodyum düzeyinin ölçümünde kullanılan yaygın bir yöntemdir?",
    options: [
      "A) ELISA",
      "B) Alev fotometrisi",
      "C) İyon-selektif elektrot (ISE)",
      "D) Western Blot",
      "E) PCR",
    ],
    answer: 2,
  },
  {
    question:
      "25. Aşağıdaki durumlardan hangisi artmış anyon açıklığına yol açmaz?",
    options: [
      "A) Laktik asidoz",
      "B) Metanol zehirlenmesi",
      "C) Hipokloremi",
      "D) Diyabetik ketoasidoz",
      "E) Sodyumun normal aralıkta olması",
    ],
    answer: 4,
  },
  {
    question:
      "26. Aşağıdakilerden hangisi reaktif oksijen türlerinden biri değildir?",
    options: [
      "A) Süperoksit anyonu",
      "B) Hidrojen peroksit",
      "C) Glukoz",
      "D) Ozon",
      "E) Singlet oksijen",
    ],
    answer: 2,
  },
  {
    question:
      "27. Hidrojen peroksit varlığında Fenton reaksiyonu sonucu hangi serbest radikal oluşur?",
    options: [
      "A) Süperoksit anyonu",
      "B) Singlet oksijen",
      "C) Hidroksil radikali",
      "D) Ozon",
      "E) Nitrit",
    ],
    answer: 2,
  },
  {
    question: "28. Oksidatif stresin temel nedeni nedir?",
    options: [
      "A) Vücutta protein sentezinin artması",
      "B) Antioksidanların aşırı üretimi",
      "C) Serbest radikal ve antioksidanlar arasındaki dengesizlik",
      "D) Hücre bölünmesinin hızlanması",
      "E) Enzim aktivitesinin azalması",
    ],
    answer: 2,
  },
  {
    question:
      "29. Aşağıdaki hastalıklardan hangisi oksidatif stresle doğrudan ilişkili değildir?",
    options: [
      "A) Alzheimer",
      "B) Kanser",
      "C) Astım",
      "D) Diyabet",
      "E) Parkinson",
    ],
    answer: 2,
  },
  {
    question:
      "30. Aşağıdaki antioksidanlardan hangisi suda çözünür ve serbest radikalleri süpürmede etkilidir?",
    options: [
      "A) P-karoten",
      "B) C vitamini",
      "C) E vitamini",
      "D) Glutatyon peroksidaz",
      "E) NADPH",
    ],
    answer: 1,
  },
  {
    question: "31. Sinovyal sıvının başlıca işlevi nedir?",
    options: [
      "A) Eklem boşluğunu doldurmak",
      "B) Kemikleri güçlendirmek",
      "C) Kasların kasılmasını sağlamak",
      "D) Sürtünmeyi azaltmak",
      "E) Kemik iliği üretimini desteklemek",
    ],
    answer: 3,
  },
  {
    question:
      "32. Aşağıdakilerden hangisi gut hastalığında en önemli ayırıcı tanı olarak değerlendirlir?",
    options: [
      "A) septikartrit",
      "B)sinovyal sıvı eksikliği",
      "C)eklemboşluğu daralması",
      "D)osteofit",
      "E)subkomdral skleroz",
    ],
    answer: 0,
  },
  {
    question:
      "33. Rivalta testi aşağıdakilerden hangisini ayırt etmek için kullanılır?",
    options: [
      "A) Virüsleri bakterilerden",
      "B) Transüdatve eksüdat sıvılarını",
      "C) Kemikvekas hastalıklarını",
      "D) Akutve kronik iltihapları",
      "E) Seröz ve sinovyal sıvıları",
    ],
    answer: 1,
  },
  {
    question:
      "34.  1. Noninflamatuar 2. inflamatuar 3. hemorajik 4. septik  yukarıdakilerden hangisi veya hangileri sinoviyal sıvı sınıflandırılmasına aittir?",
    options: ["A) 1ve2", "B) 3ve4", "C) hepsi", "D) 2,3ve 4", "E) 1,2ve 3"],
    answer: 2,
  },
  {
    question:
      "35.Aşağıdakilerden hangisi romatoid artritte kullanılan etken maddelerden biridir?",
    options: [
      "A) metilsalisilat",
      "B) diazepam",
      "C) lidokain",
      "D) donezepil",
      "E) adenozin",
    ],
    answer: 0,
  },
  {
    question:
      "36. Aşağıdakilerden hangisi beyin-omuriliksıvısının (BOS) ana işlevlerinden biri değildir?",
    options: [
      "A) Beyin ve omuriliği darbelere ve travmalara karşı korumak.",
      "B) Beyin ve omuriliği besleyerek sağlıklı işlev görmesini sağlamak.",
      "C) Vücut ısısını düzenlemek.",
      "D) Atık maddelerin uzaklaştırılmasına yardımcı olmak.",
    ],
    answer: 2,
  },

  {
    question:
      "37. Omurilik sıvısı (BOŞ) testi aşağıdaki hastalıklardan hangisinin teşhisi için yapılmaz?",
    options: [
      "A) Menenjit.",
      "B) Multipl skleroz.",
      "C) Grip.",
      "D) Psödotümör serebri.",
    ],
    answer: 2,
  },
  {
    question:
      "38. Aşağıdakilerden hangisi omurilik sıvısının azalmasına neden olabilecek durumlardan biri değildir?",
    options: [
      "A) Kafa veya omurga travmaları.",
      "B) Yeterli su alımı.",
      "C) Beyinle ilgili cerrahi müdahaleler.",
      "D) Menenjit gibi beyin zarlarını etkileyen hastalıklar.",
    ],
    answer: 1,
  },
  {
    question: "39. Omurilik sıvısı kaçağının en yaygın belirtisi nedir?",
    options: [
      "A) Mide bulantısı ve halsizlik.",
      "B) Şiddetli baş ağrıları.",
      "C) İşitme kaybı.",
      "D) Sırt ağrıları.",
    ],
    answer: 1,
  },
  {
    question:
      "40. Bel suyu alınması işlemınden sonra en sık izlenen problem nedir?",
    options: [
      "A) Lokal kanama.",
      "B) Sinir yaralanması.",
      "C) Baş ağrısı.",
      "D) Enfeksiyon.",
    ],
    answer: 2,
  },
  {
    question: "41. Çinko vücutta en çok hangi organlarda depolanır?",
    options: [
      "A) Kalp, akciğer, pankreas",
      "B) Kaslar, kemikler, karaciğer",
      "C) Beyin, mide, bağırsak",
      "D) Dalak, böbrek, karaciğer",
    ],
    answer: 1,
  },
  {
    question:
      "42. Aşağıdakilerden hangisi çinko eksikliğinin belirtilerinden biridir?",
    options: [
      "A) Yüksek tansiyon",
      "B) Tat ve koku kaybı",
      "C) Göz kararması",
      "D) Hızlı kilo alımı",
    ],
    answer: 1,
  },
  {
    question: "43. Aşağıdaki durumlardan hangisi çinko emilimini azaltabilir?",
    options: [
      "A) Yüksek proteinli diyet",
      "B) Düzenli egzersiz",
      "C) Bitkisel beslenmedeki fitat içeriği",
      "D) Yüksek kalsiyum alımı",
    ],
    answer: 2,
  },
  {
    question: "44. Aşağıdaki yöntemlerden hangisi çinko tayininde kullanılır?",
    options: [
      "A) Elisa testi",
      "B) MR görüntüleme",
      "C) Alevli Atomik Absorpsiyon Spektrofotometresi (AAS)",
      "D) PCR testi",
    ],
    answer: 2,
  },
  {
    question:
      "45. Aşağıdaki ilaçlardan hangisi çinko ile şelat oluşturarak emilimini azaltır?",
    options: ["A) Parasetamol", "B) Penisilin", "C) Tetrasiklin", "D) Aspirin"],
    answer: 2,
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
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "40px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          sınav geçme methodu -{">"}{" "}
        </h1>
        <div style={{ textAlign: "center" }}>
          <a
            style={{
              color: "blue",
              textDecoration: "underline",
              fontSize: "1.5rem",
              fontWeight: "600",
              marginBottom: "20px",
              textAlign: "center",
            }}
            href="https://i.ytimg.com/vi/hZpdMOMip2E/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgUChUMA8=&rs=AOn4CLA1QWn2fHZcGCFb3Lo3UKcl5vqwEQ"
          >
            tıkla!
          </a>
        </div>

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

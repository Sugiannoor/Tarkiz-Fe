import Loading from '@/Components/Loading';
import { Button } from '@material-tailwind/react';
import { Page, Text, View, Document, PDFViewer, Image } from '@react-pdf/renderer';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';


const DescriptionItem = ({ title, description }: { title: string; description?: string }) => (
  <View style={{ display: 'flex', flexDirection: 'row', fontSize: 9, marginBottom: 4 }}>
    <View style={{ width: '40%' }}>
      <Text>{title}</Text>
    </View>
    <View style={{ padding: '0 12px' }}>
      <Text>:</Text>
    </View>
    <View>
      <Text>{description}</Text>
    </View>
  </View>
);

export const ContractPrint: React.FC = () => {
  const { id } = useParams<'id'>();
//   const {data, isError, isLoading} = useQuery ({
//     queryKey:['contract', id],
//     queryFn: ()=> 
//   })
  const navigate = useNavigate();

//   if (isLoading)
//     return (
//       <div className="mt-48">
//         <Loading/>
//       </div>
//     );

//   if (isError)
//     return (
//       <div className="mt-48 text-center">
//         <h1 className="text-lg font-bold mb-2">Service tidak ditemukan</h1>
//         <Button placeholder={""} onClick={() => navigate(-1)}>
//           Kembali
//         </Button>
//       </div>
//     );

  return (
    <PDFViewer width="100%" height={1080}>
      <Document>
        <Page size="A4" style={{ fontFamily: 'Helvetica' }}>
          <View style={{ margin: '0.5cm 1cm' }}>
            <View style={{
                display: 'flex',
                flexDirection: "row",
                fontSize: "10",
                gap:  '15px',
                alignItems: 'center'
            }}>
            <Image
              source="/user_default.png "
              style={{ width: '1.76cm', height: '1.76cm' }}
              />
              <Text>Tarkiz Paz Banua</Text>
              </View>
              <View
                style={{
                  borderBottom: 1,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  width: '100%',
                  height: 10,
                }}
              ></View>
          </View>

          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontFamily: 'Helvetica-Bold', fontSize: 9, marginLeft: "55px" }}>
              Detail Kontrak: 
            </Text>
          </View>

          <View style={{ margin: '0 2cm', fontSize: 9, lineHeight: 1.5 }}>
            <View style={{ marginBottom: 8 }}>
              <DescriptionItem title="Kode Kontrak" description={"Test Saja Cuy"} />
              <DescriptionItem
                title="Nama Pengguna"
                description="-"
              />
              <DescriptionItem title="Email Pengguna" description={"Test Saja Cuy"} />
              <DescriptionItem
                title="Nama Program"
                description={"Test Saja Cuy"}
              />
              <DescriptionItem
                title="Produk"
                description={"Test Saja Cuy"}
              />
              <DescriptionItem title="Teknologi digunakan (Jika Ada)" description="-" />
            </View>
            <View style={{ margin: '4px 0' }}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>Masalah:</Text>
              <View
                style={{
                  borderBottom: 1,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  width: '100%',
                  height: 10,
                }}
              ></View>
              <View
                style={{
                  borderBottom: 1,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  width: '100%',
                  height: 12,
                }}
              ></View>
            </View>
            <View style={{ margin: '4px 0' }}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>Tindakan:</Text>
              <View
                style={{
                  borderBottom: 1,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  width: '100%',
                  height: 10,
                }}
              ></View>
              <View
                style={{
                  borderBottom: 1,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  width: '100%',
                  height: 12,
                }}
              ></View>
              <View
                style={{
                  borderBottom: 1,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  width: '100%',
                  height: 12,
                }}
              ></View>
            </View>
            <View style={{ margin: '4px 0' }}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>Hasil:</Text>
              <View
                style={{
                  borderBottom: 1,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  width: '100%',
                  height: 10,
                }}
              ></View>
              <View
                style={{
                  borderBottom: 1,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  width: '100%',
                  height: 12,
                }}
              ></View>
              <View
                style={{
                  borderBottom: 1,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  width: '100%',
                  height: 12,
                }}
              ></View>
            </View>
            <View style={{ margin: '4px 0' }}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>Saran:</Text>
              <View
                style={{
                  borderBottom: 1,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  width: '100%',
                  height: 10,
                }}
              ></View>
              <View
                style={{
                  borderBottom: 1,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  width: '100%',
                  height: 12,
                }}
              ></View>
            </View>
            <View style={{ margin: '4px 0' }}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>Keterangan:</Text>
              <View
                style={{
                  borderBottom: 1,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  width: '100%',
                  height: 10,
                }}
              ></View>
              <View
                style={{
                  borderBottom: 1,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  width: '100%',
                  height: 12,
                }}
              ></View>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                textAlign: 'center',
                justifyContent: 'space-between',
                marginTop: 16,
                marginBottom: 16,
              }}
            >
              <View style={{ width: '25%' }}>
                <Text>Disetujui</Text>
                <View
                  style={{
                    marginTop: 36,
                    borderBottom: 1,
                    borderStyle: 'solid',
                    borderColor: 'black',
                    width: '100%',
                    height: 10,
                  }}
                ></View>
              </View>
              <View style={{ width: '25%' }}>
                <Text>Mengetahui</Text>
                <View
                  style={{
                    marginTop: 36,
                    borderBottom: 1,
                    borderStyle: 'solid',
                    borderColor: 'black',
                    width: '100%',
                    height: 10,
                  }}
                ></View>
              </View>
              <View style={{ width: '25%' }}>
                <Text>t-paz Banua</Text>
                <Text
                  style={{
                    marginTop: 36,
                  }}
                >
                  {"Nama Seseorang"}
                </Text>
              </View>
            </View>

            <View style={{ color: 'black' }}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>Tarkiz Paz Banua</Text>
              <Text>Bang Junai</Text>
              <Text>
                Jl. Banjarbaru
              </Text>
              <Text>mail.t-paz@gmail.com</Text>
              <Text>
                T. +62 21 3970 5555
              </Text>
              <Text>www.t-paz.com</Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

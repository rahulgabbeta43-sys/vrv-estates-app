import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Image, Linking } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const SITE = 'https://project-startup-psi.vercel.app/';
const WA = 'https://wa.me/919989698152';
const GOLD = '#d8b66c';

const properties = [
  { id: '1', title: 'Premium Residential Plot', type: 'Residential Plot', location: 'Ramanthapur, Hyderabad', price: 'Contact for price', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1000' },
  { id: '2', title: 'Independent House', type: 'Independent House', location: 'Hyderabad, Telangana', price: 'Contact for price', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000' },
  { id: '3', title: 'Commercial Property', type: 'Commercial', location: 'Greater Hyderabad', price: 'Contact for price', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1000' },
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const open = (url: string) => Linking.openURL(url);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <View style={styles.loader}><StatusBar style="light" /><Text style={styles.loaderLogo}>VRV</Text><View style={styles.loaderLine}><View style={styles.loaderProgress} /></View><Text style={styles.loaderLabel}>ESTATES</Text></View>;
  }

  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false} onScroll={(event) => setScrolled(event.nativeEvent.contentOffset.y > 24)} scrollEventThrottle={16}>
        <View style={[styles.header, scrolled && styles.headerScrolled]}>
          <View><Text style={styles.brand}>VRV <Text style={styles.brandGold}>ESTATES</Text></Text><Text style={styles.brandSub}>HYDERABAD PROPERTIES</Text></View>
          <Pressable accessibilityLabel="Open VRV Estates website" onPress={() => open(SITE)} style={styles.globe}><Ionicons name="globe-outline" size={20} color={GOLD} /></Pressable>
        </View>

        <View style={styles.hero}>
          <Text style={styles.eyebrow}>RAMANTHAPUR  •  HYDERABAD  •  TELANGANA</Text>
          <Text style={styles.heroTitle}>Premium Properties{`\n`}<Text style={styles.goldText}>& Land, Curated.</Text></Text>
          <Text style={styles.heroCopy}>Discover thoughtfully selected homes, residential plots and commercial properties across Hyderabad — with direct, transparent guidance from VRV Estates.</Text>
          <View style={styles.actions}>
            <Pressable style={styles.primary} onPress={() => open(`${SITE}#all-properties`)}><Text style={styles.primaryText}>Explore Properties</Text><Ionicons name="arrow-forward" size={17} color="#07100d" /></Pressable>
            <Pressable style={styles.outline} onPress={() => open('tel:+919989698152')}><Ionicons name="call-outline" size={18} color="#fff" /><Text style={styles.outlineText}>Call</Text></Pressable>
            <Pressable accessibilityLabel="Contact VRV Estates on WhatsApp" style={styles.whatsapp} onPress={() => open(WA)}><Ionicons name="logo-whatsapp" size={20} color="#fff" /></Pressable>
          </View>
        </View>

        <View style={styles.body}>
          <Text style={styles.eyebrow}>FEATURED PROPERTIES</Text><Text style={styles.sectionTitle}>Find a place worth owning.</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardRow}>
            {properties.map((property) => <Pressable key={property.id} style={styles.card} onPress={() => open(`${SITE}#all-properties`)}><Image source={{ uri: property.image }} style={styles.cardImage} /><View style={styles.cardContent}><Text style={styles.cardType}>{property.type}</Text><Text style={styles.cardTitle}>{property.title}</Text><Text style={styles.cardLocation}><Ionicons name="location-outline" size={14} color="#999" /> {property.location}</Text><Text style={styles.cardPrice}>{property.price}</Text></View></Pressable>)}
          </ScrollView>

          <Text style={[styles.eyebrow, styles.categoryEyebrow]}>EXPLORE BY CATEGORY</Text><Text style={styles.sectionTitle}>Property, your way.</Text>
          <View style={styles.categoryGrid}>{[['home-outline', 'Luxury Homes'], ['map-outline', 'Residential Plots'], ['business-outline', 'Commercial'], ['key-outline', 'Independent Houses']].map(([icon, label]) => <Pressable key={label} style={styles.category} onPress={() => open(`${SITE}#all-properties`)}><Ionicons name={icon as any} size={25} color={GOLD} /><Text style={styles.categoryText}>{label}</Text><Ionicons name="arrow-forward" size={16} color="#777" /></Pressable>)}</View>

          <View style={styles.about}><Text style={styles.eyebrow}>TRUSTED GUIDANCE</Text><Text style={styles.sectionTitle}>Meet Rahul Gabbeta.</Text><Text style={styles.aboutCopy}>VRV Estates simplifies property acquisition across Ramanthapur and greater Hyderabad. Our focus is personalized service built on clarity and trust.</Text><View style={styles.actions}><Pressable style={styles.primary} onPress={() => open('tel:+919989698152')}><Text style={styles.primaryText}>Call Rahul</Text></Pressable><Pressable style={styles.outline} onPress={() => open(WA)}><Text style={styles.outlineText}>Send Enquiry</Text></Pressable></View></View>
          <View style={styles.footer}><Text style={styles.brand}>VRV <Text style={styles.brandGold}>ESTATES</Text></Text><Text style={styles.footerText}>Ramanthapur, Hyderabad, Telangana 500013</Text><Text style={styles.footerText}>Rahul Gabbeta  •  +91 9989698152</Text><Text style={styles.copy}>© VRV Estates. All rights reserved.</Text></View>
        </View>
      </ScrollView>
      <Pressable accessibilityLabel="WhatsApp VRV Estates" style={styles.fab} onPress={() => open(WA)}><Ionicons name="logo-whatsapp" size={25} color="#fff" /></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#07100d' }, loader: { flex: 1, backgroundColor: '#07100d', alignItems: 'center', justifyContent: 'center' }, loaderLogo: { color: GOLD, fontSize: 44, fontWeight: '800', letterSpacing: 7 }, loaderLabel: { color: '#8f8f8f', fontSize: 10, letterSpacing: 5 }, loaderLine: { width: 180, height: 2, backgroundColor: 'rgba(255,255,255,.15)', marginVertical: 20, overflow: 'hidden' }, loaderProgress: { width: '60%', height: '100%', backgroundColor: GOLD }, header: { position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2, paddingHorizontal: 22, paddingTop: 55, paddingBottom: 14, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, headerScrolled: { backgroundColor: 'rgba(7,16,13,.92)' }, brand: { color: '#fff', fontSize: 22, fontWeight: '800', letterSpacing: 2 }, brandGold: { color: GOLD }, brandSub: { color: GOLD, fontSize: 8, letterSpacing: 2, marginTop: 2 }, globe: { width: 42, height: 42, borderRadius: 21, borderWidth: 1, borderColor: '#536057', alignItems: 'center', justifyContent: 'center' }, hero: { padding: 22, paddingTop: 170, paddingBottom: 42, backgroundColor: '#07100d' }, eyebrow: { color: GOLD, fontSize: 10, fontWeight: '700', letterSpacing: 1.8 }, heroTitle: { color: '#fff', fontSize: 40, lineHeight: 45, fontWeight: '800', marginTop: 16 }, goldText: { color: GOLD }, heroCopy: { color: '#a9b0aa', fontSize: 14, lineHeight: 22, marginTop: 16 }, actions: { flexDirection: 'row', gap: 9, marginTop: 24, alignItems: 'center' }, primary: { backgroundColor: GOLD, paddingHorizontal: 16, paddingVertical: 13, borderRadius: 7, flexDirection: 'row', alignItems: 'center', gap: 9 }, primaryText: { color: '#07100d', fontWeight: '800' }, outline: { borderWidth: 1, borderColor: '#526057', paddingHorizontal: 15, paddingVertical: 12, borderRadius: 7, flexDirection: 'row', alignItems: 'center', gap: 6 }, outlineText: { color: '#fff', fontWeight: '700' }, whatsapp: { width: 45, height: 45, borderRadius: 7, backgroundColor: '#1b8d53', alignItems: 'center', justifyContent: 'center' }, body: { padding: 22, backgroundColor: '#0c1511' }, sectionTitle: { color: '#fff', fontSize: 28, fontWeight: '800', marginTop: 8, marginBottom: 18 }, cardRow: { gap: 16, paddingBottom: 8 }, card: { width: 270, backgroundColor: '#16201b', borderRadius: 12, overflow: 'hidden', borderWidth: 1, borderColor: '#243129' }, cardImage: { width: '100%', height: 170 }, cardContent: { padding: 15 }, cardType: { color: GOLD, fontSize: 10, textTransform: 'uppercase', fontWeight: '700', letterSpacing: 1 }, cardTitle: { color: '#fff', fontSize: 18, fontWeight: '800', marginTop: 5 }, cardLocation: { color: '#999', fontSize: 12, marginTop: 8 }, cardPrice: { color: '#fff', fontWeight: '800', marginTop: 12 }, categoryEyebrow: { marginTop: 32 }, categoryGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 }, category: { width: '47%', minHeight: 112, backgroundColor: '#16201b', borderRadius: 10, padding: 16, justifyContent: 'space-between', borderWidth: 1, borderColor: '#243129' }, categoryText: { color: '#fff', fontWeight: '700', lineHeight: 19 }, about: { marginTop: 32, padding: 22, borderRadius: 12, backgroundColor: '#142119', borderWidth: 1, borderColor: '#2e4435' }, aboutCopy: { color: '#a9b0aa', fontSize: 14, lineHeight: 22 }, footer: { paddingVertical: 42, alignItems: 'center', gap: 9 }, footerText: { color: '#8f9992', fontSize: 12, textAlign: 'center' }, copy: { color: '#66716a', fontSize: 11, marginTop: 15 }, fab: { position: 'absolute', right: 20, bottom: 22, width: 56, height: 56, borderRadius: 28, backgroundColor: '#1b8d53', alignItems: 'center', justifyContent: 'center', elevation: 8 },
});

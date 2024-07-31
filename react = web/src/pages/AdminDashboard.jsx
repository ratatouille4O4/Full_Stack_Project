import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import adminStyles from '../styles/adminStyles';

const AdminDashboardScreen = () => (
    <View style={adminStyles.container}>
        <Text style={adminStyles.title}>Admin Dashboard</Text>
        <View style={adminStyles.section}>
            <Text style={adminStyles.sectionTitle}>Manage Users</Text>
            {/* Add user management components here */}
        </View>
        <View style={adminStyles.section}>
            <Text style={adminStyles.sectionTitle}>Site Statistics</Text>
            {/* Add statistics components here */}
        </View>
        <TouchableOpacity style={adminStyles.button}>
            <Text style={adminStyles.buttonText}>Log Out</Text>
        </TouchableOpacity>
    </View>
);

export default AdminDashboardScreen;

VERSION 5.00
Object = "{5E9E78A0-531B-11CF-91F6-C2863C385E30}#1.0#0"; "MSFlexGrid.ocx"
Begin VB.Form Form1 
   Caption         =   "Form1"
   ClientHeight    =   6870
   ClientLeft      =   120
   ClientTop       =   465
   ClientWidth     =   9405
   LinkTopic       =   "Form1"
   ScaleHeight     =   6870
   ScaleWidth      =   9405
   StartUpPosition =   3  'Windows Default
   WindowState     =   2  'Maximized
   Begin VB.Frame Frame1 
      Caption         =   " Producto "
      Height          =   6255
      Left            =   240
      TabIndex        =   0
      Top             =   240
      Width           =   7695
      Begin VB.CommandButton Command1 
         Caption         =   "Command1"
         Height          =   615
         Left            =   4800
         TabIndex        =   4
         Top             =   4080
         Width           =   975
      End
      Begin VB.TextBox Text1 
         Height          =   375
         Left            =   1080
         TabIndex        =   3
         Text            =   "Gaseosa Naranja  1L"
         Top             =   360
         Width           =   2295
      End
      Begin MSFlexGridLib.MSFlexGrid MSFlexGrid1 
         Height          =   1335
         Left            =   1080
         TabIndex        =   1
         Top             =   3000
         Width           =   3495
         _ExtentX        =   6165
         _ExtentY        =   2355
         _Version        =   393216
      End
      Begin VB.Label Label1 
         Caption         =   "Descripcion"
         Height          =   495
         Left            =   120
         TabIndex        =   2
         Top             =   360
         Width           =   1095
      End
   End
End
Attribute VB_Name = "Form1"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Option Explicit
Dim i As Integer



Private Sub Command1_Click()

End Sub
